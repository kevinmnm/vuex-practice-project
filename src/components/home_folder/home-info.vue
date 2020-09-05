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

.status-wrapper{
   font-size: 25px;
   font-weight: bold;
   background: black;
   color: white;
}

.home-price{
   padding: 10px;
   background: black;
   color: white;
   font-size: 25px;
   font-weight: bold;
   font-family: 'Courier New', Courier, monospace;
}

.status-title{
   font-weight: bold;
   font-size: 18px;
}


</style>