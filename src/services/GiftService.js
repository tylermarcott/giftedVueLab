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

    let foundGift = AppState.gifts.find(gift => gift.id == giftId)  //first, find the gift with the gift where the id we are passing equals the one in our appstate

    foundGift.opened = true //set the opened property of the gift we found and set it equal to true

    const res = await api.put(`/api/gifts/${giftId}`, foundGift) // send the edited found gift to the corresponding url with the proper id

    let newGift = new Gift(res.data) // alias out a new instance of our gift class and pass in our res.data which is our edited api model

    let foundGiftindex = AppState.gifts.indexOf(foundGift)  // find the index of the our found gift, so we know where to put it in our array/ which existing gift to replace

    AppState.gifts.splice(foundGiftindex, 1, newGift) // splice gifts. Take the object at the index of the array, which will be our old gift, and replace one instance, and replace it with our new gift from our put

    logger.log('this is the new gift', newGift)
  }


  async createGift(body) {
    const res = await api.post('/gifts/', body)


  }



}



export const giftService = new GiftService()