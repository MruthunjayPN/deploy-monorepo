import { WebSocketServer } from 'ws';
import prisma from "@repo/prisma/client"
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

await prisma.user.create({
    data : {
        userName : Math.random().toString(),
        password : Math.random().toString(),
    }
})
ws.send('fake user created successfully on connection with ws server');

});