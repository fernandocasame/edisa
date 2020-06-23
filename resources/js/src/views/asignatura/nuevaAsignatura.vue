<template>
<vx-card :title="titulo">
    <div class="vx-col  w-full mb-base">
        <div class="vx-row mb-6">
            <input type="text" v-model="asignatura.idasignatura" hidden>
            <div class="vx-col sm:w-1/3 w-full">
                <span>Nombre</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input type="email" class="w-full" icon-pack="feather" icon-no-border v-model="asignatura.nombre" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Detalle</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" icon-no-border v-model="asignatura.detalle" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Area</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <v-select :options="areas" :reduce="areas => areas.idarea" label="nombre" v-model="asignatura.area_idarea"></v-select>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
                <vs-button color="success" type="border" @click="guardar(asignatura)" class="mb-2">Enviar</vs-button>
                <vs-button color="danger" type="border" class="mb-2" to="/home/asignaturas">Cancelar</vs-button>
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
            asignatura: {},
            areas:[],
            titulo:''
        }
    },
    mounted() {
        this.getArea();
        if (!this.$route.params.id) {
            this.titulo = "Nueva Asignatura";
        } else {
            this.titulo = "Editar Asignatura";
            this.getAsignatura(this.$route.params.id);
        }
    },
    methods: {
        getArea() {
            let me = this;
            axios.get('http://localhost:8000/api/area', {

                })
                .then(function (response) {
                    me.areas = response.data;
                })
                .catch(function (error) {})
        },
        getAsignatura(idasignatura) {
            let me = this;
            console.log(idasignatura);
            axios.get("http://localhost:8000/api/asignatura/" + idasignatura)
                .then(function (response) {
                    console.log(response.data);
                    me.asignatura = response.data;
                })
                .catch(function (error) {})
        },
        guardar(data) {
            let me = this;
            console.log(data);
            axios.post("http://localhost:8000/api/asignatura", data)
                .then(function (response) {
                    me.$router.push('/home/asignaturas');
                })
                .catch(function (error) {})
        }
    },
}
</script>
