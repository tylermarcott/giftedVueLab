import { AppState } from "../AppState.js"
import { gifApi } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"



class GifService {

  async getGifs() {
    const res = await gifApi.get('gifts')

    logger.log('here is our data:', res)

    // AppState.gifs = res

  }


}



export const gifService = new GifService()