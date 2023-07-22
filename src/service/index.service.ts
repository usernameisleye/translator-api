import * as googleTTS from 'google-tts-api'
import error from "../utils/error"

class Service {
    url = `https://google-translate1.p.rapidapi.com/language/translate/v2`

    getHeaders = () => {
        const headers = {
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }

        return headers
    }

    postHeaders = () => {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }

        return headers
    }

    async getLangs() {
        const url = `${this.url}/languages`
        const result = await fetch(url, {
            headers: this.getHeaders()
        })
        
        if (!result.ok) throw new error("Could not get language list")

        const rjson = await result.json()
        return rjson
    }

    async translate(text: string, source_lang: string, target_lang: string) {
        const url = this.url
        const result = await fetch(url, {
            method: "POST",
            headers: this.postHeaders(),
            body: `q=${encodeURI(text)}&source=${source_lang}&target=${target_lang}`
        })

        if (!result.ok) throw new error("Translation failed")

        const rjson = await result.json()
        return rjson.data
    }

    async detectLang(text: string) {
        const url = `${this.url}/detect`
        const result = await fetch(url, {
            method: "POST",
            headers: this.postHeaders(),
            body: `q=${encodeURI(text)}`
        })
        
        if (!result.ok) throw new error("Can't detect language")

        const rjson = await result.json()
        return rjson.data
    }

    async getSpeech(text: string, lang: string, slow: boolean) {
        const audio = googleTTS.getAudioUrl(text, {
            lang: lang,
            slow: slow
        })
        return audio
    }

    async useDictionary(data: string) {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${data}`
        const result = await fetch(url)

        if (!result.ok) throw new error("Definition not found")

        const rjson = await result.json()
        return rjson       
    }
}

export default new Service()