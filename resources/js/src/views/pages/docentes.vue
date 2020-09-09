<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
<div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
        <vx-card>
            <div slot="no-body" class="full-page-bg-color">
                <div class="vx-row no-gutter justify-center items-center">
                    <div class="vx-col sm:w-full md:w-full d-theme-dark-bg">
                        <div class="p-8 login-tabs-container">
                            <div class="vx-row mb-6">
                                <div class="vx-col sm:w-1/3 w-full">
                                    <span>Cedula</span>
                                </div>
                                <div class="vx-col sm:w-2/3 w-full">
                                    <vs-input class="w-full" v-model="docente.cedula" />
                                </div>
                            </div>
                            <div class="vx-row mb-6">
                                <div class="vx-col sm:w-1/3 w-full">
                                    <span>Nombres</span>
                                </div>
                                <div class="vx-col sm:w-2/3 w-full">
                                    <vs-input class="w-full" type="email" v-model="docente.nombre" />
                                </div>
                            </div>
                            <div class="vx-row mb-6">
                                <div class="vx-col sm:w-1/3 w-full">
                                    <span>Apellidos</span>
                                </div>
                                <div class="vx-col sm:w-2/3 w-full">
                                    <vs-input class="w-full" v-model="docente.apellido" />
                                </div>
                            </div>
                            <div class="vx-row mb-6">
                                <div class="vx-col sm:w-1/3 w-full">
                                    <span>Correo</span>
                                </div>
                                <div class="vx-col sm:w-2/3 w-full">
                                    <vs-input class="w-full" v-model="docente.email" />
                                </div>
                            </div>
                            <div class="vx-row mb-6">
                                <div class="vx-col sm:w-1/3 w-full">
                                    <span>Telefono</span>
                                </div>
                                <div class="vx-col sm:w-2/3 w-full">
                                    <vs-input class="w-full" v-model="docente.telefono" />
                                </div>
                            </div>
                            <div class="vx-row">
                                <div class="vx-col sm:w-2/3 w-full ml-auto">
                                    <vs-button class="mr-3 mb-2">Submit</vs-button>
                                    <vs-button color="warning" type="border" class="mb-2" @click="input1 = input2 = input3 = input4 = input4 = ''; check1 = false;">Reset</vs-button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </vx-card>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";
Vue.use(axios)
Vue.component("v-select", vSelect);
export default {
    data() {
        return {
            email: "",
            password: "",
            checkbox_remember_me: false,
        }
    },
    mounted() {

    },
    methods: {
        login() {
            let me = this;
            axios.post('https://sistemaeducativo.edisa.ec/api/login', {
                    email: me.email,
                    password: me.password
                })
                .then(function (response) {
                    console.log(response.data);
                    localStorage.token = response.data.token;
                    localStorage.setItem('usuario', JSON.stringify(response.data.datos));
                    me.$router.push('/home');
                })
                .catch(function (error) {
                    if (error.response.status == 401) {
                        me.errors = error.response.data;
                        me.estado = false;
                        console.log(me.errors.message);
                    }
                })
        }
    },
}
</script>

<style lang="scss">
#page-login {
    .social-login-buttons {
        .bg-facebook {
            background-color: #1551b1
        }

        .bg-twitter {
            background-color: #00aaff
        }

        .bg-google {
            background-color: #4285F4
        }

        .bg-github {
            background-color: #333
        }
    }
}
</style>
