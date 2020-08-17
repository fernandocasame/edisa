<template>
<div class="vx-row">
    <div class="vx-col w-full mt-4">
        <vx-card he title-color="primary">
            <vue-dropzone class="vx-card" ref="dropzone" id="drop1" @vdropzone-complete="guardar" :options="dropzoneOptions"></vue-dropzone>
        </vx-card>
        <div class="vx-row">
            <div class="vx-col w-full mt-4 mt-3" v-for="(item,$index) in listaContenido" :key="$index">
                <vx-card class="text-center">
                    <vs-alert color="#fff" active="true" class="responsive card-img-top">
                        <a v-bind:href="'./'+item.url" target="_blank">
                            <p>
                                {{item.nombre}}
                            </p>
                        </a>
                    </vs-alert>
                    <vs-avatar color="primary" icon-pack="feather" icon="icon-file" />
                    <p class="mt-2">{{item.updated_at}}</p>
                    <vs-button type="line" v-if="item.curso_idcurso != null" @click="quitarContenido(item.idcontenido)" line-origin="right" color="danger">Eliminar</vs-button>
                </vx-card>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import VueDocPreview from 'vue-doc-preview'
import Vue from 'vue'
import axios from 'axios'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
Vue.use(axios)
export default {
    components: {
        'v-select': vSelect,
        vueDropzone: vue2Dropzone,
        VueDocPreview
    },
    data() {
        return {
            asignaturas: [],
            listaContenido: [],
            file: [],
            usuario:[],
            idasignatura: '',
            dropzoneOptions: {
                url: './',
                dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> Click o arrastra un archivo aquí.",
                chunking: true,
                thumbnailWidth: 150,
                maxFilesize: 10.5,
                addRemoveLinks: true,
                headers: {
                    "My-Awesome-Header": "header value"
                }
            },
        }
    },
    created() {
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
        console.log(this.usuario);
    },    
    mounted() {
        this.getContenido();
    },
    methods: {
        async getAsignaturas() {
            let me = this;
            // axios.get("http://localhost:8001/api/asignatura/"+me.usuario[0].idusuario)
            axios.get("http://localhost:8001/api/asignatura/5763")
                .then(function (response) {
                    me.asignaturas = response.data
                })
                .catch(function (error) {})
        },
        async guardar(file) {
            let me = this
            me.$vs.loading({
                color: '#046AE7'
            })
            let formData = new FormData();
            formData.append('archivo', file);
            formData.append('idusuario', me.usuario[0].idusuario);
            axios.post('https://sistemaeducativo.edisa.ec/api/archivo', formData)
                .then(function (response) {
                    me.file = '';
                    me.$refs.dropzone.removeAllFiles();
                    me.$vs.loading.close()
                })
                .catch(function (error) {
                    if (error.response.status == 422) {
                        me.errors = error.response.data.errors;
                        me.$vs.loading.close()
                    }
                })
        },
        async quitarContenido(id) {
            let me = this;
            me.$vs.loading({
                color: '#046AE7'
            })
            axios
                .get("http://localhost:8001/api/eliminarContenido?id=" + id)
                .then(function (response) {
                    me.getContenido();
                    me.$vs.loading.close()
                })
                .catch(function (error) {
                    if (error.response.status == 422) {
                        me.errors = error.response.data.errors;
                    }
                });
        },
        async getContenido() {
            let me = this;
            me.$vs.loading({
                color: '#046AE7'
            })
            var url = "https://sistemaeducativo.edisa.ec/api/archivo?idusuario=" + me.usuario[0].idusuario;
            axios.get(url).then(function (response) {
                    var respuesta = response.data;
                    me.listaContenido = response.data;
                    me.$vs.loading.close()
                })
                .catch(function (error) {
                    me.$vs.loading.close()
                });
        },
        async getContenidoTodo() {
            let me = this;
            me.$vs.loading({
                color: '#046AE7'
            })
            var url = "http://localhost:8001/api/getContenidoTodo?idcurso=908&idusuario=5763&todo=1";
            axios.get(url).then(function (response) {
                    var respuesta = response.data;
                    me.listaContenido = response.data;
                    me.$vs.loading.close()
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
}
</script>
