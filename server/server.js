const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./config/mongoose.config');
require('./routes/authors.routes')(app);
app.listen(8000, () => console.log('Listening on port 8000'));