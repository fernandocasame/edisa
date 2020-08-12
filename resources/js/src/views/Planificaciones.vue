<template>
<!-- <vx-card fixed-height=true>
    <iframe id="t0_iframe" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" style="display: block; width: 100%; height: 100vh; margin-left: auto; margin-right: auto; padding: 0px; top: 0px; position: absolute; left: 0px;" v-bind:src="'http://69.64.46.74/edisa/public/actividades/condor/'"></iframe>
</vx-card> -->
<div id="demo-basic-card">
    <div class="vx-row">
        <v-app id="inspire">
            <div class="text-center">
                <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                            Click Me
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-title class="headline grey lighten-2" primary-title>
                            Privacy Policy
                        </v-card-title>

                        <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" text @click="dialog = false">
                                I accept
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </v-app>
        <div v-for="(item,$index) in actividades" v-bind:key="$index" class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
            <vx-card>
                <div slot="no-body">
                    <img :src="'/rocket.png'" alt="content-img" class="responsive card-img-top">
                </div>
                <h5 class="mb-2">{{item.nombre}}</h5>
                <p class="text-grey">{{item.detalle}}</p>
                <div class="flex justify-between flex-wrap">
                    <vs-button class="mt-4 mr-2 shadow-lg" :to="'/virtual/'+item.url" type="gradient" color="#7367F0" gradient-color-secondary="#CE9FFC">Actividad</vs-button>
                </div>
            </vx-card>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.use(axios)
export default {
    data() {
        return {
            actividades: [],
            dialog: false,
            bodyText: 'Lorem Ipsum',
            show: true
        }
    },
    mounted() {
        this.getArea();
    },
    methods: {
        handleShow(show) {
            alert(`show: ${show}`)
        },
        getArea() {
            let me = this;
            axios.get('http://localhost:8000/api/infocontenido', {

                })
                .then(function (response) {
                    me.actividades = response.data;
                    console.log(me.actividades);
                })
                .catch(function (error) {})
        },
        evaluar(url) {
            this.$router.push({
                path: "/virtual/" + url,
            });
        }

    },
}
</script>
