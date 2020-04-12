import express from 'express';

const routes = new express.Router();

routes.get('/', (req, res) => {
    res.send('Working a log')
});

export default routes;
