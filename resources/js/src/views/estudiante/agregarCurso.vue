<template>
<vx-card title="Agregar Curso">
    <div class="vx-col  w-full mb-base">
        <div class="vx-row mb-6">
            <input type="text" v-model="curso.idcurso" hidden>
            <div class="vx-col sm:w-1/3 w-full">
                <span>Código del curso </span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input type="email" class="w-full" icon-pack="feather" icon-no-border v-model="curso.codigo" />
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
                <vs-button color="success" type="border" @click="guardar(curso)" class="mb-2">Enviar</vs-button>
                <vs-button color="danger" type="border" class="mb-2" to="/cursos">Cancelar</vs-button>
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
            curso: {},
            usuario:[]
        }
    },
    created() {
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
    },
    mounted() {
        
    },
    methods: {
        guardar(data) {
            let me = this;
            console.log(data);
            axios.post("https://sistemaeducativo.edisa.ec/api/cursoEstudiante", {
                idusuario:me.usuario[0].idusuario,
                codigo:me.curso.codigo
            })
                .then(function (response) {
                    me.$router.push('/estudiantes/cursos');
                })
                .catch(function (error) {})
        }
    },
}
</script>
