<template>
<div>
    <iframe id="t0_iframe" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" style="color:white; display: block; width: 100%; height: 100%; margin-left: auto; margin-right: auto; padding: 0px; top: 0px; position: absolute; left: 0px;" v-bind:src="'https://sistemaeducativo.edisa.ec/carpeta_libros/'+url"></iframe>
    <vs-navbar v-model="activeItem" class="p-2">

        <div slot="title">
            <vs-navbar-title>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:white">Edisa</span>
            </vs-navbar-title>
        </div>
        <vs-navbar-item index="1">
        </vs-navbar-item>
        <vs-navbar-item index="2">
            <a href="./libros" to="/libros" style="color:white">Salir</a>
        </vs-navbar-item>
    </vs-navbar>
    <vs-popup classContent="popup-example" title="Compartir Activdad" :active.sync="popupActive2">
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Nombre</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" v-model="actividade.nombre" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Detalle</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" v-model="actividade.detalle" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Codigo Estudiante</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" v-model="actividade.codigo" />
            </div>
        </div>
    </vs-popup>
    <vs-popup fullscreen title="Actividades" :active.sync="popupActive">
        <div class="vx-row text-center">
            <div class="vx-col w-full sm:w-1/6 md:w-1/6 lg:w-2/4 xl:w-4/4" v-for="(item,$index) in actividades" v-bind:key="$index">
                <vx-card class="text-center">
                    <div slot="no-body">
                        <img :src="'/rocket.png'" alt="content-img" class="responsive card-img-top">
                    </div>
                    <h5 class="mb-2">{{item.nombre}}</h5>
                    <p class="text-grey">{{item.detalle}}</p>
                    <div class="flex flex-wrap mt-4">
                        <div class="w-1/3 ml-auto">
                            <vs-button radius color="primary" type="filled" @click="veractividad(item.url,item.idactividad)" icon-pack="feather" icon="icon-eye"></vs-button>
                        </div>
                        <div class="w-1/3 ml-auto">
                            <vs-button radius color="warning" type="filled" @click="compartir(item)" icon-pack="feather" icon="icon-copy"></vs-button>
                        </div>

                    </div>
                </vx-card>
            </div>
        </div>
    </vs-popup>

</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
export default {
    data() {
        return {
            url: '',
            idlibro: '',
            popupActive: false,
            actividades: [],
            actividade: {},
            popupActive2: false,
        }
    },
    methods: {
        getActividades() {
            let me = this;
            me.idlibro = localStorage.getItem('idlibro')
            axios.get('https://sistemaeducativo.edisa.ec/api/actividad?id=' + me.idlibro)
                .then(function (response) {
                    me.actividades = response.data;
                    console.log(me.actividades);
                })
                .catch(function (error) {})
        },
        veractividad(url, id) {
            localStorage.url = url;
            localStorage.idactividad = id;
            window.open('/actividad/digital', '_blank');
        },
        compartir(item) {
            let me = this;
            me.popupActive = false;
            me.popupActive2 = true;
            me.actividade = item;
            axios.get('https://sistemaeducativo.edisa.ec/api/codigo')
                .then(function (response) {
                    me.codigo = response.data;
                    me.actividade.codigo = me.codigo.codigo;
                })
                .catch(function (error) {})
        },

    },
    mounted() {
        this.getActividades()
        this.url = localStorage.getItem('url')
        console.log(localStorage.getItem('url'))
    },
}
</script>
