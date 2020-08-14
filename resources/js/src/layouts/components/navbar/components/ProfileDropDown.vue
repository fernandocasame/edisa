<template>
  <div class="the-navbar__user-meta flex items-center" v-if="usuario[0].nombre">

    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ usuario[0].nombre }} {{usuario[0].apellido}}</p>
      <small v-if="usuario[0].grupo_idgrupo == 1">Administrador</small>
      <small v-if="usuario[0].grupo_idgrupo == 2">Docente</small>
      <small v-if="usuario[0].grupo_idgrupo == 3">Estudiante</small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

        <div class="con-img ml-3">
            <img v-if="activeUserInfo.photoURL" key="onlineImg" :src="activeUserInfo.photoURL" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
        </div>

        <vs-dropdown-menu class="vx-navbar-dropdown">
            <ul style="min-width: 9rem">

                <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
                    <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
                    <span class="ml-2">Perfil</span>
                </li>

                <!-- <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Inbox</span>
          </li>

          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Tasks</span>
          </li>

          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Chat</span>
          </li>

          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Wish List</span>
          </li>

          <vs-divider class="m-1" /> -->

                <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="logout">
                    <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
                    <span class="ml-2">Salir</span>
                </li>
            </ul>
        </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
  data() {
        return {
            usuario: []
        }
    },
    computed: {
        activeUserInfo() {
            return this.$store.state.AppActiveUser
        }
    },
    created() {
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
        console.log(this.usuario);
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('usuario');
            this.$router.push('/');
        }
    }
}
</script>
