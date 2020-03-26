const express = require('express');

const OngController = require('./controllers/OngController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');


const routes = express.Router();

// routes.post('/users', (request, response) => {
//     const queryparams = request.query;
//     const routeparams = request.params;
//     const body = request.body;

//     //console.log(queryparams);
//     //console.log(routeparams);
//     console.log(body);

//     return response.json({
//         id: 1,
//         event: 'Semana OmniStack 11.0',
//         name: 'Lucas Bueno Cesário',
//         age: 27
//     });
// })

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;