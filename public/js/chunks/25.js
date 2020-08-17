(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tipo_contenido/tipocontenido.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/tipo_contenido/tipocontenido.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
//
//
//
//


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(axios__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tipocontenido: []
    };
  },
  mounted: function mounted() {
    this.getContenido();
  },
  methods: {
    getContenido: function getContenido() {
      var me = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://sistemaeducativo.edisa.ec/api/tcontenido', {}).then(function (response) {
        me.tipocontenido = response.data;
        console.log(me.tipocontenido);
      }).catch(function (error) {});
    },
    getEditar: function getEditar(idtipo) {
      this.$router.push('/tipo_contenido/editar/' + idtipo);
      console.log(idtipo);
    },
    getEliminar: function getEliminar(idtipo) {
      var me = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete('https://sistemaeducativo.edisa.ec/api/tcontenido/' + idtipo).then(function (response) {
        me.getContenido();
      }).catch(function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tipo_contenido/tipocontenido.vue?vue&type=template&id=ff2daaa4&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/tipo_contenido/tipocontenido.vue?vue&type=template&id=ff2daaa4& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    { attrs: { title: "Tipo Contenido" } },
    [
      _c(
        "vs-button",
        {
          staticClass: "mr-4",
          attrs: {
            type: "border",
            color: "success",
            to: "/tipo_contenido/nuevo"
          }
        },
        [_vm._v("Agregar Nuevo")]
      ),
      _vm._v(" "),
      _c(
        "vs-table",
        {
          attrs: { data: _vm.tipocontenido },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return _vm._l(data, function(tr, indextr) {
                  return _c(
                    "vs-tr",
                    { key: indextr },
                    [
                      _c("vs-td", { attrs: { data: tr.nombre } }, [
                        _vm._v(
                          "\r\n                    " +
                            _vm._s(tr.nombre) +
                            "\r\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: tr.detalle } }, [
                        _vm._v(
                          "\r\n                    " +
                            _vm._s(tr.detalle) +
                            "\r\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: tr.fecha_create } }, [
                        _vm._v(
                          "\r\n                    " +
                            _vm._s(tr.fecha_create) +
                            "\r\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: tr.idarea } }, [
                        _c(
                          "div",
                          { staticClass: "flex" },
                          [
                            _c("vs-button", {
                              staticClass: "mr-2",
                              attrs: {
                                type: "border",
                                size: "small",
                                "icon-pack": "feather",
                                icon: "icon-edit",
                                color: "success"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.getEditar(tr.idtipo)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("vs-button", {
                              staticClass: "mr-2",
                              attrs: {
                                type: "border",
                                size: "small",
                                "icon-pack": "feather",
                                icon: "icon-trash",
                                color: "danger"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.getEliminar(tr.idtipo)
                                }
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                })
              }
            }
          ])
        },
        [
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", [_vm._v("Nombre")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Detalle")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Fecha de Creacion")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Acciones")])
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/tipo_contenido/tipocontenido.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/tipo_contenido/tipocontenido.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tipocontenido_vue_vue_type_template_id_ff2daaa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tipocontenido.vue?vue&type=template&id=ff2daaa4& */ "./resources/js/src/views/tipo_contenido/tipocontenido.vue?vue&type=template&id=ff2daaa4&");
/* harmony import */ var _tipocontenido_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipocontenido.vue?vue&type=script&lang=js& */ "./resources/js/src/views/tipo_contenido/tipocontenido.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tipocontenido_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tipocontenido_vue_vue_type_template_id_ff2daaa4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tipocontenido_vue_vue_type_template_id_ff2daaa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/tipo_contenido/tipocontenido.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/tipo_contenido/tipocontenido.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/tipo_contenido/tipocontenido.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tipocontenido_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tipocontenido.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tipo_contenido/tipocontenido.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tipocontenido_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/tipo_contenido/tipocontenido.vue?vue&type=template&id=ff2daaa4&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/tipo_contenido/tipocontenido.vue?vue&type=template&id=ff2daaa4& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tipocontenido_vue_vue_type_template_id_ff2daaa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tipocontenido.vue?vue&type=template&id=ff2daaa4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/tipo_contenido/tipocontenido.vue?vue&type=template&id=ff2daaa4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tipocontenido_vue_vue_type_template_id_ff2daaa4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tipocontenido_vue_vue_type_template_id_ff2daaa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);