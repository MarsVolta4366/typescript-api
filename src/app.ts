import express from "express"
import config from "config"
import connect from "./utils/connect"

// At 17:21min https://www.youtube.com/watch?v=BWUi6BS9T5Y

const port = config.get<number>("port")

const app = express()

app.listen(port, async () => {
    console.log("App is running")
    await connect()
})