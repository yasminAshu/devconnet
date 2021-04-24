const express = require('express');
const connectDB = require('./config/db');


const app = express();
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))

app.use('/api/post', require('./routes/api/post'))

//connect db
connectDB();

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('API running')
})

app.listen(PORT, () => console.log(`server started on ${PORT} `));
