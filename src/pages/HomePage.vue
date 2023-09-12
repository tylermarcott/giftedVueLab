<template>
  <GifCard />


  <!-- TODO: first I'm just going to try to get one gif to the page -->
  <!-- where are we getting access to the gif..? -->


  <div class="container-fluid">
    <div class="row">
      <section class="col-6 col-md-4 gif-card">
        <div>
          <img class="img-fluid"
            src="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg"
            alt="gif-image">
        </div>
        <p>Gif summary goes here!</p>
      </section>
    </div>
  </div>
</template>

<script>
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { gifService } from '../services/GifService.js'




export default {
  setup() {

    // TODO: first thing I want to do is try to get a gif to the screen!

    async function getGifs() {
      try {
        logger.log('getting some gifs!')
        await gifService.getGifs()

      } catch (error) {
        Pop.error(error)
      }
    }








    return {
      getGifs

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
