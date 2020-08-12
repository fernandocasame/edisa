(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/libro/digital.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/libro/digital.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      url: '',
      popupActive: false
    };
  },
  methods: {},
  mounted: function mounted() {
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
          src: "http://localhost/actividades/" + _vm.url
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
              [_vm._v("Libros")]
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
            { staticClass: "vx-row mt-4" },
            _vm._l(_vm.actividades, function(item, $index) {
              return _c(
                "div",
                {
                  key: $index,
                  staticClass: "vx-col w-1/2 md:w-1/3 xl:w-1/4 mt-3"
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
                                return _vm.veractividad(item.url)
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