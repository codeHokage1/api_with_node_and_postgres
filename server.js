const express = require('express');
const app = express();

const studentRoutes = require('./routes/studentsRoutes')

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello there! This is an API built with Node and Postgres');
})
app.use('/api/v1/students', studentRoutes);

app.listen(3080, () => {
    console.log('Server listening on port 3080');
})