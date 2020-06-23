<template>
<vx-card :title="titulo">
    <div class="vx-col  w-full mb-base">
        <div class="vx-row mb-6">
            <input type="text" v-model="tipocontenido.idtipo_contenido" hidden>
            <div class="vx-col sm:w-1/3 w-full">
                <span>Nombre</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input type="email" class="w-full" icon-pack="feather" icon-no-border v-model="tipocontenido.nombre" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Detalle</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" icon-no-border v-model="tipocontenido.detalle" />
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
                <vs-button color="success" type="border" @click="guardar(tipocontenido)" class="mb-2">Enviar</vs-button>
                <vs-button color="danger" type="border" class="mb-2" to="/home/tipo_contenido">Cancelar</vs-button>
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
            tipocontenido: {},
            titulo:''
        }
    },
    mounted() {
        if (!this.$route.params.id) {
            this.titulo = "Nueva Tipo de Contendido";
        } else {
            this.titulo = "Editar Tipo de Contendido";
            this.getTipoContenido(this.$route.params.id);
        }
    },
    methods: {
        getTipoContenido(idtipo_contenido) {
            let me = this;
            console.log(idtipo_contenido);
            axios.get("http://localhost:8000/api/tipo/" + idtipo_contenido)
                .then(function (response) {
                    console.log(response.data);
                    me.tipocontenido = response.data;
                })
                .catch(function (error) {})
        },
        guardar(data) {
            let me = this;
            console.log(data);
            axios.post("http://localhost:8000/api/tipo", data)
                .then(function (response) {
                    me.$router.push('/home/tipo_contenido');
                })
                .catch(function (error) {})
        }
    },
}
</script>
