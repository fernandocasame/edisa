<template>
<vx-card :title="titulo">
    <div class="vx-col  w-full mb-base">
        <div class="vx-row mb-6">
            <input type="text" v-model="libro.idlibro" hidden>
            <div class="vx-col sm:w-1/3 w-full">
                <span>Nombre</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input type="email" class="w-full" icon-pack="feather" icon-no-border v-model="libro.nombre" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Detalle</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" icon-no-border v-model="libro.detalle" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Carpeta</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" icon-no-border v-model="libro.url" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Asignatura</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <v-select :options="asignaturas" :reduce="asignaturas => asignaturas.idasignatura" label="nombre" v-model="libro.asignatura_idasignatura"></v-select>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
                <vs-button color="success" type="border" @click="guardar(libro)" class="mb-2">Enviar</vs-button>
                <vs-button color="danger" type="border" class="mb-2" to="/libros">Cancelar</vs-button>
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
            libro: {},
            asignaturas:[],
            titulo:''
        }
    },
    mounted() {
        this.getasignatura();
        if (!this.$route.params.id) {
            this.titulo = "Nuevo Libro";
        } else {
            this.titulo = "Editar Libro";
            this.getAsignatura(this.$route.params.id);
        }
    },
    methods: {
        getasignatura() {
            let me = this;
            axios.get('https://sistemaeducativo.edisa.ec/api/asignatura', {

                })
                .then(function (response) {
                    me.asignaturas = response.data;
                })
                .catch(function (error) {})
        },
        getAsignatura(idlibro) {
            let me = this;
            console.log(idlibro);
            axios.get("https://sistemaeducativo.edisa.ec/api/libro/" + idlibro)
                .then(function (response) {
                    console.log(response.data);
                    me.libro = response.data;
                })
                .catch(function (error) {})
        },
        guardar(data) {
            let me = this;
            console.log(data);
            axios.post("https://sistemaeducativo.edisa.ec/api/libro", data)
                .then(function (response) {
                    me.$router.push('/libros');
                })
                .catch(function (error) {})
        }
    },
}
</script>
