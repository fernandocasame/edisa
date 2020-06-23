/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '',
            component: () =>
                import ('@/layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/',
                    name: 'page-login',
                    component: () =>
                        import ('@/views/pages/Login.vue')
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () =>
                        import ('@/views/pages/Error404.vue')
                },
            ]
        },

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '/home',
            component: () =>
                import ('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/home',
                    name: 'home',
                    component: () =>
                        import ('./views/Home.vue')
                },
                {
                    path: '/home/areas',
                    name: 'Areas',
                    component: () =>
                        import ('./views/area/areas.vue')
                },
                {
                    path: '/home/areas/nueva',
                    name: 'nuevaAreas',
                    component: () =>
                        import ('./views/area/nuevaArea.vue')
                },
                {
                    path: '/home/areas/editar/:id',
                    name: 'editarAreas',
                    component: () =>
                        import ('./views/area/nuevaArea.vue')
                },
                {
                    path: '/home/asignaturas',
                    name: 'Asignatura',
                    component: () =>
                        import ('./views/asignatura/asignaturas.vue')
                },
                {
                    path: '/home/asignaturas/nueva',
                    name: 'nuevaAsignatura',
                    component: () =>
                        import ('./views/asignatura/nuevaAsignatura.vue')
                },
                {
                    path: '/home/asignaturas/editar/:id',
                    name: 'editarAsignatura',
                    component: () =>
                        import ('./views/asignatura/nuevaAsignatura.vue')
                },
                {
                    path: '/home/tipo_contenido',
                    name: 'tipocontenido',
                    component: () =>
                        import ('./views/tipo_contenido/tipocontenido.vue')
                },
                {
                    path: '/home/tipo_contenido/nuevo',
                    name: 'tipocontenidoNuevo',
                    component: () =>
                        import ('./views/tipo_contenido/nuevoTipocontenido.vue')
                },
                {
                    path: '/home/tipo_contenido/editar/:id',
                    name: 'tipocontenidoEditar',
                    component: () =>
                        import ('./views/tipo_contenido/nuevoTipocontenido.vue')
                },
                {
                    path: '/home/contenido',
                    name: 'contenido',
                    component: () =>
                        import ('./views/contenido/contenido.vue')
                },
                {
                    path: '/home/contenido/nuevo',
                    name: 'contenidoNuevo',
                    component: () =>
                        import ('./views/contenido/contenido.vue')
                },
                {
                    path: '/home/instituciones',
                    name: 'Instituciones',
                    component: () =>
                        import ('./views/Instituciones.vue')
                },
                {
                    path: '/home/docentes',
                    name: 'Docentes',
                    component: () =>
                        import ('./views/Docentes.vue')
                },
                {
                    path: '/home/estudiantes',
                    name: 'Estudiantes',
                    component: () =>
                        import ('./views/Estudiantes.vue')
                },
                {
                    path: '/home/libros',
                    name: 'Libros',
                    component: () =>
                        import ('./views/Libros.vue')
                },
                {
                    path: '/home/planificaciones',
                    name: 'Planificaciones',
                    component: () =>
                        import ('./views/Planificaciones.vue')
                },
                {
                    path: '/home/actividades',
                    name: 'Actividades',
                    component: () =>
                        import ('./views/Actividades.vue')
                },
                {
                    path: '/virtual/:url',
                    name: 'virutal',
                    component: () =>
                        import ('./views/virtual.vue')
                },
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================

        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router