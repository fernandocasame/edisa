<template>
<vx-card :title="titulo">
    <div class="vx-col  w-full mb-base">
        <form enctype="multipart/form-data">
            <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Cédula</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" icon-no-border v-model="estudiante.cedula" />
                </div>
            </div>
            <div class="vx-row mb-6">
                <input type="text" v-model="estudiante.idusuario" hidden>
                <input type="text" v-model="estudiante.grupo_idgrupo" hidden>
                <input type="text" v-model="estudiante.password" hidden>
                <input type="text" v-model="estudiante.fecha_create" hidden>
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Nombres</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <vs-input type="text" class="w-full" icon-pack="feather" icon-no-border v-model="estudiante.nombre" />
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Apellidos</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" icon-no-border v-model="estudiante.apellido" />
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Correo</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <vs-input type="email" class="w-full" icon-no-border v-model="estudiante.email" />
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Teléfono</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <vs-input type="number" class="w-full" icon-no-border v-model="estudiante.telefono" />
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Genero</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <ul class="demo-alignment">
                        <li>
                            <vs-radio v-model="estudiante.genero" vs-value="0">Hombre</vs-radio>
                        </li>
                        <li>
                            <vs-radio v-model="estudiante.genero" vs-value="1">Mujer</vs-radio>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Institución</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <v-select :options="institucion" :reduce="institucion => institucion.idinstitucion" label="nombre" v-model="estudiante.institucion_idinstitucion"></v-select>
                </div>
            </div>

            <div class="vx-col sm:w-1/2 w-full ml-auto">
                <vs-button color="success" type="border" @click="guardar(estudiante)" class="mb-2">Enviar</vs-button>
                <vs-button color="danger" type="border" class="mb-2" to="/docentes">Cancelar</vs-button>
            </div>
        </form>
    </div>
</vx-card>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";
Vue.use(axios)
Vue.component("v-select", vSelect);
export default {
    data() {
        return {
            institucion: [],
            estudiante: {},
            titulo: ''
        }
    },
    mounted() {
        this.getPassword();
        this.getInstitucion();
        if (!this.$route.params.id) {
            this.titulo = "Nuevo Estudiante";
        } else {
            this.titulo = "Editar Estudiante";
            this.getDocente(this.$route.params.id);
        }
    },
    methods: {
        getPassword() {
            let me = this;
            axios.get('https://sistemaeducativo.edisa.ec/api/password')
                .then(function (response) {
                    console.log(response.data);
                    me.estudiante.password = response.data;
                })
                .catch(function (error) {})
        },
        getInstitucion() {
            let me = this;
            axios.get('https://sistemaeducativo.edisa.ec/api/institucion', {

                })
                .then(function (response) {
                    me.institucion = response.data;
                    console.log(me.institucion);
                })
                .catch(function (error) {})
        },
        getDocente(idusuario) {
            let me = this;
            console.log(idusuario);
            axios.get("https://sistemaeducativo.edisa.ec/api/estudiante/" + idusuario)
                .then(function (response) {
                    console.log(response.data);
                    me.estudiante = response.data;
                })
                .catch(function (error) {})
        },
        guardar(data) {
            let me = this;
            me.estudiante.grupo_idgrupo = '3'
            console.log(data);
            axios.post("https://sistemaeducativo.edisa.ec/api/estudiante", data)
                .then(function (response) {
                    me.$router.push('/estudiantes');
                })
                .catch(function (error) {})
        }
    },
}
</script>
