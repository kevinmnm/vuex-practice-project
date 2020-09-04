<template>
   <div>
      <div class='status-title'>Acer Predator</div>
      <div class="status-wrapper">Current Price:</div>
      <div class='home-price'>{{ '$' + acer_price }}</div>

      <br />
      <br />

      <div class='status-title'>Dell Alienware</div>
      <div class="status-wrapper">Current Price:</div>
      <div class='home-price'>{{ '$' + dell_price }}</div>

      <br />
      <br />

      <div class='status-title'>Razor</div>
      <div class="status-wrapper">Current Price:</div>
      <div class='home-price'>{{ '$' + razer_price }}</div>
   </div>
</template>

<script>
export default {
   name: "home-info",
   computed: {
      acer_price(){
         return this.$store.state.acer_store_price
      },
      dell_price(){
         return this.$store.state.dell_store_price
      },
      razer_price(){
         return this.$store.state.razer_store_price
      }
   }
};
</script>

<style scoped>

.home-price{
   font-size: 30px;
   color: brown;
}

.status-title{
   font-weight: bold;
   font-size: 18px;
}


</style>