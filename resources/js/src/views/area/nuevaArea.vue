<template>
<vx-card :title="titulo">
    <div class="vx-col  w-full mb-base">
        <form enctype="multipart/form-data">
            <div class="vx-row mb-6">
                <input type="text" v-model="area.idarea" hidden>
                <input type="text" v-model="area.fecha_create" hidden>
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Nombre</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <vs-input type="email" class="w-full" icon-pack="feather" icon-no-border v-model="area.nombre" />
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Detalle</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" icon-no-border v-model="area.detalle" />
                </div>
            </div>
            <div class="vx-col sm:w-1/2 w-full ml-auto">
                <vs-button color="success" type="border" @click="guardar(area)" class="mb-2">Enviar</vs-button>
                <vs-button color="danger" type="border" class="mb-2" to="/areas">Cancelar</vs-button>
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
            area: {},
            titulo:''
        }
    },
    mounted() {
        if (!this.$route.params.id) {
            this.titulo = "Nueva Area";
        } else {
            this.titulo = "Editar Area";
            this.getArea(this.$route.params.id);
        }
    },
    methods: {
        getArea(idarea) {
            let me = this;
            console.log(idarea);
            axios.get("http://localhost:8000/api/area/" + idarea)
                .then(function (response) {
                    console.log(response.data);
                    me.area = response.data;
                })
                .catch(function (error) {})
        },
        guardar(data) {
            let me = this;
            console.log(data);
            axios.post("http://localhost:8000/api/area", data)
                .then(function (response) {
                    me.$router.push('/areas');
                })
                .catch(function (error) {})
        }
    },
}
</script>
