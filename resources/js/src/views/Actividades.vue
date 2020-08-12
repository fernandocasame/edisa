<template>
<!-- <vx-card fixed-height=true>
    <iframe id="t0_iframe" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" style="display: block; width: 100%; height: 100vh; margin-left: auto; margin-right: auto; padding: 0px; top: 0px; position: absolute; left: 0px;" v-bind:src="'http://69.64.46.74/edisa/public/actividades/condor/'"></iframe>
</vx-card> -->
<div id="demo-basic-card"> 
    <div class="vx-row">
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
Vue.use(axios)
export default {
    data() {
        return {
            actividades: []
        }
    },
    mounted() {
        this.getArea();
    },
    methods: {
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
		evaluar(url){
              this.$router.push({
                path: "/virtual/" + url,
            });
        }

    },
}
</script>
