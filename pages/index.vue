<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-4">
        <h1>Memator</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-8">
        <input
          v-model="searchInput"
          class="form-control"
          type="text"
        />
      </div>
      <div class="col-sm">
        <button
          @click="fetchImages"
          class="btn btn-primary"
        >
          Search images
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div
          v-if="imagesLoaded"
          class="image-container"
        >
          <img
            v-for="image in images"
            :key="image.id"
            :src="image.imageThubUrl"
            :alt="image.alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ACCESS_KEY = 'cce7f1d68f62bedea8115ee6616f5f1a932410e4b2695e80d57a24260e492ad9';

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      searchInput: '',
      images: [],
      imagesLoaded: false,
    };
  },
  methods: {
    async fetchImages() {
      const { results } = await this.$axios.$get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${this.searchInput}&client_id=${ACCESS_KEY}`);
      const images = results.map((image) => { // eslint-disable-line
        return {
          id: image.id,
          imageUrl: image.urls.full,
          imageThubUrl: image.urls.thumb,
          alt: image.alt_description,
        };
      });
      this.images = images;
      this.imagesLoaded = true;
    },
  },
};
</script>

<style>

</style>
