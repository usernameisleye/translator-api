import { Request, Response } from "express"
import Service from "../service/index.service"
import response from "../utils/response"

class Contoller {
    async getLangs(req: Request, res: Response) {
        const r = await Service.getLangs()
        res.status(200).json(response.success("Success", r))
    }

    async translate(req: Request, res: Response) {
        const { text, source_lang, target_lang } = req.body
        const r = await Service.translate(text, source_lang, target_lang)
        res.status(200).json(response.success("Success", r))
    }

    async detectLang(req: Request, res: Response) {
        const { text } = req.body
        const r = await Service.detectLang(text)
        res.status(200).json(response.success("Success", r))
    }

    async getSpeech(req: Request, res: Response) {
        const { text, lang, slow } = req.body
        const r = await Service.getSpeech(text, lang, slow)
        res.status(200).json(response.success("Success", r))
    }

    async useDictionary(req: Request, res: Response) {
        const { word } = req.body
        const r = await Service.useDictionary(word)
        res.status(200).json(response.success("Success", r))
    }
}

export default new Contoller()