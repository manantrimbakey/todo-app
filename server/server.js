const express = require("express");
const mysql = require("mysql2");
const props = require("../appProps/props.js");
const app = express();
const port = props.expressPort;

const connection = mysql.createConnection({
    host: props.mysqlServer,
    port: props.mysqlPort,
    user: props.mysqlUser,
    password: props.mysqlPassword,
    database: "Todo_database",
});

// connect to database

connection.connect(async (err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
    } else {
        console.log("connected as id " + connection.threadId);
    }
});

const sql = "SELECT * FROM Notes";

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

// Get Notes

app.get("/Notes", (req, res) => {
    connection.query(sql, (err, results) => {
        if (err) {
            res.statusCode = 500;
            res.send(err.message);
        } else {
            console.log(results);
            res.statusCode = 200;
            res.send(results);
        }
    });
});

// Get Note by ID

app.get("/Notes/:id", (req, res) => {
    const id = req.params.id;
    let sqlWithId = `SELECT * FROM Notes WHERE noteId = ${id}`;
    connection.query(sqlWithId, (err, results) => {
        if (err) {
            res.statusCode = 500;
            res.send(err.message);
        } else {
            console.log(results);
            res.statusCode = 200;
            res.send(results);
        }
    });
});

// Start Express server

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
