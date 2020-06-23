<template>
<vx-card title="Tipo Contenido">
    <vs-button type="border" color="success" class="mr-4" to="/home/tipo_contenido/nuevo">Nueva Area</vs-button>
    <vs-table :data="tipocontenido">
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
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-edit" class="mr-2" color="success" @click="getEditar(tr.idtipo_contenido)"></vs-button>
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" class="mr-2" color="danger" @click="getEliminar(tr.idtipo_contenido)"></vs-button>
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
            tipocontenido: []
        }
    },
    mounted() {
        this.getArea();
    },
    methods: {
        getArea() {
            let me = this;
            axios.get('http://localhost:8000/api/tipo', {

                })
                .then(function (response) {
                    me.tipocontenido = response.data;
                    console.log(me.tipocontenido);
                })
                .catch(function (error) {})
        },
        getEditar(idtipo_contenido) {
            this.$router.push('/home/tipo_contenido/editar/' + idtipo_contenido);
            console.log(idtipo_contenido);
        },
        getEliminar(idtipo_contenido) {
            let me = this;
            axios.delete("http://localhost:8000/api/tipo/" + idtipo_contenido)
                .then(function (response) {
                    me.getArea();
                })
                .catch(function (error) {})
        }
    },
}
</script>
