const express = require('express');

//Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

//HTML routes
app.use('/', htmlRoutes)

//API routes
app.use('/api', apiRoutes)

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))