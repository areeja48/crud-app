const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const userRoutes= require('./routes/users.js') 

const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('HELLO FROM HOMEPAGE'))

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));