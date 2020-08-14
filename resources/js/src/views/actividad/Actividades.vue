<template>
<vx-card title="Actividades">
    <vs-button type="border" color="success" class="mr-2" to="/actividad/nueva">Agregar Nuevo</vs-button>
    <vs-table :data="actividades" class="mt-4">
        <template slot="thead">
            <vs-th>Nombre</vs-th>
            <vs-th>Detalle</vs-th>
            <vs-th>Fecha de Creacion</vs-th>
            <vs-th>Acciones</vs-th>
        </template>
        <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                <vs-td :data="tr.nombre">
                    {{tr.nombre}}
                </vs-td>

                <vs-td :data="tr.detalle">
                    {{tr.detalle}}
                </vs-td>

                <vs-td :data="tr.fecha_create">
                    {{tr.fecha_create}}
                </vs-td>

                <vs-td :data="tr.idactividad">
                    <div class="flex">
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-edit" class="mr-2" color="success" @click="getEditar(tr.idactividad)"></vs-button>
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" class="mr-2" color="danger" @click="getEliminar(tr.idactividad)"></vs-button>
                    </div>
                </vs-td>

            </vs-tr>
        </template>
    </vs-table>
</vx-card>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
export default {
    data() {
        return {
            actividades: [],
            idlibro:''
        }
    },
    mounted() {
        this.getActividades();
    },
    methods: {
        getActividades() {
            let me = this;
            me.idlibro = localStorage.getItem('idlibro')
            axios.get('https://sistemaeducativo.edisa.ec/api/actividad?id='+me.idlibro)
                .then(function (response) {
                    me.actividades = response.data;
                })
                .catch(function (error) {})
        },
		getEditar(idactividad) {
            this.$router.push('/actividad/editar/' + idactividad);
        },
        getEliminar(idactividad) {
            let me = this;
            axios.delete("https://sistemaeducativo.edisa.ec/api/actividad/" + idactividad)
                .then(function (response) {
                    me.getActividades();
                })
                .catch(function (error) {})
        }

    },
}
</script>
