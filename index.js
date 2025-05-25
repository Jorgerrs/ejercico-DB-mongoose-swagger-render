require('dotenv').config();
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')
const express = require('express');
const connectDB = require('./config/config');
const tasksRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', tasksRoutes);
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor en http://localhost:${PORT}`);
  });
});

