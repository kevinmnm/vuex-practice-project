<template>
   <div class='products-price'>
      <div class='acer-price-title'>Acer Predator</div>
      <form>
         <input type='number' placeholder='$' />
         <button>Set</button>
      </form>

      <br><br>

      <div class='dell-price-title'>Dell Alienware</div>
      <form>
         <input type='number' placeholder='$' />
         <button>Set</button>
      </form>

      <br><br>

      <div class='razer-price-title'>Razer</div>
      <form>
         <input type='number' placeholder='$' />
         <button>Set</button>
      </form>
   </div>
</template>

<script>
export default {
   name: "acer"
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