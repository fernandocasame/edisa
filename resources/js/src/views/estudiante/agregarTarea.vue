<template>
<div class="vx-col w-full mt-4">
    <vx-card title="Agregar Tarea" he>
        <vue-dropzone class="vx-card" ref="dropzone" id="drop1" @vdropzone-complete="guardarFile" :options="dropzoneOptions"></vue-dropzone>
        <vs-textarea class="mt-8" label="Descripción" v-model="descripcion" />
        <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
                <vs-button color="success" type="border" @click="guardar()" class="mb-2">Enviar</vs-button>
                <vs-button color="danger" type="border" class="mb-2" to="/estudiante/curso/digital">Cancelar</vs-button>
            </div>
        </div>
    </vx-card>
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
            usuario: [],
            idasignatura: '',
            descripcion: '',
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
    methods: {
        guardarFile(file){
            let me = this;
            me.file = file;
        },
        async guardar() {
            let me = this
            me.$vs.loading({
                color: '#046AE7'
            })
            let formData = new FormData();
            formData.append('archivo', me.file);
            formData.append('idusuario', me.usuario[0].idusuario);
            formData.append('descripcion', me.descripcion);
            formData.append('idtarea', localStorage.getItem('idtarea'));
            axios.post('https://sistemaeducativo.edisa.ec/api/respuesta', formData)
                .then(function (response) {
                    me.file = '';
                    me.$refs.dropzone.removeAllFiles();
                    me.$vs.loading.close()
                    me.$router.push('/estudiante/curso/digital');
                })
                .catch(function (error) {
                    if (error.response.status == 422) {
                        me.errors = error.response.data.errors;
                        me.$vs.loading.close()
                    }
                })
        },
    },
}
</script>
