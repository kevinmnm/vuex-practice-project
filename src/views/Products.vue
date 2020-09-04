<template>
   <div>
      <h1>This is products page</h1>
      <product-main></product-main>
   </div>
</template>

<script>
import products_main from "@/components/product-main.vue"

export default {
   home: "ProductsPage",
   components: {
      "product-main": products_main
   }
};
</script>

<style>
</style>