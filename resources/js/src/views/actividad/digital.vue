<template>
<div>
    <iframe id="t0_iframe" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" style="color:white; display: block; width: 100%; height: 100%; margin-left: auto; margin-right: auto; padding: 0px; top: 0px; position: absolute; left: 0px;" v-bind:src="'https://sistemaeducativo.edisa.ec/carpeta_actividades/'+url"></iframe>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
export default {
    data() {
        return {
            url: '',
            idlibro: '',
            popupActive: false,
            actividades: []
        }
    },
    methods: {
        veractividad(url,id){
            localStorage.url = url;
            localStorage.idactividad = id;
            this.$router.go('/actividad/digital');
        }
    },
    mounted() {
        this.url = localStorage.getItem('url')
        console.log(localStorage.getItem('url'))
    },
}
</script>
