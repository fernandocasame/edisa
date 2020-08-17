(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/libro/digital.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/libro/digital.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
      url: '',
      idlibro: '',
      popupActive: false,
      actividades: [],
      actividade: {},
      popupActive2: false
    };
  },
  methods: {
    getActividades: function getActividades() {
      var me = this;
      me.idlibro = localStorage.getItem('idlibro');
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://sistemaeducativo.edisa.ec/api/actividad?id=' + me.idlibro).then(function (response) {
        me.actividades = response.data;
        console.log(me.actividades);
      }).catch(function (error) {});
    },
    veractividad: function veractividad(url, id) {
      localStorage.url = url;
      localStorage.idactividad = id;
      window.open('/actividad/digital', '_blank');
    },
    compartir: function compartir(item) {
      var me = this;
      me.popupActive = false;
      me.popupActive2 = true;
      me.actividade = item;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://sistemaeducativo.edisa.ec/api/codigo').then(function (response) {
        me.codigo = response.data;
        me.actividade.codigo = me.codigo.codigo;
      }).catch(function (error) {});
    }
  },
  mounted: function mounted() {
    this.getActividades();
    this.url = localStorage.getItem('url');
    console.log(localStorage.getItem('url'));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/libro/digital.vue?vue&type=template&id=672a3c71&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/libro/digital.vue?vue&type=template&id=672a3c71& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    [
      _c("iframe", {
        staticStyle: {
          color: "white",
          display: "block",
          width: "100%",
          height: "100%",
          "margin-left": "auto",
          "margin-right": "auto",
          padding: "0px",
          top: "0px",
          position: "absolute",
          left: "0px"
        },
        attrs: {
          id: "t0_iframe",
          frameborder: "0",
          allowfullscreen: "true",
          webkitallowfullscreen: "true",
          mozallowfullscreen: "true",
          src: "https://sistemaeducativo.edisa.ec/carpeta_libros/" + _vm.url
        }
      }),
      _vm._v(" "),
      _c(
        "vs-navbar",
        {
          staticClass: "p-2",
          model: {
            value: _vm.activeItem,
            callback: function($$v) {
              _vm.activeItem = $$v
            },
            expression: "activeItem"
          }
        },
        [
          _c(
            "div",
            { attrs: { slot: "title" }, slot: "title" },
            [
              _c("vs-navbar-title", [
                _vm._v("\r\n                      "),
                _c("span", { staticStyle: { color: "white" } }, [
                  _vm._v("Edisa")
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("vs-navbar-item", { attrs: { index: "1" } }, [
            _c(
              "a",
              {
                staticStyle: { color: "white" },
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    _vm.popupActive = true
                  }
                }
              },
              [_vm._v("Actividades")]
            )
          ]),
          _vm._v(" "),
          _c("vs-navbar-item", { attrs: { index: "2" } }, [
            _c(
              "a",
              {
                staticStyle: { color: "white" },
                attrs: { href: "../libros", to: "/libros" }
              },
              [_vm._v("Salir")]
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            classContent: "popup-example",
            title: "Compartir Activdad",
            active: _vm.popupActive2
          },
          on: {
            "update:active": function($event) {
              _vm.popupActive2 = $event
            }
          }
        },
        [
          _c("div", { staticClass: "vx-row mb-6" }, [
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
                  model: {
                    value: _vm.actividade.nombre,
                    callback: function($$v) {
                      _vm.$set(_vm.actividade, "nombre", $$v)
                    },
                    expression: "actividade.nombre"
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
                  model: {
                    value: _vm.actividade.detalle,
                    callback: function($$v) {
                      _vm.$set(_vm.actividade, "detalle", $$v)
                    },
                    expression: "actividade.detalle"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-6" }, [
            _c("div", { staticClass: "vx-col sm:w-1/3 w-full" }, [
              _c("span", [_vm._v("Codigo Estudiante")])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col sm:w-2/3 w-full" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  model: {
                    value: _vm.actividade.codigo,
                    callback: function($$v) {
                      _vm.$set(_vm.actividade, "codigo", $$v)
                    },
                    expression: "actividade.codigo"
                  }
                })
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            fullscreen: "",
            title: "Actividades",
            active: _vm.popupActive
          },
          on: {
            "update:active": function($event) {
              _vm.popupActive = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "vx-row text-center" },
            _vm._l(_vm.actividades, function(item, $index) {
              return _c(
                "div",
                {
                  key: $index,
                  staticClass:
                    "vx-col w-full sm:w-1/6 md:w-1/6 lg:w-2/4 xl:w-4/4"
                },
                [
                  _c("vx-card", { staticClass: "text-center" }, [
                    _c("div", { attrs: { slot: "no-body" }, slot: "no-body" }, [
                      _c("img", {
                        staticClass: "responsive card-img-top",
                        attrs: { src: "/rocket.png", alt: "content-img" }
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
                        { staticClass: "w-1/3 ml-auto" },
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
                                return _vm.veractividad(
                                  item.url,
                                  item.idactividad
                                )
                              }
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "w-1/3 ml-auto" },
                        [
                          _c("vs-button", {
                            attrs: {
                              radius: "",
                              color: "warning",
                              type: "filled",
                              "icon-pack": "feather",
                              icon: "icon-copy"
                            },
                            on: {
                              click: function($event) {
                                return _vm.compartir(item)
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
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/libro/digital.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/libro/digital.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _digital_vue_vue_type_template_id_672a3c71___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digital.vue?vue&type=template&id=672a3c71& */ "./resources/js/src/views/libro/digital.vue?vue&type=template&id=672a3c71&");
/* harmony import */ var _digital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./digital.vue?vue&type=script&lang=js& */ "./resources/js/src/views/libro/digital.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _digital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _digital_vue_vue_type_template_id_672a3c71___WEBPACK_IMPORTED_MODULE_0__["render"],
  _digital_vue_vue_type_template_id_672a3c71___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/libro/digital.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/libro/digital.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/libro/digital.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_digital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./digital.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/libro/digital.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_digital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/libro/digital.vue?vue&type=template&id=672a3c71&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/libro/digital.vue?vue&type=template&id=672a3c71& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_digital_vue_vue_type_template_id_672a3c71___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./digital.vue?vue&type=template&id=672a3c71& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/libro/digital.vue?vue&type=template&id=672a3c71&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_digital_vue_vue_type_template_id_672a3c71___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_digital_vue_vue_type_template_id_672a3c71___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);