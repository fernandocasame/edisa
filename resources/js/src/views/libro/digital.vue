<template>
<div>
    <iframe id="t0_iframe" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" style="color:white; display: block; width: 100%; height: 100%; margin-left: auto; margin-right: auto; padding: 0px; top: 0px; position: absolute; left: 0px;" v-bind:src="'http://localhost/actividades/'+url"></iframe>
    <vs-navbar v-model="activeItem" class="p-2">

        <div slot="title">
            <vs-navbar-title>
                <span style="color:white">Edisa</span>
            </vs-navbar-title>
        </div>
        <vs-navbar-item index="1">
            <a href="#" @click="popupActive=true" style="color:white">Actividades</a>
        </vs-navbar-item>
        <vs-navbar-item index="2">
            <a href="../libros" to="/libros" style="color:white">Libros</a>
        </vs-navbar-item>
    </vs-navbar>
    <vs-popup fullscreen title="Actividades" :active.sync="popupActive">
        <div class="vx-row mt-4">
            <div class="vx-col w-1/2 md:w-1/3 xl:w-1/4 mt-3" v-for="(item,$index) in actividades" v-bind:key="$index">
                <vx-card class="text-center">
                    <div slot="no-body">
                        <img :src="'/rocket.png'" alt="content-img" class="responsive card-img-top">
                    </div>
                    <h5 class="mb-2">{{item.nombre}}</h5>
                    <p class="text-grey">{{item.detalle}}</p>
                    <div class="flex flex-wrap mt-4">
                        <div class="w-1/4 ml-auto">
                            <vs-button radius color="primary" type="filled" @click="veractividad(item.url)" icon-pack="feather" icon="icon-eye"></vs-button>
                        </div>
                    </div>
                </vx-card>
            </div>
        </div>
    </vs-popup>
</div>
</template>

<script>
export default {
    data() {
        return {
            url: '',
            popupActive: false,
        }
    },
    methods: {

    },
    mounted() {
        this.url = localStorage.getItem('url')
        console.log(localStorage.getItem('url'))
    },
}
</script>
