import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      acer_store_price: 0,
      dell_store_price: 0,
      razer_store_price: 0
   },
   mutations: {
      original_price(state, payload){
         if (payload.brand === 'acer'){
            state.acer_store_price = payload.price;
         }
      }
   },
   actions: {
   },
   modules: {
   }
})




