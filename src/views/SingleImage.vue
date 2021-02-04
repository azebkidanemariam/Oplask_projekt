<template>
  <div class="single-image">
    <Images 
    msn="Hej! jag är images component i SingleImage.vue"/>
    <Buttons 
    msn="Here comes Buttons"/>
    <button>Go back button</button>
  </div>
  
</template>

<script>
import Images from "@/components/Images.vue" 
import Buttons from "@/components/Buttons.vue" 

export default {
components:{
  Images,
  Buttons
}
}
</script>

<style>

</style>