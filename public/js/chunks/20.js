(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/area/areas.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/area/areas.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var v_data_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-data-table */ "./node_modules/v-data-table/dist-module/main.js");
/* harmony import */ var v_data_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(v_data_table__WEBPACK_IMPORTED_MODULE_2__);
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
//
//
//
//



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(v_data_table__WEBPACK_IMPORTED_MODULE_2___default.a);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(axios__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      area: [],
      search: '',
      header: [{
        text: "Nombre",
        value: "nombre"
      }, {
        text: "Descripción",
        value: "descripcion"
      }]
    };
  },
  mounted: function mounted() {
    this.getArea();
  },
  methods: {
    getArea: function getArea() {
      var me = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:8000/api/area', {}).then(function (response) {
        me.area = response.data;
        console.log(me.area);
      }).catch(function (error) {});
    },
    getEditar: function getEditar(idarea) {
      this.$router.push('/home/areas/editar/' + idarea);
      console.log(idarea);
    },
    getEliminar: function getEliminar(idarea) {
      var me = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("http://localhost:8000/api/area/" + idarea).then(function (response) {
        me.getArea();
      }).catch(function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/area/areas.vue?vue&type=template&id=2be1520e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/area/areas.vue?vue&type=template&id=2be1520e& ***!
  \************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Areas" } },
    [
      _c(
        "vs-cold",
        [
          _c(
            "vs-button",
            {
              staticClass: "mr-2",
              attrs: {
                type: "border",
                color: "success",
                to: "/home/areas/nueva"
              }
            },
            [_vm._v("Agregar Nuevo")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("DataTable", {
        attrs: { headers: _vm.header, items: _vm.area, search: _vm.search }
      }),
      _vm._v(" "),
      _c(
        "vs-table",
        {
          attrs: { data: _vm.area },
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
                                  return _vm.getEditar(tr.idarea)
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
                                  return _vm.getEliminar(tr.idarea)
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

/***/ "./resources/js/src/views/area/areas.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/area/areas.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _areas_vue_vue_type_template_id_2be1520e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./areas.vue?vue&type=template&id=2be1520e& */ "./resources/js/src/views/area/areas.vue?vue&type=template&id=2be1520e&");
/* harmony import */ var _areas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./areas.vue?vue&type=script&lang=js& */ "./resources/js/src/views/area/areas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _areas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _areas_vue_vue_type_template_id_2be1520e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _areas_vue_vue_type_template_id_2be1520e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/area/areas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/area/areas.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/area/areas.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./areas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/area/areas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/area/areas.vue?vue&type=template&id=2be1520e&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/area/areas.vue?vue&type=template&id=2be1520e& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_areas_vue_vue_type_template_id_2be1520e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./areas.vue?vue&type=template&id=2be1520e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/area/areas.vue?vue&type=template&id=2be1520e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_areas_vue_vue_type_template_id_2be1520e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_areas_vue_vue_type_template_id_2be1520e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);