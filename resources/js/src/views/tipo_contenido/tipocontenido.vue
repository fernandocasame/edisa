<template>
<vx-card title="Tipo Contenido">
    <vs-button type="border" color="success" class="mr-4" to="/home/areas/nueva">Nueva Area</vs-button>
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
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-edit" class="mr-2" color="success"></vs-button>
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" class="mr-2" color="danger"></vs-button>
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
        }

    },
}
</script>
