<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Edit Produk Roughneck 1991 HQ</h1>
            </div>
        </div>

    <div class="modal-body" >
        <div class="mb-3">
            <!-- <label for="ID Pelanggan" class="form-label">ID Pelanggan</label> -->
            <input type="hidden" class="form-control" id="id_produk" v-model="id_produk" placeholder="ID Produk">
        </div>
        <div class="mb-3">
            <label for="Nama Produk" class="form-label">Nama Produk</label>
            <input type="text" class="form-control" id="nama_produk" v-model="nama_produk" placeholder="Nama Produk">
        </div>
        <div class="mb-3">
            <label for="Deskripsi" class="form-label">Deskripsi</label>
            <input type="text" class="form-control" id="deskripsi" v-model="deskripsi" placeholder="Deskripsi">
        </div>
        <div class="mb-3">
            <label for="Harga" class="form-label">Harga</label>
            <input type="number" class="form-control" id="harga" v-model="harga" placeholder="Harga">
        </div>
        <div class="mb-3">
            <label for="Foto Produk" class="form-label">Foto Produk</label>
            <input type="text" class="form-control" id="foto_produk" v-model="foto_produk" placeholder="Foto Produk">
        </div>
        <button type="submit" class="btn btn-primary" @click="EditProduct()">Edit Produk</button>
    </div>
        </div>
</template>

<script>
export default {
    name:"EditProduct", 
    data(){
        return {
            listproduct: [],
            nama_produk:'',
            deskripsi:'',
            harga:'',
            foto_produk:'',
            // style_mess:'',
            // message:'',
            // error:false,
        }
    },
    methods: {
           // getproduct : function(){
               // this.axios.get("http://127.0.0.1:8000/api/produk").then((result)=>{
                   // this.listproduct=result.data
              //  })
           // },

        getdetailproduct(id){
            var option = {
                headers : {Authorization : 'bearer ' + localStorage.getItem("token")}
            }

            this.axios.get("http://127.0.0.1:8000/api/produk/"+id, option)
            .then((response)=>{
                this.id_produk      = response.data[0].id_produk
                this.nama_produk    = response.data[0].nama_produk
                this.deskripsi      = response.data[0].deskripsi
                this.harga          = response.data[0].harga
                this.foto_produk    = response.data[0].foto_produk
            })
        },
        EditProduct : function(){
             var dataproduk = {
                headers  : {Authorization : 'bearer ' + localStorage.getItem("token")}
            }
            let form = {  
                'nama_produk'     : this.nama_produk,
                'deskripsi'       : this.deskripsi, 
                'harga'           : this.harga, 
                'foto_produk'     : this.foto_produk
            }
            this.axios.put("http://127.0.0.1:8000/api/produk/"+this.id_produk, form,
            dataproduk).then((response)=>{
                 if(response.data.status==1){
                      alert("Sukses mengubah produk")

                } else {
                    alert("Gagal mengubah produk")

                }
                this.$router.push('/Product')
                console.log(response)
            })
        }
    },
    mounted(){
        
        this.getdetailproduct(this.$route.params.id)
    }
   
}
</script>
