<template>
<vx-card title="Asignatura">
    <vs-button type="border" color="success" class="mr-4" to="/asignaturas/nueva">Agregar Nuevo</vs-button>
    <vs-table :data="asignatura" class="mt-4">
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

                <vs-td :data="tr.idarea">
                    <div class="flex">
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-edit" class="mr-2" color="success" @click="getEditar(tr.idasignatura)"></vs-button>
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" class="mr-2" color="danger" @click="getEliminar(tr.idasignatura)"></vs-button>
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
            asignatura: []
        }
    },
    mounted() {
        this.getArea();
    },
    methods: {
        getArea() {
            let me = this;
            axios.get('http://localhost:8000/api/asignatura', {

                })
                .then(function (response) {
                    me.asignatura = response.data;
                    console.log(me.asignatura);
                })
                .catch(function (error) {})
        },
        getEditar(idasignatura) {
            this.$router.push('/asignaturas/editar/' + idasignatura);
            console.log(idasignatura);
        },
        getEliminar(idasignatura) {
            let me = this;
            axios.delete("http://localhost:8000/api/asignatura/" + idasignatura)
                .then(function (response) {
                    me.getArea();
                })
                .catch(function (error) {})
        }
    },
}
</script>
