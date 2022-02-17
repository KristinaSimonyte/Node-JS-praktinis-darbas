const express = require('express');

const servicesRoutes = express.Router();
const { serviceIndex, createService, deleteService } = require('../controllers/servicesController');

servicesRoutes.get('/services', serviceIndex);
servicesRoutes.post('/services', createService);
servicesRoutes.delete('/services/:deleteId', deleteService);

module.exports = servicesRoutes;
