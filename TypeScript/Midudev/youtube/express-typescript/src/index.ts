import express from 'express'
// const express = require('express') -> commonjs

import diaryRouter from './routes/diaries';

const app = express()

app.use(express.json()) // middleware que transforma la req.body a un json. 
/* tekTools quiere hacer un diario de sus esperiencias y viejes aereos, guardar fecha de entrada, condiciones
    condicionea meteorologicas, la visibilidad( si fue buena), y texto libre */
const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('someone pinged here!! ' + new Date().toLocaleDateString())
    res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})

