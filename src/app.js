import express from 'express'
import {pool} from './db.js'
import { PORT } from './config.js';

const app =express();



app.get('/', async(req, res)=>{
    const [rows] = await pool.query("SELECT * FROM USERS")
    res.json(rows)
    // res.send("Welcome to server")
})

app.get('/ping',async (req, res)=>{
    const [result] = await pool.query('SELECT "Hello Word" as Result' )
    console.log(result)
    res.json(result[0])
    // res.send("Welcome to server")
})

app.get('/create', async (req, res)=>{
  const result = await pool.query('INSERT INTO users(name) values ("Javier")')
 res.json(result) 
})

app.listen(PORT)
console.log('Server on port 3000')