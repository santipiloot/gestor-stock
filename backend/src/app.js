import express from "express"
import cors from "cors"
import pool from "./config/database.js"

const app = express()

app.use(express.json())
app.use(cors())


export default app