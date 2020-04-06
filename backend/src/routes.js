const express = require('express');

const routes = express.Router();

routes.get('/', (req, res)=>{

    res.send('Bem-vindo, LocalizaEventos')

})
 routes.post('/agecia', sessionController.create)



module.exports = routes;