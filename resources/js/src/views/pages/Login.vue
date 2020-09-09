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

                    <div class="vx-col hidden lg:block lg:w-1/2">
                        <img src="@assets/images/pages/login.png" alt="login" class="mx-auto">
                    </div>

                    <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                        <div class="p-8 login-tabs-container">

                            <div class="vx-card__title mb-4">
                                <h4 class="mb-4">EDISA</h4>
                                <p>Bienvenido de nuevo, inicie sesión en su cuenta.</p>
                            </div>

                            <div>
                                <vs-input name="email" icon-no-border icon="icon icon-user" icon-pack="feather" label-placeholder="Correo" v-model="email" class="w-full" />

                                <vs-input type="password" name="password" icon-no-border icon="icon icon-lock" icon-pack="feather" label-placeholder="Contraseña" v-model="password" class="w-full mt-6" />

                                <div class="flex flex-wrap justify-between my-5">
                                    <router-link to="">olvido su contraseña?</router-link>
                                </div>
                                <vs-button class="float-center w-full" @click="login()">Iniciar sesión</vs-button>
                                <vs-divider></vs-divider>
                                <vs-button class="float-center w-full" to="/registro/docentes">Registro Docentes</vs-button>
                                <vs-divider></vs-divider>
                                <vs-button class="float-center w-full" to="/registro/estudiantes">Registro Estudiantes</vs-button>
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
        if (!localStorage.token) {
            this.$router.push('/');
        } else {
            console.log(localStorage.token);
            this.$router.push('/home');
        }
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
