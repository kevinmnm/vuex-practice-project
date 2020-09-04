<template>
  <div class="home">
     <h1>This is homepage</h1>
     <home-main></home-main>
  </div>
</template>

<script>
import home_main from "@/components/home-main.vue"

export default {
  name: 'HomePage',
  components: {
     "home-main": home_main
  }
}
</script>
