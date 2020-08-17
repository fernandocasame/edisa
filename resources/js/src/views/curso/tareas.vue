<template>
<div>
    <div class="demo-alignment">
        <vs-button @click="activePrompt = true" color="dark">Agregar tareas</vs-button>
        <vs-prompt title="Tarea Nueva" @cancel="idlibro=''" @accept="acceptAlert" @close="close" :active.sync="activePrompt">
            <div class="con-exemple-prompt">
                <span>Asignatura</span>
                <v-select :options="select" :reduce="select => select.idlibro" label="nombrelibro" v-model="idlibro"></v-select>
                <span class="mt-4">Contenido</span>
                <v-select :options="select" :reduce="select => select.idlibro" label="nombrelibro" v-model="idlibro"></v-select>
                <datepicker class="mt-4" placeholder="Fecha inicial" v-model="datei"></datepicker>
                <datepicker class="mt-4" placeholder="Fecha final" v-model="datef"></datepicker>
                <vs-textarea class="mt-4" label="Descripción" v-model="textarea" />
            </div>
        </vs-prompt>
    </div>
    <div>
        <vs-table max-items="10" search pagination :data="listaTareas">
            <template slot="thead">
                <vs-th >Nombre</vs-th>
                <vs-th sort-key="descripcion">Descripción</vs-th>
                <vs-th sort-key="fecha_inicio">Fecha inicio</vs-th>
                <vs-th sort-key="fecha_final">Fecha Final</vs-th>
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
Vue.use(axios)
export default {
    components: {
        'v-select': vSelect,
        Datepicker
    },
    data() {
        return {
            datei: null,
            datef: null,
            activePrompt: false,
            activePrompt2: false,
            listaTareas: [],
        }
    },
    computed: {
        validName() {
            return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)
        }
    },
    mounted() {
        this.getTareas();
    },
    methods: {
        acceptAlert() {
            let me = this;
            let formData = new FormData();
            formData.append('idlibro', me.idlibro);
            formData.append('idcurso', 908);
            axios.post('http://localhost:8001/api/postLibroCurso', formData)
                .then(function (response) {
                    me.getLibros();
                    me.$vs.notify({
                        color: 'success',
                        title: 'Guardado',
                        text: 'Libro Agregado'
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
            var url = "http://localhost:8001/api/getTareasDocentes?idcurso=908";
            axios.get(url).then(function (response) {
                    var respuesta = response.data;
                    me.listaTareas = response.data.items;
                    me.$vs.loading.close()
                })
                .catch(function (error) {
                    me.$vs.loading.close()
                });

        },
    },
}
</script>
