//const express = require("express");
//ES6
import express from "express"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
import indexRoutes from './routes/index.js'
const app = express();

//ruta absoluta
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')//motor de plantillas

app.use(indexRoutes)
app.use(express.static(join(__dirname, 'public')))

app.listen(3000);