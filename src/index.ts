import "express-async-errors"
import express, { Application } from "express"
import appConfig from "./middleware/pre.middleware"
import errorMiddleware from "./middleware/error.middleware"

const app: Application = express()

appConfig(app)

app.listen(4040, () => {
    console.log("Server is up and running")
})

// Routes...

errorMiddleware(app)

app.on("error", (error: any) => {
    console.error(`Server incurred an error: \n ${error}`)  
})