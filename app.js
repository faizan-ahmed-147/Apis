const express = require("express");
const dotenv = require("dotenv")
dotenv.config({path: "./config.env"})
const connectToMongo = require("./config/conn")
connectToMongo()
const Product = require("./routes/Product")
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded())

app.use("/api/v1", Product)

app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`)
})