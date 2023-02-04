import express from "express";
import dotenv from 'dotenv'
import fetch from "node-fetch";
const api = express.Router();

dotenv.config();

api.use(express.json())
api.post('/api', (req, res) => {
    res.send(req.body.input)
})

export default api;