const sqlite3 = require('sqlite3');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors')
const router = require('./routes')

const db = new sqlite3.Database('./db/database.db');

const port = 4235;

// configure CORS
const corsOptions = {
  origin: 'https://packs.shyguymatt.com',
  optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions))

app.use(router)

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});