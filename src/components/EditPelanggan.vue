<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Edit Pelanggan</h1>
            </div>
        </div>
    
    <div class="modal-body" >
        <div class="mb-3">
            <!-- <label for="ID Pelanggan" class="form-label">ID Pelanggan</label> -->
            <input type="hidden" class="form-control" id="id_pelanggan" v-model="id_pelanggan" placeholder="ID Pelanggan">
        </div>
        <div class="mb-3">
            <label for="Nama" class="form-label">Nama</label>
            <input type="text" class="form-control" id="nama" v-model="nama" placeholder="Nama">
        </div>
        <div class="mb-3">
            <label for="Alamat" class="form-label">Alamat</label>
            <textarea class="form-control" id="alamat" v-model="alamat" rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label for="Nomor Telepon" class="form-label">Nomor Telepon</label>
            <input type="number" class="form-control" id="telp" v-model="telp" placeholder="Nomor Telepon">
        </div>
        <div class="mb-3">
            <label for="Username" class="form-label">Username</label>
            <input type="text" class="form-control" id="Username" v-model="username" placeholder="Username">
        </div>
        <div class="mb-3">
            <label for="Password" class="form-label">Password</label>
            <input type="password" class="form-control" id="Password" v-model="password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary" @click="EditPelanggan()">Edit Pelanggan</button>
    </div>
       </div>
</template>

<script>
export default {
    name:"EditPelanggan", 
    data(){
        return {
            listpelanggan: [],
            nama:'',
            alamat:'',
            telp:'',
            username:'',
            password:'',
            // style_mess:'',
            // message:'',
            // error:false,
        }
    },
    methods: {
        getdetailpelanggan(id){
            var option = {
                headers : {Authorization : 'bearer ' + localStorage.getItem("token")}
            }
            this.axios.get("http://127.0.0.1:8000/api/pelanggan/" + id, option)
            .then((response)=>{
                this.id_pelanggan = response.data[0].id_pelanggan
                this.nama         = response.data[0].nama
                this.alamat       = response.data[0].alamat
                this.telp         = response.data[0].telp
                this.username     = response.data[0].username
                this.password     = response.data[0].password
            })
        },
        EditPelanggan : function(){
            var datapelanggan = {
                headers  : {Authorization : 'bearer ' + localStorage.getItem("token")}
            }
            let form = {
                'nama' : this.nama,
                'alamat' : this.alamat,
                'telp' : this.telp,
                'username' : this.username,
                'password' : this.password
            }

            this.axios.put("http://127.0.0.1:8000/api/pelanggan/" + this.id_pelanggan, form, 
            datapelanggan).then((response)=>{
                 if(response.data.status==1){
                      alert("Sukses mengubah pelanggan")

                } else {
                    alert("Gagal mengubah pelanggan")

                }
                this.$router.push('/Pelanggan')
                console.log(response)
            })
        }
    },
    mounted(){
        this.getdetailpelanggan(this.$route.params.id)
    }
   
}
</script>
