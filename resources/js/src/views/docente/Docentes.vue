<template>
<vx-card title="Docentes">
    <vs-button type="border" color="success" class="mr-2" to="/home/docente/nuevo">Agregar Nueva</vs-button>
    <vs-table :data="docentes">
        <template slot="thead">
            <vs-th>Nombres</vs-th>
            <vs-th>Apellidos</vs-th>
            <vs-th>Correo</vs-th>
            <vs-th>Fecha de Creacion</vs-th>
            <vs-th>Acciones</vs-th>
        </template>
        <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                <vs-td :data="tr.nombre">
                    {{tr.nombre}}
                </vs-td>

                <vs-td :data="tr.apellido">
                    {{tr.apellido}}
                </vs-td>

                <vs-td :data="tr.email">
                    {{tr.email}}
                </vs-td>

                <vs-td :data="tr.fecha_create">
                    {{tr.fecha_create}}
                </vs-td>

                <vs-td :data="tr.idusuario">
                    <div class="flex">
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-edit" class="mr-2" color="success" @click="getEditar(tr.idusuario)"></vs-button>
                        <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" class="mr-2" color="danger" @click="getEliminar(tr.idusuario)"></vs-button>
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
            docentes: [],
        }
    },
    mounted() {
        this.getDocentes();
    },
    methods: {
        getDocentes() {
            let me = this;
            axios.get('http://localhost:8000/api/usuario', {

                })
                .then(function (response) {
                    me.docentes = response.data;
                    console.log(me.docentes);
                })
                .catch(function (error) {})
        },
        getEditar(docentes) {
            this.$router.push('/home/docente/editar/' + docentes);
            console.log(docentes);
        },
        getEliminar(docentes) {
            let me = this;
            axios.delete("http://localhost:8000/api/usuario/" + docentes)
                .then(function (response) {
                    me.getDocentes();
                })
                .catch(function (error) {})
        }
    },
}
</script>
