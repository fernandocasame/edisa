<template>
<div id="demo-basic-card">
    <vs-button type="relief" to="/estudiante/libro/agregar">Agregar Libro</vs-button>
    <div class="vx-row mt-4">
        <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4 mt-3" v-for="(item,$index) in libros" v-bind:key="$index">
            <vx-card class="text-center">
                <div slot="no-body">
                    <img :src="'https://sistemaeducativo.edisa.ec/carpeta_libros/'+item.url+'/portada.jpg'" alt="content-img" class="responsive card-img-top">
                </div>
                <h5 class="mb-2">{{item.nombre}}</h5>
                <p class="text-grey">{{item.detalle}}</p>
                <div class="flex flex-wrap mt-4 text-center">
                    <vs-button radius color="primary" type="filled" @click="verlibro(item.url,item.idlibro)" icon-pack="feather" icon="icon-eye"></vs-button>
                </div>
            </vx-card>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
export default {
    data() {
        return {
            libros: [],
            usuario: []
        }
    },
    mounted() {
        this.getLibro();
    },
    created() {
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
    },
    methods: {
        getLibro() {
            let me = this;
            axios.get('https://sistemaeducativo.edisa.ec/api/codigo?idusuario='+me.usuario[0].idusuario)
                .then(function (response) {
                    me.libros = response.data;
                    console.log(me.libros);
                })
                .catch(function (error) {})
        },
        verlibro(url, idlibro) {
            localStorage.url = url;
            localStorage.idlibro = idlibro;
            this.$router.push('/estudiante/digital');
        },
    },
}
</script>
