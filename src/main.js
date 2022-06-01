import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'

import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './components/Home.vue';
import Profile from './components/Profile.vue';

import Product from './components/Product.vue';
import TambahProduct from './components/TambahProduct.vue';
import EditProduct from './components/EditProduct.vue';

import Pelanggan from './components/Pelanggan.vue';
import TambahPelanggan from './components/TambahPelanggan.vue';
import EditPelanggan from './components/EditPelanggan.vue';

import Barang from './components/Barang.vue';
import Modal from './components/Modal.vue';
import Keranjang from './components/Keranjang.vue';
import Login from './components/Login.vue';

const router = createRouter({
    history : createWebHashHistory(),
    routes : [
        {path: '/', name: "Home", component: Home},
        {path: '/profile', name: "Profile", component: Profile},
        
        {path: '/product', name: "Product", component: Product},
        {path: '/product/tambahproduct', name: "TambahProduct", component: TambahProduct},
        {path: '/product/:id', name: "EditProduct", component : EditProduct},

        {path: '/pelanggan', name: "Pelanggan", component: Pelanggan},
        {path: '/pelanggan/tambahpelanggan', name: "TambahPelanggan", component: TambahPelanggan},
        {path: '/pelanggan/:id', name: "EditPelanggan", component : EditPelanggan},

        {path: '/barang', name: "Barang", component: Barang},
        {path: '/modal', name: "Modal", component: Modal},
        {path: '/keranjang', name: "Keranjang", component: Keranjang},
        {path: '/login', name: "Login", component: Login},
    ],
    base : "/"
});

var app = createApp(App)
app.use(router)
app.use(store)
app.config.globalProperties.axios = axios
app.mount('#app')
