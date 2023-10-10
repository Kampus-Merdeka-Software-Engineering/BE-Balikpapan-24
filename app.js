require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');

const routes = require('./routes');

//middleware
app.use((req, res, next) => {
    console.log( `Method: ${req.method} ${req.path}`);
    next()
}); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes.forEach((route) => app.use(route));


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server sedang berjalan di http://localhost:${PORT}`));



