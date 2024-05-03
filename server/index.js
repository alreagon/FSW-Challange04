const http = require("http");
const port = 1234;

const fs = require("fs");

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        req.url = "index.html";
        break;
      case "/cars.html":
        req.url = "cars.html";
        break;
    }
    let path = "public/" + req.url;
    fs.readFile(path, (err, data) => {
      res.writeHead(200);
      res.end(data);
    });

    // fs.exists(absolutePath, (exists) => {
    //   if (!exists) {
    //     res.writeHead(404);
    //     res.end("File not found ...");
    //     return;
    //   }
    // });

    // fs.readFile(absolutePath, (err, data) => {
    //   if (err) {
    //     res.statusCode = 500;
    //     res.end("File not found ...");
    //   } else {
    //     res.setHeader("Content-Type", contentTypes[extension] || "text/plain");
    //     res.end(data);
    //   }
    // });
  })
  .listen(port, "localhost", () => {
    console.log("Server is running, visit http://localhost:%d", port);
  });

// ===============

// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const url = require("url");
// const PUBLIC_DIRECTORY = path.join(__dirname, "../public");
// const port = 1234;

// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("Page not found ...");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// http
//   .createServer((req, res) => {
//     let reqUrl = req.url;
//     switch (reqUrl) {
//       case "/" || "":
//         reqUrl = "/index.html";
//         break;
//       case "/sewa":
//         reqUrl = "/cars.html";
//         break;
//       default:
//         reqUrl = req.url;
//         break;
//     }
//     const parseURL = url.parse(reqUrl);
//     const pathName = `${parseURL.pathname}`;
//     const extension = path.parse(pathName).ext;
//     const absolutePath = path.join(PUBLIC_DIRECTORY, pathName);

//     const contentTypes = {
//       ".css": "text/css",
//       ".png": "image/png",
//       ".svg": "image/svg+xml",
//       ".html": "text/html",
//       ".js": "text/javascript",
//     };

//     fs.exists(absolutePath, (exists) => {
//       if (!exists) {
//         res.writeHead(404);
//         res.end("File not found ...");
//         return;
//       }
//     });

//     fs.readFile(absolutePath, (err, data) => {
//       if (err) {
//         res.statusCode = 500;
//         res.end("File not found ...");
//       } else {
//         res.setHeader("Content-Type", contentTypes[extension] || "text/plain");
//         res.end(data);
//       }
//     });
//   })

//   .listen(port, "localhost", () => {
//     console.log("Server is running, visit http://localhost:%d", port);
//   });

//=====================

// const http = require('http');
// const fs = require('fs');

// const port = 8000;

// http.createServer((req, res) => {
//       switch (req.url) {
//         case "/":
//           req.url = "index.html";
//           break;
//         case "/cars":
//           req.url = "searchcar.html";
//           break;
//       }
//       let path = "public/" + req.url;
//       fs.readFile(path, (err, data) => {
//         res.writeHead(200);
//         res.end(data);
//       });
// })
// .listen(port,'localhost', () => {
//   console.log("Server sudah berjalan, silahkan buka http://localhost:%d", port);
// });
