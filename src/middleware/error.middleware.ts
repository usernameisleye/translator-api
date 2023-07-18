import { Application, Request, Response, NextFunction } from "express"
import response from "../utils/response"

const errors_types = [
    "CastError",
    "ValidationError",
    "SyntaxError"
]

const errorMiddleware = (app: Application) => {
    app.use("*", (req: Request, res: Response) => {
        res
        .status(400)
        .json(response.error("Invalid request"))
    })

    app.use((
        error: any, 
        req: Request, 
        res: Response, 
        next: NextFunction
    ) => {
        const { name, status, message } = error

        if (name === "CustomError") {
            res
            .status(status)
            .json(response.error(message))
            
        }
        else if (errors_types.includes(name)) {
            res
            .status(400)
            .json(response.error(message))
        }
        else {
            res
            .status(500)
            .json(response.error(message))
        }

        next()
    })
    
    return app
}

export default errorMiddleware