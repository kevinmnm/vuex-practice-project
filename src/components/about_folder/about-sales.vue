<template>
   <div>
      <div class='about-acer'>Acer Predator</div>
      <div class='sales-flex-wrap about-acer'>
         <div>Original Price: {{ acer_original_price }}</div>
         <div>Sales Price: </div>
      </div>
      <br>
      <div class='about-dell'>Dell Alienware</div>
      <div class='sales-flex-wrap about-dell'>
         <div>Original Price: {{ dell_original_price }}</div>
         <div>Sales Price: </div>
      </div>
      <br>
      <div class='about-razer'>Razer</div>
      <div class='sales-flex-wrap about-razer'>
         <div>Original Price: {{ razer_original_price }}</div>
         <div>Sales Price: </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "about-sales",
   computed: {
      acer_original_price(){
         return this.$store.state.acer_store_price
      },
      dell_original_price(){
         return this.$store.state.dell_store_price
      },
      razer_original_price(){
         return this.$store.state.razer_store_price
      }
   }
};
</script>

<style scoped>

.about-acer,
.about-dell,
.about-razer{
   font-size: 25px;
   font-weight: bold;
   padding: 5px;
   border-radius: 5px;
}

.about-acer{
   background: red;
   color: white;
}

.about-dell{
   background: blue;
   color: white;
}

.about-razer{
   background: green;
   color: white;
}

.sales-flex-wrap{
   position: relative;
   display: flex;
   flex-direction: column;
   border: 2px solid white;
   justify-content: space-around;
}

</style>