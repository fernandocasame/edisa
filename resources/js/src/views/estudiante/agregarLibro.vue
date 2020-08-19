<template>
<vx-card title="Agregar Libro">
    <div class="vx-col  w-full mb-base">
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Ingresa el código</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input type="email" class="w-full" icon-pack="feather" icon-no-border v-model="libro.codigo" />
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
                <vs-button color="success" type="border" @click="guardar(libro)" class="mb-2">Enviar</vs-button>
                <vs-button color="danger" type="border" class="mb-2" to="/estudiante/libros">Cancelar</vs-button>
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
            libro: {}
        }
    },
    methods: {
        guardar(data) {
            let me = this;
            console.log(data);
            axios.post("https://sistemaeducativo.edisa.ec/api/codigo", data)
                .then(function (response) {
                    me.$router.push('/estudiante/libros');
                })
                .catch(function (error) {
                    me.$vs.dialog({
                        type: 'confirm',
                        color: 'danger',
                        title: `Error`,
                        text: 'Error de codigo '+data.codigo,
                    })
                })
        }
    },
}
</script>
