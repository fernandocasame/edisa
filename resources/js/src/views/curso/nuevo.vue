<template>
<vx-card :title="titulo">
    <div class="vx-col  w-full mb-base">
        <div class="vx-row mb-6">
            <input type="text" v-model="curso.idcurso" hidden>
            <div class="vx-col sm:w-1/3 w-full">
                <span>Nombre</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input type="email" class="w-full" icon-pack="feather" icon-no-border v-model="curso.nombre" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Paralelo</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input class="w-full" icon-no-border v-model="curso.paralelo" />
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Año</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input type="number" class="w-full" icon-no-border v-model="curso.anio" />
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
                <vs-button color="success" type="border" @click="guardar(curso)" class="mb-2">Enviar</vs-button>
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
            curso: {},
            asignaturas:[],
            titulo:'',
            usuario:[]
        }
    },
    created() {
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
        this.curso.usuario_idusuario = this.usuario[0].idusuario;
    },
    mounted() {
        if (!this.$route.params.id) {
            this.codigo();
            this.titulo = "Nuevo Libro";
        } else {
            this.titulo = "Editar Libro";
            this.getCurso(this.$route.params.id);
        }
    },
    methods: {
        codigo() {
            let me = this;
            axios.get('http://localhost:8000/api/codigo')
                .then(function (response) {
                    me.codigo = response.data;
                    me.curso.codigo = me.codigo.codigo;
                    console.log(me.curso)
                })
                .catch(function (error) {})
        },
        getCurso(idcurso) {
            let me = this;
            console.log(idcurso);
            axios.get("http://localhost:8000/api/curso/" + idcurso)
                .then(function (response) {
                    console.log(response.data);
                    me.curso = response.data;
                })
                .catch(function (error) {})
        },
        guardar(data) {
            let me = this;
            console.log(data);
            axios.post("http://localhost:8000/api/curso", data)
                .then(function (response) {
                    me.$router.push('/cursos');
                })
                .catch(function (error) {})
        }
    },
}
</script>
