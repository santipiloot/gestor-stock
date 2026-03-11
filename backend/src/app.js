import express from "express"
import cors from "cors"
import authConfig from "./config/passport.js"

const app = express()

authConfig()

app.use(express.json())
app.use(cors())


export default app