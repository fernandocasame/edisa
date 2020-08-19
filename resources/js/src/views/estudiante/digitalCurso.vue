<template>
<div class="mt-5">
    <vs-tabs alignment="fixed">
        <vs-tab label="Tareas Pendientes">
            <v-pendiente></v-pendiente>
        </vs-tab>
        <vs-tab label="Tareas Realizadas">
            <v-realizadas></v-realizadas>
        </vs-tab>
    </vs-tabs>
</div>
</template>

<script>
import pendiente from './tareasp'
import realizadas from './tareasr'
export default {
    components: {
        'v-pendiente':pendiente,
        'v-realizadas':realizadas,
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

