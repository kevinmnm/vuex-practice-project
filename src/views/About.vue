<template>
  <div class="about">
    <h1>This is an about page</h1>
    <about-main></about-main>
  </div>
</template>

<script>
import about_main from "@/components/about-main.vue"

export default {
   name: "AboutPage",
   components: {
      "about-main": about_main  
   }
}
</script>

<style>

</style>