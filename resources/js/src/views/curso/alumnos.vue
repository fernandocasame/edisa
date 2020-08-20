<template>
<div>
    <vs-table max-items="10" search pagination :data="estudiantes">
        <template slot="thead">
            <vs-th sort-key="descripcion">Nombre</vs-th>
            <vs-th sort-key="fecha_inicio">Apellido</vs-th>
            <vs-th sort-key="fecha_final">Correo</vs-th>
            <vs-th>Acciones</vs-th>
        </template>
        <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].nombre">
                    {{data[indextr].nombre}}
                </vs-td>
                <vs-td :data="data[indextr].apellido">
                    {{data[indextr].apellido}}
                </vs-td>
                <vs-td :data="data[indextr].email">
                    {{data[indextr].email}}
                </vs-td>
                <vs-td :data="tr.idusuario">
                    <div class="flex">
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-info" class="mr-2" color="primary" @click="getInformacion(tr.idusuario)"></vs-button>
                    </div>
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
            estudiantes: [],
            usuario: [],
            codigo:''
        }
    },
    computed: {
        validName() {
            return (this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0)
        }
    },
    created() {
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
        this.codigo = localStorage.getItem('codigo')
        console.log(this.usuario);
    },
    mounted() {
        this.getEstudiantes();
    },
    methods: {
        async getEstudiantes() {
            let me = this;
            me.$vs.loading({
                color: '#046AE7'
            })
            var url = "https://sistemaeducativo.edisa.ec/api/cursoEstudiante?codigo=" + me.codigo;
            axios.get(url).then(function (response) {
                    var respuesta = response.data;
                    me.estudiantes = response.data;
                    me.$vs.loading.close()
                })
                .catch(function (error) {
                    me.$vs.loading.close()
                });
        }
    },
}
</script>
