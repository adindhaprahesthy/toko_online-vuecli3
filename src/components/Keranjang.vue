<template>
    <div class="container">
        <br>
        <br>
        <div class="card">
            <div class="card-body">
                <h1 align="center">Keranjang Belanja</h1>
                <br>
                <table class="table table-hover table-striped">
                    <thead class="thead-dark" align="center">
                        <tr> 
                        <!-- <th scope="col">No</th> -->
                        <th scope="col">Foto Produk</th>
                        <th scope="col">Nama Produk</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Harga</th>
                        <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cart in getcart" :key="cart.id">
                            <!-- <td>{{index+1}}</td> -->
                            <td><center><img :src="'http://127.0.0.1:8000/foto_produk/'+ cart.foto_produk" width="150"></center></td>
                            <td><center>{{cart.nama_produk}}</center></td>
                            <td><center>{{cart.quantity}}</center></td>
                            <td><center>{{ produkSubtotal (cart.harga, cart.quantity)}}</center></td> 
                            <td><center><button class="btn btn-danger">X</button> |
                            <button class="btn btn-success">Add</button></center></td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-primary" v-on:click="simpan_db()">Checkout</button>
            </div>
                    </div>
                    </div>
</template>

<script>
   export default {
        name:"Keranjang_page",
        methods:{
            produkSubtotal(harga,quantity) {
                return harga * quantity;
            },
            simpan_db(){
                var option = 
                {
                    headers:{
                        'Authorization': 'bearer '+localStorage.getItem('token')
                    }
                };

                var data={
                    datapost: this.$store.getters.cartItems
                }
                
                this.axios.post("http://127.0.0.1:8000/api/storecarttodb",data, option).then((response)=>{
                    if(response.data.status==1){
                        alert(response.data.message)
                        this.$router.push('/barang')
                        console.log(response)
                        this.$store.commit('reset')
                    }
                })
            },
        },
        computed:{
            getcart(){
                return this.$store.getters.cartItems
            }
        }
    }
</script>