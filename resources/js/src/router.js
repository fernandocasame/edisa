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
    routes: [{
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
                {
                    path: '/libro/digital',
                    name: 'digital',
                    component: () =>
                        import ('./views/libro/digital.vue')
                },
                {
                    path: '/actividad/digital',
                    name: 'digital',
                    component: () =>
                        import ('./views/actividad/digital.vue')
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
                    path: '/areas',
                    name: 'Areas',
                    component: () =>
                        import ('./views/area/areas.vue')
                },
                {
                    path: '/areas/nueva',
                    name: 'nuevaAreas',
                    component: () =>
                        import ('./views/area/nuevaArea.vue')
                },
                {
                    path: '/areas/editar/:id',
                    name: 'editarAreas',
                    component: () =>
                        import ('./views/area/nuevaArea.vue')
                },
                {
                    path: '/asignaturas',
                    name: 'Asignatura',
                    component: () =>
                        import ('./views/asignatura/asignaturas.vue')
                },
                {
                    path: '/asignaturas/nueva',
                    name: 'nuevaAsignatura',
                    component: () =>
                        import ('./views/asignatura/nuevaAsignatura.vue')
                },
                {
                    path: '/asignaturas/editar/:id',
                    name: 'editarAsignatura',
                    component: () =>
                        import ('./views/asignatura/nuevaAsignatura.vue')
                },
                {
                    path: '/tipo_contenido',
                    name: 'tipocontenido',
                    component: () =>
                        import ('./views/tipo_contenido/tipocontenido.vue')
                },
                {
                    path: '/tipo_contenido/nuevo',
                    name: 'tipocontenidoNuevo',
                    component: () =>
                        import ('./views/tipo_contenido/nuevoTipocontenido.vue')
                },
                {
                    path: '/tipo_contenido/editar/:id',
                    name: 'tipocontenidoEditar',
                    component: () =>
                        import ('./views/tipo_contenido/nuevoTipocontenido.vue')
                },
                {
                    path: '/contenido',
                    name: 'contenido',
                    component: () =>
                        import ('./views/contenido/contenido.vue')
                },
                {
                    path: '/contenido/nuevo',
                    name: 'contenidoNuevo',
                    component: () =>
                        import ('./views/contenido/contenido.vue')
                },
                {
                    path: '/instituciones',
                    name: 'Instituciones',
                    component: () =>
                        import ('./views/institucion/Instituciones.vue')
                },
                {
                    path: '/institucion/nueva',
                    name: 'nuevaInstituciones',
                    component: () =>
                        import ('./views/institucion/nueva.vue')
                },
                {
                    path: '/institucion/editar/:id',
                    name: 'editarInstituciones',
                    component: () =>
                        import ('./views/institucion/nueva.vue')
                },
                {
                    path: '/docentes',
                    name: 'Docentes',
                    component: () =>
                        import ('./views/docente/Docentes.vue')
                },
                {
                    path: '/docente/nuevo',
                    name: 'nuevaDocente',
                    component: () =>
                        import ('./views/docente/nuevo.vue')
                },
                {
                    path: '/docente/editar/:id',
                    name: 'editarDocente',
                    component: () =>
                        import ('./views/docente/nuevo.vue')
                },
                {
                    path: '/estudiantes',
                    name: 'Estudiantes',
                    component: () =>
                        import ('./views/estudiante/Estudiantes.vue')
                },
                {
                    path: '/estudiante/nuevo',
                    name: 'nuevaEstudiante',
                    component: () =>
                        import ('./views/estudiante/nuevo.vue')
                },
                {
                    path: '/estudiante/editar/:id',
                    name: 'editarEstudiante',
                    component: () =>
                        import ('./views/estudiante/nuevo.vue')
                },
                {
                    path: '/libros',
                    name: 'Libros',
                    component: () =>
                        import ('./views/libro/Libros.vue')
                },
                {
                    path: '/nuevo/libro',
                    name: 'NuevoLibro',
                    component: () =>
                        import ('./views/libro/nuevo.vue')
                },
                {
                    path: '/editar/libro/:id',
                    name: 'EditarLibro',
                    component: () =>
                        import ('./views/libro/nuevo.vue')
                },
                {
                    path: '/planificaciones',
                    name: 'Planificaciones',
                    component: () =>
                        import ('./views/Planificaciones.vue')
                },
                {
                    path: '/actividades',
                    name: 'Actividades',
                    component: () =>
                        import ('./views/actividad/Actividades.vue')
                },
                {
                    path: '/actividad/nueva',
                    name: 'ActividadNuevo',
                    component: () =>
                        import ('./views/actividad/nuevo.vue')
                },
                {
                    path: '/actividad/editar/:id',
                    name: 'ActividadEditar',
                    component: () =>
                        import ('./views/actividad/nuevo.vue')
                },
                {
                    path: '/grupos',
                    name: 'Grupos',
                    component: () =>
                        import ('./views/grupo/Grupos.vue')
                },
                {
                    path: '/grupos/nuevo',
                    name: 'nuevaGrupos',
                    component: () =>
                        import ('./views/grupo/nuevo.vue')
                },
                {
                    path: '/grupos/editar/:id',
                    name: 'editarGrupos',
                    component: () =>
                        import ('./views/grupo/nuevo.vue')
                },
                {
                    path: '/cursos',
                    name: 'Curso',
                    component: () =>
                        import ('./views/curso/cursos.vue')
                },
                {
                    path: '/nuevo/curso',
                    name: 'nuevaoCurso',
                    component: () =>
                        import ('./views/curso/nuevo.vue')
                },
                {
                    path: '/editar/curso/:id',
                    name: 'editarCurso',
                    component: () =>
                        import ('./views/curso/nuevo.vue')
                },
                {
                    path: '/curso/digital',
                    name: 'DigitalCurso',
                    component: () =>
                        import ('./views/curso/digital.vue')
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