<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>List Pelanggan</h1> 
                <router-link class="btn btn-primary" :to="{path:'/pelanggan/tambahpelanggan'}">Tambah Pelanggan</router-link>
            </div>
           
        </div>
    
    
    <table class="table">
        <thead class="thead-dark">
            <tr> 
            <th scope="col">No</th>
            <th scope="col">ID Pelanggan</th>
            <th scope="col">Nama</th>
            <th scope="col">Alamat</th>
            <th scope="col">Telepon</th>
            <th scope="col">Username</th>
            <th scope="col">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(pelanggan, index) in datapelanggan" :key="pelanggan.id">
                <td>{{index+1}}</td>
                <td>{{pelanggan.id_pelanggan}}</td>
                <td>{{pelanggan.nama}}</td>
                <td>{{pelanggan.alamat}}</td>
                <td>{{pelanggan.telp}}</td> 
                <td>{{pelanggan.username}}</td>
                <!-- <td><router-link class="btn btn-success" :to="{path:'Pelanggan/EditPelanggan/'+pelanggan.id_pelanggan}">Edit</router-link></td> -->
                <td>
                    <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="Upload(id_buku)" data-bs-dismiss="modal">Submit</button>
                    </div> -->
                     <router-link class="btn btn-success" :to="{path:'/pelanggan/'+pelanggan.id_pelanggan}">Edit</router-link>
                    <button type="button" class="btn btn-primary" @click="hapuspelanggan(pelanggan.id_pelanggan)">Hapus</button>
                   
                    <!-- <a class="btn btn-primary" href="#" role="button">Ubah</a> -->
                </td>
            </tr>
        </tbody>

    </table>
    </div>
</template>

<script>
    export default {
        name:"pelanggan_ok",
        data(){
            return {
                datapelanggan:[],
            }
        },
        methods:{
            getpelanggan : function(){
                var token={
                headers:{"Authorization": "bearer" + localStorage.getItem("token")}
            };
                this.axios.get("http://127.0.0.1:8000/api/pelanggan", token)
                .then((result)=>{
                    console.log(result)
                    this.datapelanggan=result.data
                })
            },
            // find_data:function(){
            //     this.axios.get("http://127.0.0.1:8000/api/pelanggan/"+this.search).then((result)=>{
            //         console.log(result)
            //         this.pelanggan=result.data
            //     })
            // },
            hapuspelanggan(id){
                var option = {
                    headers: {Authorization : 'bearer ' + localStorage.getItem("token")}
                }
                if (confirm('Apakah anda yakin untuk menghapus data ini?')){
                    this.axios.delete('http://127.0.0.1:8000/api/pelanggan/' + id, option)
                    .then(()=>{
                        this.getpelanggan()
                        location.reload();
                    })
                }
            }
        },
        mounted(){
            this.getpelanggan()
        }
    }
</script>