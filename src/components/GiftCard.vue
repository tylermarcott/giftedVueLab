<template>
  <div>
    <img class="img-fluid image" :src="gift.url" alt="gif-image" @click="openGift()">
  </div>
  <p>{{ gift.tag }}</p>
  <p>Is this gift opened: {{ gift.opened }}</p>
</template>



<script>
import { Gift } from '../models/Gift.js'
import { giftService } from "../services/GiftService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {

  props: { gift: { type: Gift, required: true } },

  setup(props) {
    return {

      async openGift() {
        try {
          logger.log('opening gift with the following id:', props.gift)
          const giftId = props.gift.id
          await giftService.openGift(giftId)    //passing id to service so we can find which gift we are trying to open
        } catch (error) {
          Pop.error(error)
        }
      }


    };
  },
};
</script>


<style>
.image {
  cursor: pointer;
}

.gif-card {
  border: solid rgb(20, 17, 17) 2px;
  margin: 1em;
  padding: 1em;
}
</style>