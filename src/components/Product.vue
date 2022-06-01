<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>List Produk Roughneck 1991 HQ</h1> 
                <router-link class="btn btn-primary" :to="{path:'/product/tambahproduct'}">Tambah Produk</router-link>
            </div>
        </div>
    <table class="table">
        <thead class="thead-dark">
            <tr> 
            <th scope="col">No</th>
            <th scope="col">ID Produk</th>
            <th scope="col">Nama Produk</th>
            <th scope="col">Deskripsi</th>
            <th scope="col">Harga</th>
            <th scope="col">Foto Produk</th>
            <th scope="col">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(produk, index) in dataproduk" :key="produk.id">
                <td>{{index+1}}</td>
                <td>{{produk.id_produk}}</td>
                <td>{{produk.nama_produk}}</td>
                <td>{{produk.deskripsi}}</td>
                <td>{{produk.harga}}</td> 
                <td>{{produk.foto_produk}}</td> 
                <!-- <td><router-link class="btn btn-success" :to="{path:'produk/Editproduk/'+produk.id_produk}">Edit</router-link></td> -->
                <td>
                    <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="Upload(id_buku)" data-bs-dismiss="modal">Submit</button>
                    </div> -->
                    <router-link class="btn btn-success" :to="{path:'/product/'+produk.id_produk}">Edit</router-link>
                    <button type="button" class="btn btn-primary" @click="hapusproduct(produk.id_produk)">Hapus</button>
                   
                    <!-- <a class="btn btn-primary" href="#" role="button">Ubah</a> -->
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
    export default {
        name:"produk_ok",
        data(){
            return {
                dataproduk:[],
            }
        },
        methods:{
            getproduk : function(){
              var token={
                headers:{"Authorization": "bearer" + localStorage.getItem("token")}
            };
            console.log(token)
                this.axios.get("http://127.0.0.1:8000/api/produk",token).then((result)=>{
                    console.log(result)
                    this.dataproduk=result.data
                })
            },
            hapusproduct : function(id){
                 var option = {
                    headers: {Authorization : 'bearer ' + localStorage.getItem("token")}
                }
                if (confirm('Apakah anda yakin untuk menghapus data ini?')){
                    this.axios.delete('http://127.0.0.1:8000/api/produk/' + id, option)
                    .then(()=>{
                        this.getproduk()
                        location.reload();
                    })
            }
            }
        },
        mounted(){
            this.getproduk()
        }
    }
</script>
