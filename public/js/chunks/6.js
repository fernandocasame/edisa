(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/grupo/nuevo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/grupo/nuevo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(axios__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      grupo: {},
      titulo: ''
    };
  },
  mounted: function mounted() {
    if (!this.$route.params.id) {
      this.titulo = "Nueva Grupo";
    } else {
      this.titulo = "Editar Grupo";
      this.getGrupo(this.$route.params.id);
    }
  },
  methods: {
    getGrupo: function getGrupo(idarea) {
      var me = this;
      console.log(idarea);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://localhost:8000/api/grupo/" + idarea).then(function (response) {
        console.log(response.data);
        me.grupo = response.data;
      }).catch(function (error) {});
    },
    guardar: function guardar(data) {
      var me = this;
      console.log(data);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("http://localhost:8000/api/grupo", data).then(function (response) {
        me.$router.push('/home/grupos');
      }).catch(function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/grupo/nuevo.vue?vue&type=template&id=5306e9f7&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/grupo/nuevo.vue?vue&type=template&id=5306e9f7& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("vx-card", { attrs: { title: _vm.titulo } }, [
    _c("div", { staticClass: "vx-col  w-full mb-base" }, [
      _c("form", { attrs: { enctype: "multipart/form-data" } }, [
        _c("div", { staticClass: "vx-row mb-6" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.grupo.idarea,
                expression: "grupo.idarea"
              }
            ],
            attrs: { type: "text", hidden: "" },
            domProps: { value: _vm.grupo.idarea },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.grupo, "idarea", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.grupo.fecha_create,
                expression: "grupo.fecha_create"
              }
            ],
            attrs: { type: "text", hidden: "" },
            domProps: { value: _vm.grupo.fecha_create },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.grupo, "fecha_create", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
            _c("span", [_vm._v("Nombre")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-2/3 w-full" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: {
                  type: "email",
                  "icon-pack": "feather",
                  "icon-no-border": ""
                },
                model: {
                  value: _vm.grupo.nombre,
                  callback: function($$v) {
                    _vm.$set(_vm.grupo, "nombre", $$v)
                  },
                  expression: "grupo.nombre"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mb-6" }, [
          _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
            _c("span", [_vm._v("Detalle")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col sm:w-2/3 w-full" },
            [
              _c("vs-input", {
                staticClass: "w-full",
                attrs: { "icon-no-border": "" },
                model: {
                  value: _vm.grupo.detalle,
                  callback: function($$v) {
                    _vm.$set(_vm.grupo, "detalle", $$v)
                  },
                  expression: "grupo.detalle"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col sm:w-1/2 w-full ml-auto" },
          [
            _c(
              "vs-button",
              {
                staticClass: "mb-2",
                attrs: { color: "success", type: "border" },
                on: {
                  click: function($event) {
                    return _vm.guardar(_vm.grupo)
                  }
                }
              },
              [_vm._v("Enviar")]
            ),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "mb-2",
                attrs: { color: "danger", type: "border", to: "/home/grupos" }
              },
              [_vm._v("Cancelar")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/grupo/nuevo.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/grupo/nuevo.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuevo_vue_vue_type_template_id_5306e9f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuevo.vue?vue&type=template&id=5306e9f7& */ "./resources/js/src/views/grupo/nuevo.vue?vue&type=template&id=5306e9f7&");
/* harmony import */ var _nuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nuevo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/grupo/nuevo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nuevo_vue_vue_type_template_id_5306e9f7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nuevo_vue_vue_type_template_id_5306e9f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/grupo/nuevo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/grupo/nuevo.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/grupo/nuevo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./nuevo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/grupo/nuevo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuevo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/grupo/nuevo.vue?vue&type=template&id=5306e9f7&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/grupo/nuevo.vue?vue&type=template&id=5306e9f7& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nuevo_vue_vue_type_template_id_5306e9f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./nuevo.vue?vue&type=template&id=5306e9f7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/grupo/nuevo.vue?vue&type=template&id=5306e9f7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nuevo_vue_vue_type_template_id_5306e9f7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nuevo_vue_vue_type_template_id_5306e9f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);