<template>
<!-- <vx-card fixed-height=true>
    <iframe id="t0_iframe" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" style="display: block; width: 100%; height: 100vh; margin-left: auto; margin-right: auto; padding: 0px; top: 0px; position: absolute; left: 0px;" v-bind:src="'http://69.64.46.74/edisa/public/actividades/condor/'"></iframe>
</vx-card> -->
<div id="demo-basic-card">
    <vs-button type="relief" to="/nuevo/libro">Agregar Libro</vs-button>
    <div class="vx-row mt-4">
        <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4 mt-3" v-for="(item,$index) in actividades" v-bind:key="$index">
            <vx-card class="text-center">
                <div slot="no-body">
                    <img :src="'/rocket.png'" alt="content-img" class="responsive card-img-top">
                </div>
                <h5 class="mb-2">{{item.nombre}}</h5>
                <p class="text-grey">{{item.detalle}}</p>
                <div class="flex flex-wrap mt-4">
                    <div class="w-1/4 ml-auto">
                        <vs-button radius color="success" type="filled" @click="addactividad(item.idlibro)" icon-pack="feather" icon="icon-plus"></vs-button>
                    </div>
                    <div class="w-1/4 ml-auto">
                        <vs-button radius color="primary" type="filled" @click="verlibro(item.url,item.idlibro)" icon-pack="feather" icon="icon-eye"></vs-button>
                    </div>
                    <div class="w-1/4 ml-auto">
                        <vs-button radius color="warning" type="filled" @click="editarLibro(item.idlibro)" icon-pack="feather" icon="icon-edit"></vs-button>
                    </div>
                    <div class="w-1/4 ml-auto">
                        <vs-button radius color="danger" type="filled" @click="eliminarLibro(item.idlibro)" icon-pack="feather" icon="icon-trash"></vs-button>
                    </div>
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
            actividades: []
        }
    },
    mounted() {
        this.getLibro();
    },
    methods: {
        getLibro() {
            let me = this;
            axios.get('https://sistemaeducativo.edisa.ec/api/libro', {

                })
                .then(function (response) {
                    me.actividades = response.data;
                    console.log(me.actividades);
                })
                .catch(function (error) {})
        },
        verlibro(url,idlibro) {
            localStorage.url = url;
            localStorage.idlibro = idlibro;
            this.$router.push('/libro/digital');
        },
        editarLibro(idlibro) {
            this.$router.push('/editar/libro/' + idlibro);
            console.log(idlibro);
        },
        eliminarLibro(idlibro) {
            let me = this;
            axios.delete("https://sistemaeducativo.edisa.ec/api/libro/" + idlibro)
                .then(function (response) {
                    me.getLibro();
                })
                .catch(function (error) {})
        },
        addactividad(idlibro){
            localStorage.idlibro = idlibro;
            this.$router.push('/actividades');
        }

    },
}
</script>
