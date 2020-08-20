<template>
<div>
    <vs-table max-items="10" search pagination :data="listaTareas">
        <template slot="thead">
            <vs-th sort-key="nombre">Tarea</vs-th>
            <vs-th sort-key="descripcion">Descripción</vs-th>
            <vs-th sort-key="fecha_inicio">Fecha inicio</vs-th>
            <vs-th sort-key="fecha_final">Fecha Final</vs-th>
            <vs-th sort-key="fecha_final">Nota</vs-th>
        </template>
        <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].nombre">
                    <a :href="'https://sistemaeducativo.edisa.ec/archivos/'+data[indextr].url" target="_blank">
                        {{data[indextr].nombre}}
                    </a>
                </vs-td>
                <vs-td :data="data[indextr].detalle">
                    {{data[indextr].detalle}}
                </vs-td>
                <vs-td :data="data[indextr].fecha_inicio">
                    {{data[indextr].fecha_inicio}}
                </vs-td>
                <vs-td :data="data[indextr].fecha_fin">
                    {{data[indextr].fecha_fin}}
                </vs-td>
                <vs-td :data="data[indextr].nota">
                    {{data[indextr].nota}}
                </vs-td>
            </vs-tr>
        </template>
    </vs-table>
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
            idcurso: ''
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
            var url = "https://sistemaeducativo.edisa.ec/api/tareaEstudianteRealizada?idcurso=" + me.idcurso + "&idusuario=" + me.usuario[0].idusuario;
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
