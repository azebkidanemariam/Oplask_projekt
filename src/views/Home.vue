<template>
  <div class="home">
    <Search />
    <!-- <Image /> -->
    <Images  />
    <ul class="gallery-container">
      <li v-for="photo in photos" :key="photo.urls.small">
        <img :src="photo.urls.small" />
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import * as Api from "@/router/mock.js";
import Search from "@/components/search.vue";
import axios from "axios";
import Images from "@/components/Images.vue";
//import Images from '../components/Images.vue';

export default {
  name: "Home",
  props: {
    photo: Object,
  },
  components: {
    Search,
    Images,
  },
  data() {
    return {
      photos: [],
    };
  },
  async created() {
    this.photos = await Api.fetchImages();
    return Api.results;
    // const data = await request.json();
    // this.photos = data.results;
  },

  mounted() {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_limit=20`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.photos = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style>
.gallery-container {
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(3, auto);
  gap: 10px;
}
li {
  list-style: none;
}
</style>
