import express from 'express'
import {pool} from './db.js'
import { PORT } from './config.js'; 
import ejs from 'ejs';

const app =express();

app.set('view engine', 'ejs');

app.use(express.static("public")); 

app.get('/', async(req, res)=>{
    // const [rows] = await pool.query("SELECT * FROM USERS")
    // res.json(rows)
    res.render('index')
})
app.get('/prueba', (req, res)=>{
    res.render('prueba')
 
})


app.listen(PORT)
console.log('Server on port', PORT)