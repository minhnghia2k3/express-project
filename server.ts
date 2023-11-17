import express from "express";
import 'dotenv/config'
import router from "./routes/index"
import bodyParser from "body-parser"
const app = express();

app.use(bodyParser.json())

const port = process.env.port || 8080;

app.use('/', router())

app.listen(port, () => {
    console.log(`Server listen on http://localhost:${port}`)
})

