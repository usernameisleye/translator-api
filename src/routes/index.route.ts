import express from "express"
import Contoller from "../controllers/index.contoller"

const router = express.Router()

router.get("/get-langs", Contoller.getLangs)

router.post("/translate", Contoller.translate)

router.post("/detect-lang", Contoller.detectLang)

router.post("/get-speech", Contoller.getSpeech)

router.post("/use-dictionary", Contoller.useDictionary)

export default router