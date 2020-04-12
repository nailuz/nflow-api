import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Api works');
})

app.listen(process.env.PORT, process.env.HOST);
