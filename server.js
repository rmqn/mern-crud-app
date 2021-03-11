const express = require('express');
const app = express();
require('dotenv').config({ path: './config/.env' });
require('./config/db');
const usersRoutes = require('./routes/users.routes');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('/*', (_, res) => res.sendFile(path.resolve(__dirname, './client/build/index.html')))
}

// server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})