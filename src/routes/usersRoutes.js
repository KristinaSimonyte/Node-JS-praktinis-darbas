const express = require('express');

const usersRoutes = express.Router();
const { usersIndex, createUser } = require('../controllers/usersController');

usersRoutes.get('/users/:sortParam?', usersIndex);
usersRoutes.post('/users', createUser);

module.exports = usersRoutes;
