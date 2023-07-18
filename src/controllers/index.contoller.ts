import { Request, Response } from "express"
import service from "../service/index.service"
import response from "../utils/response"

class Contoller {
    async getLangs(req: Request, res: Response) {}

    async translate(req: Request, res: Response) {}

    async getSpeech(req: Request, res: Response) {}

    async useDictionary(req: Request, res: Response) {}
}

export default new Contoller()