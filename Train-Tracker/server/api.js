import express from "express";
import dotenv from 'dotenv'
import fetch from "node-fetch";
const api = express.Router();

dotenv.config();

api.use(express.json())
api.post('/api', (req, res) => {

const url = process.env.URL;
const searchField = req.body.search
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': process.env.API_HOST
  },
  body: `{"search":"${searchField}"}`
};

fetch(url, options)
	.then(res => res.json())
	.then(response => {
        // console.log(response)
        res.send(response)
    })
	.catch(err => console.error('error:' + err));
})

export default api;