const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoute');

//Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

//API routes
app.use('/api', apiRoutes);

//HTML routes
app.use('/', htmlRoutes);


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))