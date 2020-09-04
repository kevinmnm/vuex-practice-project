<template>
  <div>
     <h3><u>Sales Info</u></h3>
     <about-sales></about-sales>
  </div>
</template>

<script>
import about_sales from "./about_folder/about-sales.vue"

export default {
   name: "about-main",
   components: {
      "about-sales": about_sales
   }
}
</script>

<style>

</style>