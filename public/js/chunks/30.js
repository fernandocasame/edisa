(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/estudiante/agregarTarea.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/estudiante/agregarTarea.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_doc_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-doc-preview */ "./node_modules/vue-doc-preview/dist/vueDocPreview.umd.min.js");
/* harmony import */ var vue_doc_preview__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_doc_preview__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_8__);



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

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







vue__WEBPACK_IMPORTED_MODULE_5___default.a.use(axios__WEBPACK_IMPORTED_MODULE_6___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_7___default.a,
    VueDocPreview: vue_doc_preview__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  data: function data() {
    return {
      asignaturas: [],
      listaContenido: [],
      file: [],
      usuario: [],
      idasignatura: '',
      descripcion: '',
      dropzoneOptions: {
        url: './',
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> Click o arrastra un archivo aquí.",
        chunking: true,
        thumbnailWidth: 150,
        maxFilesize: 10.5,
        addRemoveLinks: true,
        headers: {
          "My-Awesome-Header": "header value"
        }
      }
    };
  },
  created: function created() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.usuario);
  },
  methods: {
    guardarFile: function guardarFile(file) {
      var me = this;
      me.file = file;
    },
    guardar: function () {
      var _guardar = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var me, formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                me = this;
                me.$vs.loading({
                  color: '#046AE7'
                });
                formData = new FormData();
                formData.append('archivo', me.file);
                formData.append('idusuario', me.usuario[0].idusuario);
                formData.append('descripcion', me.descripcion);
                formData.append('idtarea', localStorage.getItem('idtarea'));
                axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('https://sistemaeducativo.edisa.ec/api/respuesta', formData).then(function (response) {
                  me.file = '';
                  me.$refs.dropzone.removeAllFiles();
                  me.$vs.loading.close();
                  me.$router.push('/estudiante/curso/digital');
                }).catch(function (error) {
                  if (error.response.status == 422) {
                    me.errors = error.response.data.errors;
                    me.$vs.loading.close();
                  }
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function guardar() {
        return _guardar.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/estudiante/agregarTarea.vue?vue&type=template&id=0dbd1465&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/estudiante/agregarTarea.vue?vue&type=template&id=0dbd1465& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "vx-col w-full mt-4" },
    [
      _c(
        "vx-card",
        { attrs: { title: "Agregar Tarea", he: "" } },
        [
          _c("vue-dropzone", {
            ref: "dropzone",
            staticClass: "vx-card",
            attrs: { id: "drop1", options: _vm.dropzoneOptions },
            on: { "vdropzone-complete": _vm.guardarFile }
          }),
          _vm._v(" "),
          _c("vs-textarea", {
            staticClass: "mt-8",
            attrs: { label: "Descripción" },
            model: {
              value: _vm.descripcion,
              callback: function($$v) {
                _vm.descripcion = $$v
              },
              expression: "descripcion"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col sm:w-2/3 w-full ml-auto" },
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "mb-2",
                    attrs: { color: "success", type: "border" },
                    on: {
                      click: function($event) {
                        return _vm.guardar()
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
                    attrs: {
                      color: "danger",
                      type: "border",
                      to: "/estudiante/curso/digital"
                    }
                  },
                  [_vm._v("Cancelar")]
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/estudiante/agregarTarea.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/estudiante/agregarTarea.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _agregarTarea_vue_vue_type_template_id_0dbd1465___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregarTarea.vue?vue&type=template&id=0dbd1465& */ "./resources/js/src/views/estudiante/agregarTarea.vue?vue&type=template&id=0dbd1465&");
/* harmony import */ var _agregarTarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregarTarea.vue?vue&type=script&lang=js& */ "./resources/js/src/views/estudiante/agregarTarea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _agregarTarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _agregarTarea_vue_vue_type_template_id_0dbd1465___WEBPACK_IMPORTED_MODULE_0__["render"],
  _agregarTarea_vue_vue_type_template_id_0dbd1465___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/estudiante/agregarTarea.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/estudiante/agregarTarea.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/estudiante/agregarTarea.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarTarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./agregarTarea.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/estudiante/agregarTarea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarTarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/estudiante/agregarTarea.vue?vue&type=template&id=0dbd1465&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/estudiante/agregarTarea.vue?vue&type=template&id=0dbd1465& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarTarea_vue_vue_type_template_id_0dbd1465___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./agregarTarea.vue?vue&type=template&id=0dbd1465& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/estudiante/agregarTarea.vue?vue&type=template&id=0dbd1465&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarTarea_vue_vue_type_template_id_0dbd1465___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_agregarTarea_vue_vue_type_template_id_0dbd1465___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);