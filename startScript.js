const { spawn } = require("child_process");

const server = spawn(/^win/.test(process.platform) ? "nodemon.cmd" : "nodemon", ["server/server.js"]);

const ui = spawn(/^win/.test(process.platform) ? "npm.cmd" : "npm", ["run", "startreactui"]);

server.stdout.on("data", (data) => {
    console.log(`${data}`);
});

server.stderr.on("data", (data) => {
    console.log(`${data}`);
});

server.on("close", (code) => {
    console.log(`${code}`);
});

ui.stdout.on("data", (data) => {
    console.log(`${data}`);
});

ui.stderr.on("data", (data) => {
    console.log(`${data}`);
});

ui.on("close", (code) => {
    console.log(`${code}`);
});
