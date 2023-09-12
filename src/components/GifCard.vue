<template>
  <div class="container-fluid">
    <div class="row">
      <section class="col-6 col-md-4 gif-card">
        <div class="image-fluid">
          <img class="image"
            src="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk2NzY3MjA5ODc0MjY5ODI2/top-10-cutest-cat-photos-of-all-time.jpg"
            alt="gif-image">
        </div>
        <p>Gif summary goes here!</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>


<style>
.image {
  max-height: 30vh;
}

.gif-card {
  border: solid rgb(20, 17, 17) 2px;
  margin: 1em;
  padding: 1em;
}
</style>