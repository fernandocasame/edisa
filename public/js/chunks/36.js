(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/libro/Libros.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/libro/Libros.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(axios__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      actividades: []
    };
  },
  mounted: function mounted() {
    this.getLibro();
  },
  methods: {
    getLibro: function getLibro() {
      var me = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://sistemaeducativo.edisa.ec/api/libro', {}).then(function (response) {
        me.actividades = response.data;
        console.log(me.actividades);
      }).catch(function (error) {});
    },
    verlibro: function verlibro(url, idlibro) {
      localStorage.url = url;
      localStorage.idlibro = idlibro;
      this.$router.push('/libro/digital');
    },
    editarLibro: function editarLibro(idlibro) {
      this.$router.push('/editar/libro/' + idlibro);
      console.log(idlibro);
    },
    eliminarLibro: function eliminarLibro(idlibro) {
      var me = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("https://sistemaeducativo.edisa.ec/api/libro/" + idlibro).then(function (response) {
        me.getLibro();
      }).catch(function (error) {});
    },
    addactividad: function addactividad(idlibro) {
      localStorage.idlibro = idlibro;
      this.$router.push('/actividades');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/libro/Libros.vue?vue&type=template&id=0bfc10f0&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/libro/Libros.vue?vue&type=template&id=0bfc10f0& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "demo-basic-card" } },
    [
      _c("vs-button", { attrs: { type: "relief", to: "/nuevo/libro" } }, [
        _vm._v("Agregar Libro")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-row mt-4" },
        _vm._l(_vm.actividades, function(item, $index) {
          return _c(
            "div",
            { key: $index, staticClass: "vx-col w-1/2 md:w-1/3 xl:w-1/4 mt-3" },
            [
              _c("vx-card", { staticClass: "text-center" }, [
                _c("div", { attrs: { slot: "no-body" }, slot: "no-body" }, [
                  _c("img", {
                    staticClass: "responsive card-img-top",
                    attrs: {
                      src:
                        "https://sistemaeducativo.edisa.ec/carpeta_libros/" +
                        item.url +
                        "/portada.jpg",
                      alt: "content-img"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "mb-2" }, [
                  _vm._v(_vm._s(item.nombre))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-grey" }, [
                  _vm._v(_vm._s(item.detalle))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "flex flex-wrap mt-4" }, [
                  _c(
                    "div",
                    { staticClass: "w-1/4 ml-auto" },
                    [
                      _c("vs-button", {
                        attrs: {
                          radius: "",
                          color: "success",
                          type: "filled",
                          "icon-pack": "feather",
                          icon: "icon-plus"
                        },
                        on: {
                          click: function($event) {
                            return _vm.addactividad(item.idlibro)
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-1/4 ml-auto" },
                    [
                      _c("vs-button", {
                        attrs: {
                          radius: "",
                          color: "primary",
                          type: "filled",
                          "icon-pack": "feather",
                          icon: "icon-eye"
                        },
                        on: {
                          click: function($event) {
                            return _vm.verlibro(item.url, item.idlibro)
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-1/4 ml-auto" },
                    [
                      _c("vs-button", {
                        attrs: {
                          radius: "",
                          color: "warning",
                          type: "filled",
                          "icon-pack": "feather",
                          icon: "icon-edit"
                        },
                        on: {
                          click: function($event) {
                            return _vm.editarLibro(item.idlibro)
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-1/4 ml-auto" },
                    [
                      _c("vs-button", {
                        attrs: {
                          radius: "",
                          color: "danger",
                          type: "filled",
                          "icon-pack": "feather",
                          icon: "icon-trash"
                        },
                        on: {
                          click: function($event) {
                            return _vm.eliminarLibro(item.idlibro)
                          }
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ],
            1
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/libro/Libros.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/libro/Libros.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Libros_vue_vue_type_template_id_0bfc10f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Libros.vue?vue&type=template&id=0bfc10f0& */ "./resources/js/src/views/libro/Libros.vue?vue&type=template&id=0bfc10f0&");
/* harmony import */ var _Libros_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Libros.vue?vue&type=script&lang=js& */ "./resources/js/src/views/libro/Libros.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Libros_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Libros_vue_vue_type_template_id_0bfc10f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Libros_vue_vue_type_template_id_0bfc10f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/libro/Libros.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/libro/Libros.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/libro/Libros.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Libros_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Libros.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/libro/Libros.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Libros_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/libro/Libros.vue?vue&type=template&id=0bfc10f0&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/libro/Libros.vue?vue&type=template&id=0bfc10f0& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Libros_vue_vue_type_template_id_0bfc10f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Libros.vue?vue&type=template&id=0bfc10f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/libro/Libros.vue?vue&type=template&id=0bfc10f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Libros_vue_vue_type_template_id_0bfc10f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Libros_vue_vue_type_template_id_0bfc10f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);