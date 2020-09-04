<template>
   <div>
      <h3><u>Current Status</u></h3>
      <home-info></home-info>
   </div>
</template>

<script>
import home_info from "@/components/home_folder/home-info.vue"

export default {
   name: "home-main",
   components: {
      "home-info": home_info
   }
};
</script>

<style>
</style>