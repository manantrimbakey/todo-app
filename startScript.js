const { spawn } = require("child_process");
const server = spawn("node", ["run", "server/server.js"]);
const ui = spawn("npm", ["run", "startreactui"]);

server.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

server.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
});

server.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
});

ui.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

ui.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
});

ui.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
});
