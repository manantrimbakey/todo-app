const express = require("express");
const mysql = require("mysql2");
const props = require("../appProps/props.js");
const app = express();
const port = props.expressPort;

const connection = mysql.createConnection({
    host: port.mysqlServer,
    port: port.mysqlPort,
    user: "root",
    password: props.mysqlPassword,
    database: "Todo_database",
});

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

const sql = "SELECT * FROM Notes";

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.get("/Notes", (req, res) => {
    connection.query(sql, (error, results, fields) => {
        if (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
        console.log(results);
        res.statusCode = 200;
        res.send(results);
    });
});

app.get("/Notes/:id", (req, res) => {
    const id = req.params.id;
    let sqlWithId = `SELECT * FROM Notes WHERE noteId = ${id}`;
    connection.query(sqlWithId, (error, results, fields) => {
        if (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
        console.log(results);
        res.statusCode = 200;
        res.send(results);
    });
});

app.get("/Notes", (req, res) => {
    const id = req.params.id;
    let sqlWithId = `SELECT * FROM Notes WHERE noteId = ${id}`;
    connection.query(sqlWithId, (error, results, fields) => {
        if (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
        console.log(results);
        res.statusCode = 200;
        res.send(results);
    });
});

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
