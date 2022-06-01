<template>
  <div >
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="margin-top: -61px;}" v-if="authenticated">
   <a class="navbar-brand" href="#">Roughneck 1991 HQ</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportContent" aria-controls="navbarSupportContent" aria-expanded="false" aria-label="Toogle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
                 <router-link class="nav-link" to="/">Home</router-link>
        </li>
         <li class="nav-item">
        <router-link class="nav-link" to="/profile">Profile</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/pelanggan">Pelanggan</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/product">Produk</router-link>
        </li>
         <li class="nav-item">
        <router-link class="nav-link" to="/barang">List Produk</router-link>
        </li>
         <li class="nav-item">
        <router-link class="nav-link" to="/keranjang">Keranjang</router-link>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/#/Login" v-on:click="logout()">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
    <router-view @authenticated="setAuthenticated"></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
  data(){
     return{
       authenticated: localStorage.getItem('status'),
       data:[]
     }
   },
   methods:{
     setAuthenticated(status){
       this.authenticated=status
     },
     logout(){
       this.authenticated=false;
       localStorage.removeItem('status')
       localStorage.removeItem('token')
     }
   },
   mounted(){
     if(!this.authenticated){
       this.$router.replace({name:"Login"});
     }
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>