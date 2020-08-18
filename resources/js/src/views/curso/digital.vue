<template>
<div class="mt-5">
    <vs-tabs alignment="fixed">
        <vs-tab label="Contenidos">
            <v-contenido></v-contenido>
        </vs-tab>
        <vs-tab label="Tareas">
            <v-tareas></v-tareas>
        </vs-tab>
        <vs-tab label="Alumnos">
            <v-alumnos></v-alumnos>
        </vs-tab>
    </vs-tabs>
</div>
</template>

<script>
import contenido from './contenido'
import tareas from './tareas'
import alumnos from './alumnos'
export default {
    components: {
        'v-contenido':contenido,
        'v-tareas':tareas,
        'v-alumnos':alumnos,
    },
    data() {
        return {
            isNavOpen: false,
        }
    },
    mounted() {
        this.wasSidebarOpen = this.$store.state.reduceButton
        this.$store.commit('TOGGLE_REDUCE_BUTTON', true)
    },
}
</script>

