<template>
   <div class="products-price">
      <div class="acer-product-edit">
         <div class="acer-price-title">Acer Predator</div>
         <div>Original price: ${{ prices.originals.acer }}</div>
         <input type="number" placeholder="Original Price" v-model="new_price.acer" />
         <button class="acer-origin-button" @click="set_origin($event)">Set Original Price</button>
         <br />
         <div>Discounted Sale Price: ${{ prices.sales.acer }}</div>
         <input
            type="number"
            placeholder="Sales Decimal (0.5, 0.2, etc.)"
            v-model="sale_amount.acer"
         />
         <button class="acer-sale-button" @click="set_sale($event)">Set Sale Percent</button>
      </div>

      <br />
      <br />

      <div class="dell-product-edit">
         <div class="dell-price-title">Dell Alienware</div>
         <div>Original price: ${{ prices.originals.dell }}</div>
         <input type="number" placeholder="Original Price" v-model="new_price.dell" />
         <button class="dell-origin-button" @click="set_origin($event)">Set Original Price</button>
         <br />
         <div>Discounted Sale Price: ${{ prices.sales.dell }}</div>
         <input
            type="number"
            placeholder="Sales Decimal (0.5, 0.2, etc.)"
            v-model="sale_amount.dell"
         />
         <button class="dell-sale-button" @click="set_sale($event)">Set Sale Percent</button>
      </div>

      <br />
      <br />

      <div class="razer-product-edit">
         <div class="razer-price-title">Razer</div>
         <div>Original price: ${{ prices.originals.razer }}</div>
         <input type="number" placeholder="Original Price" v-model="new_price.razer" />
         <button class="razer-origin-button" @click="set_origin($event)">Set Original Price</button>
         <br />
         <div>Discounted Sale Price: ${{ prices.sales.razer }}</div>
         <input
            type="number"
            placeholder="Sales Decimal (0.5, 0.2, etc.)"
            v-model="sale_amount.razer"
         />
         <button class="razer-sale-button" @click="set_sale($event)">Set Sale Percent</button>
      </div>
   </div>
</template>

<script>
export default {
   name: "acer",
   data() {
      return {
         new_price: {
            acer: null,
            dell: null,
            razer: null,
         },
         sale_amount: {
            acer: null,
            dell: null,
            razer: null,
         },
      };
   },
   computed: {
      prices() {
         return {
            originals: {
               acer: this.$store.state.acer_store_price,
               dell: this.$store.state.dell_store_price,
               razer: this.$store.state.razer_store_price,
            },
            sales: {
               acer: this.$store.state.acer_store_price / 2,
               dell: this.$store.state.dell_store_price / 2,
               razer: this.$store.state.razer_store_price / 2,
            },
         };
      },
   },
   methods: {
      set_origin(e) {
         if (e.target.classList.contains("acer-origin-button")) {
            this.$store.commit("original_price", {
               brand: "acer",
               price: this.new_price.acer,
            });
            this.new_price.acer = null;
         } else if (e.target.classList.contains("dell-origin-button")) {
            this.$store.commit("original_price", {
               brand: "dell",
               price: this.new_price.dell,
            });
            this.new_price.dell = null;
         } else {
            this.$store.commit("original_price", {
               brand: "razer",
               price: this.new_price.razer,
            });
            this.new_price.razer = null;
         }
      },
      set_sale(e) {
         return e;
      },
   },
};
</script>



<style scoped>
.acer-product-edit,
.dell-product-edit,
.razer-product-edit{
   padding: 10px;
   box-sizing: border-box;
   background: whitesmoke;
   font-family: 'Nunito', sans-serif;
}
.acer-product-edit {
   border: 2px solid red;
}
.dell-product-edit{
   border: 2px solid blue;
}
.razer-product-edit{
   border: 2px solid green;
}

.acer-price-title,
.dell-price-title,
.razer-price-title {
   font-weight: bold;
   font-size: 20px;
}

.acer-price-title {
   color: red;
}
.dell-price-title {
   color: blue;
}
.razer-price-title {
   color: green;
}
</style>