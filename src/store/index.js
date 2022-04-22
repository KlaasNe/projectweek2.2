import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

// const headers = { Accept: "application/json" };

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    products: [],
    inCart: [],
    user: {
      isAuthenticated: false,
      name: "",
      email: "",
      idToken: ""
    },
    endpoints: {
      login: process.env.VUE_APP_AUTH_URL,
      products: process.env.VUE_APP_PRODUCTS_URL
    },
   },
   getters: {
    products: state => state.products,
    inCart: state => state.inCart,
   },
   mutations: { //synchronous
     setProducts(state, payload) {
       state.products = payload;
     },
     addToCart(state, payload) { 
      console.log(payload);
      state.inCart.push(payload);
     },
     removeFromCart(state, item) { 
       state.inCart.splice(item, 1); 
     },
     logout(state) {
      state.user.isAuthenticated = false;
      state.user.name = "";
      state.user.email ="";
      state.user.idToken ="";
     },
     login(state, payload) {
      state.user.isAuthenticated = true;
      state.user.name = payload.name;
      state.user.email =payload.email;
      state.user.idToken =payload.idToken;
     },
   },
   actions: { //asynchronous
      async getProducts(state) {
       
       const prods = [
        {
          "description": "A set of four pre-charged rechargeable lithium-ion AA batteries with a capacity of 2600mAh. Voltage of 4,5V.",
          "id": 1,
          "price": 18.25,
          "quantity": 69,
          "thumbnail_url": "https://i.postimg.cc/kGJ0vd91/ezvolt-battery-pack.png",
          "title": "4pcs EZVolt 3.7V AA Battery Pack"
        },
        {
          "description": "A set of two pre-charged rechargeable lithium cell 3V batteries, which you can use in a photo camera or calculator.",
          "id": 2,
          "price": 9.99,
          "quantity": 15,
          "thumbnail_url": "https://i.postimg.cc/50ScztcQ/ezvolt-camera-battery-pack.png",
          "title": "2pcs EZVolt 3V Lithium Cell"
        },
        {
          "description": "Set of six pre-charged rechargeable hearing aid batteries type 10 - 1.4V. Remove the sticker before use.",
          "id": 3,
          "price": 8.95,
          "quantity": 27,
          "thumbnail_url": "https://i.postimg.cc/Nfst1Sx2/ezvolt-small-battery-pack.png",
          "title": "6pcs EZVolt 1.4V Button Batteries"
        },
        {
          "description": "One pre-charged rechargeable 9V battery with a capacity of 1200mAh. Voltage of 9V",
          "id": 3,
          "price": 12.95,
          "quantity": 57,
          "thumbnail_url": "https://i.postimg.cc/2yqpVNDP/ezvolt-9v-battery-pack.png",
          "title": "1pc EZVolt 9V Lithium Battery"
        },
        {
          "description": "A pre-charged rechargeable battery for your watch.",
          "id": 3,
          "price": 11.95,
          "quantity": 22,
          "thumbnail_url": "https://i.postimg.cc/bvbsS4zS/ezvolt-watch-battery-pack.png",
          "title": "1pc EZVolt Button Battery"
        }
      ]
       state.commit("setProducts", prods);
       console.log(prods);
     }
   },
  modules: {
  }
})