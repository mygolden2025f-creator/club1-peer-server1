// index.js
const { PeerServer } = require("peer");

// تشغيل PeerJS server
const peerServer = PeerServer({
  port: process.env.PORT || 3000,
  path: "/myapp"
});

console.log("PeerJS server is running...");
