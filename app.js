const express = require('express');
const connectDB = require('./config/database');
const partidosRouter = require('./routes/partidos');

const app = express();

app.use(express.json());

connectDB();

app.use('/partidos', partidosRouter);

const PORT = process.env.PORT || 3000;


module.exports = { app };


if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}
