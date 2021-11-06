import express from 'express';

import sequelize from './utils/database.js';

import router from './routes/routes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use((_, res, next) => {
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Origin',"http://192.168.134.1:19006/");
    http://localhost:19006'

    next();
});



app.use(router);

sequelize.sync(); 

app.listen(5000);