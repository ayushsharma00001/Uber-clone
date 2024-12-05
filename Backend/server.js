const http = require('http');
const app = require("./app.js");
const port = process.env.PORT || 3000;
const connectToDb = require("./db/db.js");
const {intializeSocket} = require("./socket.js");


const server = http.createServer(app);

intializeSocket(server);

server.listen(port,()=>{
    connectToDb();
    console.log(`Server is Listening on ${port}`)
})