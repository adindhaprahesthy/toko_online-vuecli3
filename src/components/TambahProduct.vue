<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Tambah Produk Roughneck 1991 HQ</h1>
            </div>
        </div>
    
    <div class="modal-body" >
        <div class="mb-3">
            <label for="Nama Produk" class="form-label">Nama Produk</label>
            <input type="text" class="form-control" id="nama_produk" v-model="nama_produk" placeholder="Nama Produk">
        </div>
        <div class="mb-3">
            <label for="Deskripsi" class="form-label">Deskripsi</label>
            <input type="text" class="form-control" id="Deskripsi" v-model="deskripsi" placeholder="Deskripsi">
        </div>
        <div class="mb-3">
            <label for="Harga" class="form-label">Harga</label>
            <input type="number" class="form-control" id="harga" v-model="harga" placeholder="Harga">
        </div>
        <div class="mb-3">
            <label for="Foto Produk" class="form-label">Foto Produk</label>
            <input type="text" class="form-control" id="Foto Produk" v-model="foto_produk" placeholder="Foto Produk">
        </div>
        <button type="submit" class="btn btn-primary" @click="simpanProduk()">Submit</button>
        <!-- <p v-bind:class="style_mess">
            <p v-if="error" v-for="mess in message">{{mess}}</p>
            <p v-else>{{message}}</p>
        </p> -->
    </div>
    </div>
</template>

<script>
export default {
    name:"TambahProduct", 
    data(){
        return {
            nama_produk:'',
            deskripsi:'',
            harga:'',
            foto_produk:''
            // style_mess:'',
            // message:'',
            // error:false,
        }
    },
    methods: {
        simpanProduk : function(){
            var token={
                headers:{"Authorization": "bearer" + localStorage.getItem("token")}
            };
            var dataProduk =
            {
                nama_produk : this.nama_produk,
                deskripsi : this.deskripsi, 
                harga : this.harga,
                foto_produk : this.foto_produk
            }
            this.axios.post("http://127.0.0.1:8000/api/produk",
            dataProduk,token).then((response)=>{
                if(response.data.status==1){
                      alert("Sukses menambahkan produk")

                } else {
                    alert("Gagal menambahkan produk")

                }
                
                this.$router.push('/Product')
                console.log(response)
            })
        }
    }
   
}
</script>
