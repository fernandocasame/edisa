<template>
<vx-card title="Instituciones">
    <vs-button type="border" color="success" class="mr-2" to="/institucion/nueva">Agregar Nueva</vs-button>
    <vs-table :data="institucion">
        <template slot="thead">
            <vs-th>Nombre</vs-th>
            <vs-th>Detalle</vs-th>
            <vs-th>Region</vs-th>
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

                <vs-td :data="tr.region">
                    <label v-if="tr.region == 0">Costa</label>
                    <label v-if="tr.region == 1">Sierra</label>
                </vs-td>

                <vs-td :data="tr.fecha_create">
                    {{tr.fecha_create}}
                </vs-td>

                <vs-td :data="tr.idinstitucion">
                    <div class="flex">
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-edit" class="mr-2" color="success" @click="getEditar(tr.idinstitucion)"></vs-button>
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" class="mr-2" color="danger" @click="getEliminar(tr.idinstitucion)"></vs-button>
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
            institucion: [],
        }
    },
    mounted() {
        this.getInstitucion();
    },
    methods: {
        getInstitucion() {
            let me = this;
            axios.get('http://localhost:8000/api/institucion', {

                })
                .then(function (response) {
                    me.institucion = response.data;
                    console.log(me.institucion);
                })
                .catch(function (error) {})
        },
        getEditar(institucion) {
            this.$router.push('/institucion/editar/' + institucion);
            console.log(institucion);
        },
        getEliminar(institucion) {
            let me = this;
            axios.delete("http://localhost:8000/api/institucion/" + institucion)
                .then(function (response) {
                    me.getInstitucion();
                })
                .catch(function (error) {})
        }
    },
}
</script>
