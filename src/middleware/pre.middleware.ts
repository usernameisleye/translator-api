import express, { Application } from "express"
import cors from "cors"
import morgan from "morgan"

export const appConfig = (app: Application) => {
    app.use(cors())
    app.use(morgan("dev"))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    return app
}

export default appConfig