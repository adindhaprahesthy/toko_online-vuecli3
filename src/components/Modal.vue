<template>
<div class="modal" id="show_detail" tabindex="-1" v-if="detail">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{detail.nama_produk}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img v-bind:src="'http://127.0.0.1:8000/foto_produk/'+ detail.foto_produk" class="card-img-top" width="100%">
        <p>{{detail.deskripsi}}</p>
        <p v-if="getcount">{{getcount}}</p>
        <p v-else>0</p>
        
      </div>
      <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click="addToCart()">Add To Cart</button>
        <button type="button" class="btn btn-primary" v-on:click="removeItem()">Kurangi</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>

export default {
    props:['detail'],
        name: 'modal_page' ,
        methods:{
            addToCart(){
                this.$store.commit('addToCart', this.detail)
            },
            removeItem(){
              this.$store.commit('removeFromProduct', this.detail)
            }
        },
        computed:{
            getcount(){
                return this.$store.getters.productQuantity(this.detail)
            }
        },
    }
</script>