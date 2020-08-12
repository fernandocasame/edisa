<template>
<vx-card :title="titulo">
    <div class="vx-col  w-full mb-base">
        <form enctype="multipart/form-data">
            <div class="vx-row mb-6">
                <input type="text" v-model="grupo.idarea" hidden>
                <input type="text" v-model="grupo.fecha_create" hidden>
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Nombre</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <vs-input type="email" class="w-full" icon-pack="feather" icon-no-border v-model="grupo.nombre" />
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Detalle</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" icon-no-border v-model="grupo.detalle" />
                </div>
            </div>
            <div class="vx-col sm:w-1/2 w-full ml-auto">
                <vs-button color="success" type="border" @click="guardar(grupo)" class="mb-2">Enviar</vs-button>
                <vs-button color="danger" type="border" class="mb-2" to="/grupos">Cancelar</vs-button>
            </div>
        </form>
    </div>
</vx-card>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
export default {
    data() {
        return {
            grupo: {},
            titulo:''
        }
    },
    mounted() {
        if (!this.$route.params.id) {
            this.titulo = "Nueva Grupo";
        } else {
            this.titulo = "Editar Grupo";
            this.getGrupo(this.$route.params.id);
        }
    },
    methods: {
        getGrupo(idarea) {
            let me = this;
            console.log(idarea);
            axios.get("http://localhost:8000/api/grupo/" + idarea)
                .then(function (response) {
                    console.log(response.data);
                    me.grupo = response.data;
                })
                .catch(function (error) {})
        },
        guardar(data) {
            let me = this;
            console.log(data);
            axios.post("http://localhost:8000/api/grupo", data)
                .then(function (response) {
                    me.$router.push('/grupos');
                })
                .catch(function (error) {})
        }
    },
}
</script>
