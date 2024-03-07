const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 5000;


const server = http.createServer((req, res) => {
   console.log("Client request URL: ", req.url);

   if (req.url === "/") {
      fs.readFile("index.html", "utf8", (err, data) => {
         response.writeHead(200, { "Content-Type": "text/html" });
         response.write(data);
         response.end();
      })
   } else {
      response.writeHead(404);
      response.end("File not found")
   }
})

server.listen(port);
console.log("Running in localhost at : " + port)