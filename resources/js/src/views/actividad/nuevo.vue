<template>
<vx-card :title="titulo">
    <div class="vx-col  w-full mb-base">
        <div class="vx-row mb-6">
            <input type="text" v-model="actividad.idactividad" hidden>
            <input type="text" v-model="actividad.libro_idlibro" hidden>
            <div class="vx-col sm:w-1/3 w-full">
                <span>Nombre</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input type="email" class="w-full" icon-pack="feather" icon-no-border v-model="actividad.nombre" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Detalle</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" icon-no-border v-model="actividad.detalle" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Carpeta</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" icon-no-border v-model="actividad.url" />
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
                <vs-button color="success" type="border" @click="guardar(actividad)" class="mb-2">Enviar</vs-button>
                <vs-button color="danger" type="border" class="mb-2" to="/actividades">Cancelar</vs-button>
            </div>
        </div>
    </div>
</vx-card>
</template>


<script>
import "vue-select/dist/vue-select.css";
import Vue from "vue";
import vSelect from "vue-select";
import axios from 'axios'
Vue.use(axios)
Vue.component("v-select", vSelect);
export default {
    data() {
        return {
            actividad: {},
            titulo:'',
        }
    },
    mounted() {
        if (!this.$route.params.id) {
            this.titulo = "Nuevo Actividad";
        } else {
            this.titulo = "Editar Actividad";
            this.getAsignatura(this.$route.params.id);
        }
    },
    methods: {
        getAsignatura(idactividad) {
            let me = this;
            axios.get("http://localhost:8000/api/actividad/" + idactividad)
                .then(function (response) {
                    me.actividad = response.data;
                })
                .catch(function (error) {})
        },
        guardar(data) {
            let me = this;
            me.actividad.libro_idlibro = localStorage.getItem('idlibro')
            axios.post("http://localhost:8000/api/actividad", data)
                .then(function (response) {
                    me.$router.push('/actividades');
                })
                .catch(function (error) {})
        }
    },
}
</script>
