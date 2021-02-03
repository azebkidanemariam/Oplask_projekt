<template>
  <div class="home">
    <Search />
    <ul>
      <li v-for="photo in photos" :key="photo.url">
        {{ photo.url }}
      </li>
    </ul>
    
  </div>
</template>

<script>
// @ is an alias to /src
import * as API from '../router/mock.js'
 import Search from "@/components/searchForm.vue";
 

export default {
  name: "Home",
  props : {
    photourl:Object
  },
  components :{Search},
  data() {
    return {
      photos: [],
    };
  },
  async created() {
    this.photos = await API.fetchImages(4);
    // const data = await request.json();
    // this.photos = data.results;
  },
};
</script>

 <style>

 </style>
