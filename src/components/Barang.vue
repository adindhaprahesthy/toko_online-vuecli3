<template>
<br>
<br>
    <div class="container">
    <div class="card">
        <div class="card-body">
            <center><h2>List Produk</h2></center>
            <br>
            <modal :detail="produk"/>
            <div class="row">
              <div class= "col-md-3" v-for="barang in listbarang" :key="barang.id_produk">
              <div class="card">
                <img  v-bind:src="'http://localhost:8000/foto_produk/'+barang.foto_produk" class="card-img-top" alt=".." />
                <div class="card-body">
                  <h5 class="card-title">{{barang.nama_produk}}
                    <span v-if="getcount(barang)!=null">({{getcount(barang)}})</span>
                    <span v-else>(0)</span>
                  </h5>
                  <p class="card-text">{{barang.deskripsi}}</p>
                  <p class="card-text">{{barang.harga}}</p>
                  <center>
                  <button v-on:click="addToCart(barang)" class="btn btn-primary"  >Add To Cart</button>  |
                  <a href="#" class="btn btn-dark" data-target="#show_detail" data-toggle="modal" v-on:click="view_product(barang)">Show</a>
                  </center>
                </div>
                </div>
                <br>
              </div>
        </div>
        <router-link to="/keranjang" class="btn btn-warning">Show Cart</router-link>
    </div>
    </div>
    </div>
</template>

<script>
    import modal from '../components/Modal.vue'
    export default{
        //multiword
        name:"Barang_page",
        components:{
        modal
        },
        
        data() {
          return { 
            listbarang: [],
            produk:null,
    }
  },
  methods: {
    getproduk() {
      var token = {
        headers: { Authorization: "bearer " + localStorage.getItem('token') }
      };
      this.axios.get("http://127.0.0.1:8000/api/getproduk", token).then((response) => {
        console.log(response);
        (this.listbarang = response.data), token;
        // console.log(response);
      })
    },
    view_product(produk){
         this.produk=produk
         console.log(this.produk)
    },
    addToCart(produk){
      this.$store.commit('addToCart',produk)
    },
    getcount(produk){
      return this.$store.getters.productQuantity(produk);
    },
  },
  mounted() {
    this.getproduk();
  },
  }
</script>