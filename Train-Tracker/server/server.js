import express from 'express'
import bp from 'body-parser'
import dotenv from 'dotenv'
import api from './api.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 8000

app.set('view engine', 'ejs')

app.use(express.static("static"))

app.use(bp.json());
app.use(bp.urlencoded({extended: false}))

//home route
app.get('/', (req, res) => {
    res.render('../static/views/base', {title: "Train Tracker"});
})

app.post('/api', api);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})