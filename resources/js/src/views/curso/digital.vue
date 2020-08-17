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
            <div>Alumnos</div>
        </vs-tab>
        <vs-tab label="Calificaciones">
            <div>Calificaciones</div>
        </vs-tab>
    </vs-tabs>
</div>
</template>

<script>
import contenido from './contenido'
import tareas from './tareas'
export default {
    components: {
        'v-contenido':contenido,
        'v-tareas':tareas,
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

