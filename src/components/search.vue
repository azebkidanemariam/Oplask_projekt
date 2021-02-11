<template>
    <div class="search">
      
      <input type="text" 
      id="searchInput" 
      placeholder="I am looking for..." 
      v-model="searching"/>
      <button>Search</button>
      <div id="submitsearch" style="">
        </div>
    </div>

</template>

<script>
export default {
  name: "Search"  
}
</script>

<style>

</style>