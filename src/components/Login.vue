<template>
<br>
<br>
<div>
    <div class="col-md-3" style="margin-top:95px;margin:70px auto">
        <div class="card">
            <div class="card-body">
                <h2><center>Halaman Login</center></h2>
                <form>
                    Email : 
                    <input type="text" name="email" class="form-control" v-model="email">
                    <br>

                    Password :
                    <input type="password" name="password" class="form-control" v-model="password">
                    <br>
                    <button type="button" class="btn btn-success" v-on:click="login()">Login</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default ({
    name:"Login_page",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        login(){
            var datalogin={
                email:this.email,
                password:this.password
            };
            this.axios.post("http://127.0.0.1:8000/api/login",
            datalogin).then((result)=>{
                    localStorage.setItem('token', result.data.token)
                    localStorage.setItem('status', true)
                    this.$emit('authenticated', true)
                    this.$router.replace({name: "Home"})
                }).catch(error=>{
                    console.log(error)
                    alert('Password Salah')
                })
            }
        },
        mounted(){
            this.$emit("authenticated", false)
        }
    })
</script>