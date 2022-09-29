const express = require('express');

const app = express();

app.use(express.json());

const activities = [
    {
      id: 1,
      description: 'Banho no cachorro',
      status: 'A fazer',
    },
    {
      id: 2,
      description: 'Cortar a grama',
      status: 'A fazer',
    },
    {
      id: 3,
      description: 'Estudar JavaScript',
      status: 'Feito',
    },
];

app.get('/', (_req, res) => res.status(200).json({ message: 'Hello World!' }));

app.get('/myActivities/:id', (req, res) => {
    const activity = activities.find(({ id }) => id === Number(req.params.id));
    res.status(200).json(activity);
});

app.get('/myActivities', (_req, res) => res.status(200).json({ activities }));

app.get('/filter/myActivities', (req, res) => {
    const { status } = req.query;
    let filteredActivities = activities;

    if (status){
        filteredActivities = activities.filter((activity) => activity.status === status);
        //localhost:3001/filter/myActivities?status=Feito
        //localhost:3001/filter/myActivities?status=A fazer
    }

    //res.status(200).json(filteredActivities);
    res.status(200).json({ activities: filteredActivities });

});

module.exports = app;
