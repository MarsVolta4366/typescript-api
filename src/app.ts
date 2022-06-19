import express from "express"
import config from "config"
import connect from "./utils/connect"
import logger from "./utils/logger"
import routes from "./routes"

// At 36min https://www.youtube.com/watch?v=BWUi6BS9T5Y

const port = config.get<number>("port")

const app = express()

app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`)
    await connect()
    routes(app)
})