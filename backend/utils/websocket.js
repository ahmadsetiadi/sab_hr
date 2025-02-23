// websocket.js
const WebSocket = require('ws');

let wss;

const initWebSocket = (httpServer) => {
    wss = new WebSocket.Server({ server: httpServer });

    wss.on('connection', (ws) => {
        console.log('New client connected');

        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });
};

const sendProgressUpdate = (progress) => {
    if (wss) {
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ progress }));
            }
        });
    } else {
        console.error('WebSocket server is not initialized');
    }
};

module.exports = {
    initWebSocket,
    sendProgressUpdate,
};
