<template>
<nav class="navbar navbar-expand-sm navbar-light bg-light border" roele="navigation">
  <div class="container">
    <router-link to="/" class="navbar-brand mr-auto">
        <img src="./assets/logo.png" alt="company logo" width="100" height="50">
    </router-link>
      <ul class="navbar-nav mr-auto">
        <router-link to="/" tag="li" class="nav-item" >
          <a class="nav-link" @click="setActive('home')" :style="{ color: (active === 'home')?'black':'' }">Home</a>
        </router-link>
        <router-link to="/shop" tag="li" class="nav-item" >
           <a class="nav-link" @click="setActive('shop')" :style="{ color: (active === 'shop')?'black':'' }">Shop</a>
        </router-link>
        <router-link to="/about" tag="li" class="nav-item" >
          <a class="nav-link" @click="setActive('about')" :style="{ color: (active === 'about')?'black':'' }">About</a>
        </router-link>
      </ul>
      <ul class="nav navbar-nav">
        <router-link to="/" tag="li" v-if="!isAuthenticated" class="nav-item " active-class="active">
          <button @click="onLoginClicked" class="btn btn-outline-primary force-mr-1">Login</button>
        </router-link>
        <li v-if="isAuthenticated" class="li-pointer nav-item">
          <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ getUserName() }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Account Settings</a>
              <a @click="onLogoutClicked" class="dropdown-item">Logout {{ userEmail }}</a>
            </div>
          </div>
        </li>
        <li>
          <ShoppingCart />
        </li>
      </ul>
  </div>
</nav>
</template>
<script>
import ShoppingCart from './ShoppingCart.vue';
 
export default {
  components: { ShoppingCart },
  name: 'NavHeader',
  data() {
    return {
      active: "home"
    }
  },
  computed: {
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : ''
    },
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    },
  },
  methods: {
    setActive(param){
      this.active = param
    },
    onLoginClicked() {
      window.location = this.$store.state.endpoints.login;
    },
    onLogoutClicked() {
      this.$store.commit("logout");
    },
    getUserName() {
      return this.$store.state.user.name;
    }
  }
}
</script>

