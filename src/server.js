require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const servicesRoutes = require('./routes/servicesRoutes');
const usersRoutes = require('./routes/usersRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/', servicesRoutes);
app.use('/', usersRoutes);

app.listen(PORT, console.log(`server online on port ${PORT}`));
