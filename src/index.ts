import express, {
    Application, 
    Request, 
    Response,
    NextFunction 
} from "express"

const app: Application = express()

app.get("/", (req: Request, res: Response) => {
    res.send([])
})

app.listen(4040, () => {
    console.log("Server is up and running")
})