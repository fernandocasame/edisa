<template>
<div>
    <div class="demo-alignment">
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
                <vs-th sort-key="descripcion" >Descripción</vs-th>
                <vs-th sort-key="fecha_inicio" >Fecha inicio</vs-th>
                <vs-th sort-key="fecha_final" >Fecha Final</vs-th>
                <vs-th>Acciones</vs-th>
            </template>
            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].detalle">
                        {{data[indextr].detalle}}
                    </vs-td>
                    <vs-td :data="data[indextr].fecha_inicio">
                        {{data[indextr].fecha_inicio}}
                    </vs-td>
                    <vs-td :data="data[indextr].fecha_fin">
                        {{data[indextr].fecha_fin}}
                    </vs-td>
                    <vs-td :data="tr.idInstitucion">
                        <div class="flex">
                            <vs-button color="success" type="relief" @click="getInformacion(tr.idInstitucion)">Realizar</vs-button>
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
    },
    methods: {
        getTareas(id) {
            let me = this;
            me.$vs.loading({
                color: '#046AE7'
            })
            var url = "https://sistemaeducativo.edisa.ec/api/tareaEstudiante?idcurso="+me.idcurso+"&idusuario="+me.usuario[0].idusuario;
            axios.get(url).then(function (response) {
                    var respuesta = response.data.items;
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
