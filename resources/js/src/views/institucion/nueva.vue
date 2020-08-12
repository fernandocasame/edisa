<template>
<vx-card :title="titulo">
    <div class="vx-col  w-full mb-base">
        <form enctype="multipart/form-data">
            <div class="vx-row mb-6">
                <input type="text" v-model="institucion.idinstitucion" hidden>
                <input type="text" v-model="institucion.fecha_create" hidden>
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Nombre</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <vs-input type="email" class="w-full" icon-pack="feather" icon-no-border v-model="institucion.nombre" />
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Detalle</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" icon-no-border v-model="institucion.detalle" />
                </div>
            </div>
            <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Región</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <ul class="demo-alignment">
                        <li>
                            <vs-radio v-model="institucion.region" vs-value="0">Costa</vs-radio>
                        </li>
                        <li>
                            <vs-radio v-model="institucion.region" vs-value="1">Sierra</vs-radio>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Provincia</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <v-select @input="getCanton()" :options="pro" :reduce="pro => pro.id" label="name" v-model="institucion.idprovincia"></v-select>
                </div>
            </div>

            <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Canton</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <v-select @input="getParroqui()" :options="can" :reduce="can => can.id" label="canton" v-model="institucion.idcanton"></v-select>
                </div>
            </div>

            <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                    <span>Parroquía</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                    <v-select :options="parro" label="name" :reduce="parro => parro.id" v-model="institucion.idparroquia"></v-select>
                </div>
            </div>

            <div class="vx-col sm:w-1/2 w-full ml-auto">
                <vs-button color="success" type="border" @click="guardar(institucion)" class="mb-2">Enviar</vs-button>
                <vs-button color="danger" type="border" class="mb-2" to="/instituciones">Cancelar</vs-button>
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
            institucion: {},
            titulo: '',
            idprovincia: "",
            idcanton: "",
            idparroquia: "",
            pro: [],
            can: [],
            parro: [],
        }
    },
    mounted() {
        this.getProvincia();
        if (!this.$route.params.id) {
            this.titulo = "Nueva Institución";
        } else {
            this.titulo = "Editar Institución";
            this.getInstitucion(this.$route.params.id);
        }
    },
    methods: {
        getProvincia() {
            let me = this;
            axios
                .get("http://50.30.36.168:8000/api/provincias")
                .then(function (response) {
                    me.pro = response.data;
                    console.log(response.data);
                    me.can = me.pro[me.institucion.idprovincia].cantones;
                    me.parro = me.can[me.institucion.idcanton].parroquias;
                })
                .catch(function (error) {});
        },
        getCanton() {
            let me = this;
            me.can = me.pro[me.institucion.idprovincia].cantones;
        },
        getParroqui() {
            let me = this;
            me.parro = me.can[me.institucion.idcanton].parroquias;
        },
        getInstitucion(idinstitucion) {
            let me = this;
            console.log(idinstitucion);
            axios.get("http://localhost:8000/api/institucion/" + idinstitucion)
                .then(function (response) {
                    console.log(response.data);
                    me.institucion = response.data;
                })
                .catch(function (error) {})
        },
        guardar(data) {
            let me = this;
            console.log(data);
            axios.post("http://localhost:8000/api/institucion", data)
                .then(function (response) {
                    me.$router.push('/instituciones');
                })
                .catch(function (error) {})
        }
    },
}
</script>
