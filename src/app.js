import express from 'express'
import {pool} from './db.js'
import { PORT } from './config.js'; 
import ejs from 'ejs';

const app =express();

app.set('view engine', 'ejs');

app.use(express.static("public")); 

app.get('/', async(req, res)=>{
    const [rows] = await pool.query("SELECT * FROM inicio")
    const [pay] = await pool.query("SELECT * FROM pago")
    // res.json(rows)
    res.render('index', {rows, pay})
})

app.get('/ubicaciones', async (req, res)=>{
    res.render('ubicaciones')
})

app.get('/productos', async(req, res)=>{
    const [rows] = await pool.query("SELECT * FROM arreglos")
    const [deco] = await pool.query("SELECT * FROM decoracion")
    // res.json(rows)
    res.render('productos', {rows, deco})
})


app.listen(PORT)
console.log('Server on port', PORT)