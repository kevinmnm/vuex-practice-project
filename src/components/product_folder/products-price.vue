<template>
   <div class='products-price'>
      <div class='acer-price-title'>Acer Predator</div>
         <input type='number' placeholder='$' v-model='acer_set_price' />
         <button>Set</button>

      <br><br>

      <div class='dell-price-title'>Dell Alienware</div>
         <input type='number' placeholder='$' v-model='dell_set_price' />
         <button>Set</button>

      <br><br>

      <div class='razer-price-title'>Razer</div>
         <input type='number' placeholder='$' v-model='razer_set_price' />
         <button>Set</button>
   </div>
</template>

<script>

export default {
   name: "acer",
   computed: {
      acer_set_price(){
         return this.$store.state.acer_store_price
      },
      dell_set_price(){
         return this.$store.state.dell_store_price
      },
      razer_set_price(){
         return this.$store.state.razer_set_price
      }
   }
};
</script>



<style scoped>

.acer-price-title,
.dell-price-title,
.razer-price-title{
   font-weight: bold;
   font-size: 20px;
}

.acer-price-title{color:red;}
.dell-price-title{color:blue;}
.razer-price-title{color:green;}

</style>