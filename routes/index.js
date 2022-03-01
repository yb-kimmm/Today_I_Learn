const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { User, Domain } = require('../models');
const { isLoggedIn } = require('./middlewares');
const axios = require('axios');

const router = express.Router();
const URL = 'http://localhost:8001/v1';

module.exports = router;
