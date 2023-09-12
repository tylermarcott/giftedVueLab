<template>
  <div class="container-fluid">
    <div class="row">
      <!-- v-for is the for loop that is grabbing the single object 'gift' from the gifts array specifically by its id -->
      <div v-for="gift in gifts" :key="gift.id" class="col-6 col-md-4 gif-card">
        <!-- the bound prop ':gift' HAS TO match whats on the child component -->
        <!-- the bound prop ALSO has to equal the single object 'gift' that we grabbed from the array in the v-for -->
        <GiftCard :gift="gift" />
      </div>
    </div>
  </div>
</template>

<script>
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { giftService } from '../services/GiftService.js'
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js"





export default {

  setup() {

    onMounted(getGifts)   // this is similar to a constructor. onMounted will run this code as soon as the page loads

    // TODO: first thing I want to do is try to get a gif to the screen!

    async function getGifts() {
      try {
        logger.log('getting some gifs!')
        await giftService.getGifts()

      } catch (error) {
        Pop.error(error)
      }
    }








    return {
      getGifts,
      gifts: computed(() => AppState.gifts) // this is similar to MVC Appstate.on, it listens to changes in the appstate.


    }
  }
}
</script>

``





<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
../services/GiftService.js