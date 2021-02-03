<template>
  <div class="home">
    
    <ul>
      <li v-for="photo in photos" :key="photo.URL">
        {{ photo.URL }}
      </li>
    </ul>
    <Search />
  </div>
</template>

<script>
// @ is an alias to /src
 import Search from "@/components/searchForm.vue";

export default {
  name: "Home",
  components :{Search},
  data() {
    return {
      photos: [],
    };
  },
  async created() {
    const request = await fetch("<https://api.unsplash.com/photos/>");
    const data = await request.json();
    this.photos = data.results;
  },
};
</script>

 <style>

 </style>
