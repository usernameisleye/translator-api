import dotenv from "dotenv"
import "express-async-errors"
import express, { Application } from "express"
import appConfig from "./middleware/pre.middleware"
import errorMiddleware from "./middleware/error.middleware"
import router from "./routes/index.route"
dotenv.config()

const app: Application = express()
appConfig(app)

app.listen(process.env.PORT, () => {
    console.log("Server is up and running")
})

app.use("/api/v1", router)

errorMiddleware(app)
app.on("error", (error: any) => {
    console.error(`Server incurred an error: \n ${error}`)  
})