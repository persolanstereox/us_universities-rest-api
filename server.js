const express = require('express');

const mongoose = require('mongoose');
const {MONGO_URI} = require('./config')

const univRoutes = require('./routes/api/universities');

const app = express();

app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello from node');
});

app.use('/api/universities', univRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`))