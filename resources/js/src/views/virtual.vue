<template>
<vx-card fixed-height=true>
    <iframe id="t0_iframe" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" style="display: block; width: 100%; height: 100vh; margin-left: auto; margin-right: auto; padding: 0px; top: 0px; position: absolute; left: 0px;" v-bind:src="'http://69.64.46.74/edisa/public/actividades/'+this.$route.params.url"></iframe>
</vx-card>
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
        }

    },
}
</script>
