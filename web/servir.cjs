"use strict";
// Servidor local opcional; publica únicamente web/dist en este equipo.
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "dist");
const port = Number(process.argv[2] || 8000);
const mime = {".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml"};
const server = http.createServer((req, res) => {
  try {
    if (!["GET", "HEAD"].includes(req.method)) { res.writeHead(405); res.end(); return; }
    const name = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const file = path.resolve(root, "." + (name === "/" ? "/index.html" : name));
    if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    fs.readFile(file, (error, data) => {
      if (error) { res.writeHead(404); res.end("No encontrado"); return; }
      res.writeHead(200, {"Content-Type": mime[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-store"});
      res.end(req.method === "HEAD" ? undefined : data);
    });
  } catch { res.writeHead(400); res.end("Solicitud inválida"); }
});
server.on("error", (e) => { console.error(e.message); process.exitCode = 1; });
server.listen(port, "127.0.0.1", () => console.log(`Web local: http://127.0.0.1:${port}/ · Ctrl+C para detener`));
