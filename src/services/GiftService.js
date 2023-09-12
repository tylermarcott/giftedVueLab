import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { Gift } from "../models/Gift.js"
import { api } from "./AxiosService.js"



class GiftService {

  async getGifts() {

    logger.log('in our service')

    // DON'T GET THIS CONFUSED

    const res = await api.get('/api/gifts')

    logger.log('here is our data:', res)

    AppState.gifts = res.data.map(gift => new Gift(gift))
  }

  async openGift(giftId) {

    let foundGift = AppState.gifts.find(gift => gift.id == giftId)

    logger.log('this is our found gift', foundGift)

    foundGift.opened = true

    const res = await api.put(`/api/gifts/${giftId}`, foundGift)

    let newGift = new Gift(res.data)

    let foundGiftindex = foundGift.indexOf()

    AppState.gifts.splice(foundGiftindex, 1, newGift)

    logger.log('this is the new gift', newGift)
  }






}



export const giftService = new GiftService()