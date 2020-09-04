<template>
   <div>
      <h3><u>List of products</u></h3>
      <products-price></products-price>
   </div>
</template>

<script>
import products_price from "@/components/product_folder/products-price.vue"

export default {
   name: "product-main",
   components: {
      "products-price": products_price
   }
};
</script>

<style>
</style>