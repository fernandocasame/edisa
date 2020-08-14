<template>
<vx-card title="Areas">
    <vs-button type="border" color="success" class="mr-2" to="/areas/nueva">Agregar Nuevo</vs-button>
    <vs-table :data="area" class="mt-4">
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
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-edit" class="mr-2" color="success" @click="getEditar(tr.idarea)"></vs-button>
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" class="mr-2" color="danger" @click="getEliminar(tr.idarea)"></vs-button>
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
            area: [],
        }
    },
    mounted() {
        this.getArea();
    },
    methods: {
        getArea() {
            let me = this;
            axios.get('https://sistemaeducativo.edisa.ec/api/area', {

                })
                .then(function (response) {
                    me.area = response.data;
                    console.log(me.area);
                })
                .catch(function (error) {})
        },
        getEditar(idarea) {
            this.$router.push('/areas/editar/' + idarea);
            console.log(idarea);
        },
        getEliminar(idarea) {
            let me = this;
            axios.delete("https://sistemaeducativo.edisa.ec/api/area/" + idarea)
                .then(function (response) {
                    me.getArea();
                })
                .catch(function (error) {})
        }
    },
}
</script>
