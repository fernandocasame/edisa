<template>
<vx-card title="Grupos de Usuarios">
    <vs-button type="border" color="success" class="mr-2" to="/grupos/nuevo">Agregar Nuevo</vs-button>
    <vs-table :data="grupo" class="mt-4">
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

                <vs-td :data="tr.idgrupo">
                    <div class="flex">
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-edit" class="mr-2" color="success" @click="getEditar(tr.idgrupo)"></vs-button>
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" class="mr-2" color="danger" @click="getEliminar(tr.idgrupo)"></vs-button>
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
            grupo: [],
        }
    },
    mounted() {
        this.getGrupos();
    },
    methods: {
        getGrupos() {
            let me = this;
            axios.get('http://localhost:8000/api/grupo', {

                })
                .then(function (response) {
                    me.grupo = response.data;
                    console.log(me.grupo);
                })
                .catch(function (error) {})
        },
        getEditar(idgrupo) {
            this.$router.push('/grupos/editar/' + idgrupo);
            console.log(idgrupo);
        },
        getEliminar(idgrupo) {
            let me = this;
            axios.delete("http://localhost:8000/api/grupo/" + idgrupo)
                .then(function (response) {
                    me.getGrupos();
                })
                .catch(function (error) {})
        }
    },
}
</script>
