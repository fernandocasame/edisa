(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Planificaciones.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Planificaciones.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modal_fullscreen_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modal-fullscreen-vue */ "./node_modules/modal-fullscreen-vue/dist/modal-fullscreen-vue.common.js");
/* harmony import */ var modal_fullscreen_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(modal_fullscreen_vue__WEBPACK_IMPORTED_MODULE_2__);
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



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(modal_fullscreen_vue__WEBPACK_IMPORTED_MODULE_2___default.a); // or custom use name

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use('my-custom-name', modal_fullscreen_vue__WEBPACK_IMPORTED_MODULE_2___default.a);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(axios__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      actividades: [],
      dialog: false,
      bodyText: 'Lorem Ipsum',
      show: true
    };
  },
  mounted: function mounted() {
    this.getArea();
  },
  methods: {
    handleShow: function handleShow(show) {
      alert("show: ".concat(show));
    },
    getArea: function getArea() {
      var me = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:8000/api/infocontenido', {}).then(function (response) {
        me.actividades = response.data;
        console.log(me.actividades);
      }).catch(function (error) {});
    },
    evaluar: function evaluar(url) {
      this.$router.push({
        path: "/home/virtual/" + url
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Planificaciones.vue?vue&type=template&id=033d31fa&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Planificaciones.vue?vue&type=template&id=033d31fa& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "demo-basic-card" } }, [
    _c(
      "div",
      { staticClass: "vx-row" },
      [
        _c(
          "button",
          {
            on: {
              click: function($event) {
                _vm.show = true
              }
            }
          },
          [_vm._v("Show")]
        ),
        _vm._v(" "),
        _c(
          "ModalFullScreen",
          { attrs: { show: _vm.show }, on: { show: _vm.handleShow } },
          [
            _c("template", { slot: "header" }, [
              _vm._v("\r\n                header\r\n            ")
            ]),
            _vm._v(" "),
            _c(
              "template",
              { slot: "body" },
              _vm._l(1000, function(n) {
                return _c("div", { key: n }, [
                  _vm._v(
                    "\r\n                    Body " +
                      _vm._s(n) +
                      "\r\n                "
                  )
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("template", { slot: "footer" }, [
              _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      _vm.show = false
                    }
                  }
                },
                [_vm._v("Close")]
              )
            ])
          ],
          2
        ),
        _vm._v(" "),
        _vm._l(_vm.actividades, function(item, $index) {
          return _c(
            "div",
            {
              key: $index,
              staticClass: "vx-col w-full sm:w-1/2 lg:w-1/3 mb-base"
            },
            [
              _c("vx-card", [
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
                _c(
                  "div",
                  { staticClass: "flex justify-between flex-wrap" },
                  [
                    _c(
                      "vs-button",
                      {
                        staticClass: "mt-4 mr-2 shadow-lg",
                        attrs: {
                          to: "/virtual/" + item.url,
                          type: "gradient",
                          color: "#7367F0",
                          "gradient-color-secondary": "#CE9FFC"
                        }
                      },
                      [_vm._v("Actividad")]
                    )
                  ],
                  1
                )
              ])
            ],
            1
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Planificaciones.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/Planificaciones.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Planificaciones_vue_vue_type_template_id_033d31fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Planificaciones.vue?vue&type=template&id=033d31fa& */ "./resources/js/src/views/Planificaciones.vue?vue&type=template&id=033d31fa&");
/* harmony import */ var _Planificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Planificaciones.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Planificaciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Planificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Planificaciones_vue_vue_type_template_id_033d31fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Planificaciones_vue_vue_type_template_id_033d31fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Planificaciones.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Planificaciones.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/Planificaciones.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Planificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Planificaciones.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Planificaciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Planificaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Planificaciones.vue?vue&type=template&id=033d31fa&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/Planificaciones.vue?vue&type=template&id=033d31fa& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Planificaciones_vue_vue_type_template_id_033d31fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Planificaciones.vue?vue&type=template&id=033d31fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Planificaciones.vue?vue&type=template&id=033d31fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Planificaciones_vue_vue_type_template_id_033d31fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Planificaciones_vue_vue_type_template_id_033d31fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);