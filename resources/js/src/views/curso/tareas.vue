<template>
<div>
    <div class="demo-alignment">
        <vs-button @click="activePrompt = true" color="dark">Agregar tareas</vs-button>
        <vs-prompt title="Tarea Nueva" @cancel="idlibro=''" @accept="acceptAlert" @close="close" :active.sync="activePrompt">
            <div class="con-exemple-prompt">
                <span class="mt-4">Contenido</span>
                <v-select :options="listaContenido" :reduce="listaContenido => listaContenido.idarchivo" label="nombre" v-model="tarea.archivo_idarchivo"></v-select>
                <flat-pickr class="mt-4" :config="configdateTimePicker" v-model="tarea.fecha_inicio" placeholder="Fecha Inicial" />
                <flat-pickr class="mt-4" :config="configdateTimePicker" v-model="tarea.fecha_fin" placeholder="Fecha Final" />
                <vs-textarea class="mt-4" label="Descripción" v-model="tarea.detalle" />
            </div>
        </vs-prompt>
    </div>
    <div>
        <vs-table max-items="10" search pagination :data="listaTareas">
            <template slot="thead">
                <vs-th >Nombre</vs-th>
                <vs-th sort-key="descripcion" >Descripción</vs-th>
                <vs-th sort-key="fecha_inicio" >Fecha inicio</vs-th>
                <vs-th sort-key="fecha_final" >Fecha Final</vs-th>
                <vs-th>Acciones</vs-th>
            </template>
            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].tarea.nombre">
                        {{data[indextr].tarea.nombre}}
                    </vs-td>
                    <vs-td :data="data[indextr].tarea.descripcion">
                        {{data[indextr].tarea.descripcion}}
                    </vs-td>
                    <vs-td :data="data[indextr].tarea.fecha_inicio">
                        {{data[indextr].tarea.fecha_inicio}}
                    </vs-td>
                    <vs-td :data="data[indextr].tarea.fecha_final">
                        {{data[indextr].tarea.fecha_final}}
                    </vs-td>
                    <vs-td :data="tr.idInstitucion">
                        <div class="flex">
                            <vs-button type="border" size="small" icon-pack="feather" icon="icon-info" class="mr-2" color="primary" @click="getInformacion(tr.idInstitucion)"></vs-button>
                        </div>
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import Datepicker from 'vuejs-datepicker';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
Vue.use(axios)
export default {
    components: {
        'v-select': vSelect,
        Datepicker,
        flatPickr
    },
    data() {
        return {
            configdateTimePicker: {
              enableTime: true,
              dateFormat: 'Y-m-d H:i:s'
            },
            datei: null,
            datef: null,
            activePrompt: false,
            activePrompt2: false,
            listaTareas: [],
            listaContenido: [],
            usuario: [],
            tarea: {},
            idcurso:''
        }
    },
    computed: {
        validName() {
            return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)
        }
    },
    created() {
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
        this.idcurso = localStorage.getItem('idcurso')
        console.log(this.usuario);
    },
    mounted() {
        this.getTareas();
        this.getContenido();
    },
    methods: {
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
        acceptAlert() {
            let me = this;
            let formData = new FormData();
            formData.append('detalle', me.tarea.detalle);
            formData.append('fecha_inicio', me.tarea.fecha_inicio);
            formData.append('fecha_fin', me.tarea.fecha_fin);
            formData.append('archivo_idarchivo', me.tarea.archivo_idarchivo);
            formData.append('curso_idcurso', me.idcurso);
            axios.post('https://sistemaeducativo.edisa.ec/api/tarea', formData)
                .then(function (response) {
                    me.getLibros();
                    me.$vs.notify({
                        color: 'success',
                        title: 'Guardado',
                        text: 'Tarea Agregada'
                    })
                })
                .catch(function (error) {})

        },
        close() {
            this.$vs.notify({
                color: 'danger',
                title: '',
                text: 'Datos no guardados!'
            })
        },
        clearValMultiple() {
            this.valMultipe.value1 = "";
            this.valMultipe.value2 = "";
        },
        getTareas(id) {
            let me = this;
            me.$vs.loading({
                color: '#046AE7'
            })
            var url = "https://sistemaeducativo.edisa.ec/api/tarea?idcurso="+me.idcurso;
            axios.get(url).then(function (response) {
                    var respuesta = response.data;
                    me.listaTareas = response.data;
                    me.$vs.loading.close()
                })
                .catch(function (error) {
                    me.$vs.loading.close()
                });

        },
    },
}
</script>
