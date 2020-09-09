(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tableexport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tableexport */ "./node_modules/tableexport/dist/js/tableexport.js");
/* harmony import */ var tableexport__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tableexport__WEBPACK_IMPORTED_MODULE_7__);
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
      fileName: null,
      formats: ['xlsx', 'csv', 'txt'],
      cellAutoWidth: true,
      selectedFormat: 'xlsx',
      headerTitle: ['codigo', 'libro', 'serie', 'anio', 'libro_idlibro'],
      headerVal: ['codigo', 'libro', 'serie', 'anio', 'libro_idlibro'],
      activePrompt: false,
      codigos: [],
      codigo: {
        codigo: '',
        libro: '',
        serie: '',
        anio: '',
        libro_idlibro: ''
      },
      codigosbuscar: [],
      codigobuscar: {
        codigo: '',
        libro: '',
        serie: '',
        anio: '',
        libro_idlibro: ''
      },
      series: [],
      serie: {
        id_serie: '',
        nombre_serie: '',
        longitud_numeros: '',
        longitud_letras: ''
      },
      libros_series: [],
      libro_serie: {
        id_serie: '',
        iniciales: '',
        nombre: '',
        year: '',
        version: '',
        boton: ''
      },
      libros: ['Naturales2-PLUS', 'Naturales8', 'Naturales10', 'La mano prohibida y otros relatos'],
      libro: {
        id: '',
        label: ''
      },
      editarActivo: false,
      codigoSelected: [],
      codigoBuscarSelected: [],
      asignaturaSelected: {
        id: '',
        label: ''
      },
      popupEditCodigo: false,
      usuario: [],
      docente: null,
      fecha_busqueda: null,
      letras: "BCDFGHJKMNPQRTVWXYZ",
      numeros: "0123456789",
      code: null,
      rand: null,
      popupActive: false,
      serieAsignada: 'Serie seleccionada',
      libroAsignado: '',
      idLibro: null,
      id_serie: null,
      iniciales: null,
      nombre: null,
      anio: null,
      version: null,
      cantidad: null,
      nombre_serie: '',
      longitud_numeros: '',
      longitud_letras: '',
      guardarActivo: '',
      exportarActivo: '',
      progressInterActivo: '',
      generarActivo: ' ',
      porcentaje: 0,
      tutorialBuscarActivo: false,
      colorx: '#2E84EE',
      textAlertCant: '',
      creador_codigo: null
    };
  },
  components: {
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_4___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://127.0.0.1:8000/api/series').then(function (res) {
      _this.series = res.data;
    }), this.usuario = JSON.parse(localStorage.getItem('usuario')); //this.creador_codigo = this.usuario[0].idusuario

    this.creador_codigo = 6625;
  },
  methods: {
    exportToExcel: function exportToExcel() {
      var _this2 = this;

      Promise.all(/*! import() */[__webpack_require__.e(44), __webpack_require__.e(45)]).then(__webpack_require__.bind(null, /*! @/vendor/Export2Excel */ "./resources/js/src/vendor/Export2Excel.js")).then(function (excel) {
        var list = _this2.codigoSelected;

        var data = _this2.formatJson(_this2.headerVal, list);

        excel.export_json_to_excel({
          header: _this2.headerTitle,
          data: data,
          filename: _this2.fileName,
          autoWidth: _this2.cellAutoWidth,
          bookType: _this2.selectedFormat
        });

        _this2.clearFields();

        _this2.exportarActivo = '';
        _this2.guardarActivo = '';
        _this2.generarActivo = ' ';
        _this2.textAlertCant = '';
        _this2.cantidad = '';
      });
    },
    formatJson: function formatJson(filterVal, jsonData) {
      return jsonData.map(function (v) {
        return filterVal.map(function (j) {
          return v[j];
        });
      });
    },
    clearFields: function clearFields() {
      this.fileName = '';
      this.cellAutoWidth = true;
      this.selectedFormat = 'xlsx';
    },
    buscarlibros: function buscarlibros() {
      var _this3 = this;

      this.porcentaje = 0;
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('#seccionCodigos').css('display', 'none');
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('#seccionBuscar').css('display', 'block');
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('#seccionGenerar').css('display', 'none');
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://127.0.0.1:8000/api/librosBuscar').then(function (res) {
        _this3.libros = res.data;
      });
    },
    verLibrosSeries: function verLibrosSeries(id, item) {
      var _this4 = this;

      this.longitud_numeros = item.longitud_numeros;
      this.longitud_letras = item.longitud_letras;
      this.nombre_serie = item.nombre_serie;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://127.0.0.1:8000/api/libros_series/' + id).then(function (res) {
        _this4.libros_series = res.data;
      });
    },
    generarCodigos: function generarCodigos(inicio, fin) {
      this.codigos = [];
      var idLibrog = this.idLibro;
      var id_serieg = this.id_serie;
      var inicialesg = this.iniciales;
      var nombreg = this.nombre;
      var aniog = this.anio;
      var versiong = this.version;

      for (var i = inicio; i < fin; i++) {
        this.code = this.nombre_serie.substr(0, 1).toUpperCase() + this.iniciales + this.anio + "-";

        for (var x = 0; x < this.longitud_letras; x++) {
          this.rand = Math.floor(Math.random() * this.letras.length);
          this.code += this.letras.substr(this.rand, 1);
        }

        for (var x = 0; x < this.longitud_numeros; x++) {
          this.rand = Math.floor(Math.random() * this.numeros.length);
          this.code += this.numeros.substr(this.rand, 1);
        }

        var versions = '';

        if (this.version != '') {
          versions = '-' + this.version;
        }

        this.codigos.push({
          codigo: this.code + versions,
          libro: nombreg,
          serie: id_serieg,
          anio: aniog,
          libro_idlibro: idLibrog
        });
      }

      this.guardarActivo = 1;
    },
    cambiarvista: function cambiarvista() {
      this.porcentaje = 0;
      this.exportarActivo = '';
      this.guardarActivo = '';
      this.generarActivo = ' ';
      this.cantidad = '';
      this.textAlertCant = '';
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('#seccionCodigos').css('display', 'block');
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('#seccionBuscar').css('display', 'none');
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('#seccionGenerar').css('display', 'none');
    },
    buscarCodigos: function buscarCodigos(libro, fecha_busqueda) {
      var _this5 = this;

      this.openLoadingColor();
      var data = libro.label + '*' + fecha_busqueda;

      if (libro != '' && libro != null && fecha_busqueda != null) {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://127.0.0.1:8000/api/codigosLibrosFecha/' + data).then(function (res) {
          _this5.openLoadingColor();

          _this5.codigosbuscar = res.data;

          if (res.data == 0) {
            _this5.$vs.notify({
              text: 'No existen códigos creados para este libro. Puede probar con otra fecha.',
              color: 'warning',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            });
          }
        });
      } else {
        this.$vs.notify({
          text: 'Seleccione un libro y esciba una fecha aproximada para realizar la búsqueda.',
          color: 'warning',
          iconPack: 'feather',
          icon: 'icon-alert-circle'
        });
      }
    },
    openLoadingColor: function openLoadingColor(libro) {
      var _this6 = this;

      this.$vs.loading({
        color: '#1A76F2'
      });
      setTimeout(function () {
        _this6.$vs.loading.close();
      }, 2000);
    },
    verVistaBuscar: function verVistaBuscar() {
      this.codigos = [];
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('#seccionCodigos').css('display', 'none');
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('#seccionGenerar').css('display', 'block');
    },
    guardarCodigos: function guardarCodigos() {
      var _this7 = this;

      this.progressInterActivo = 1;
      var codigosEnviar = [];

      for (var i = 0; i < this.cantidad; i++) {
        codigosEnviar.push(this.codigos[i].codigo);
      }

      var formData = new FormData();
      formData.append("codigo", codigosEnviar);
      formData.append("serie", this.nombre_serie);
      formData.append("libro", this.nombre);
      formData.append("anio", this.anio);
      formData.append("idlibro", this.idLibro);
      formData.append("estado", 0);
      formData.append("idusuario", this.creador_codigo);
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/api/codigosLibros', formData).then(function (res) {
        _this7.textAlertCant = 'Se han guardado con éxito: ' + res.data + ' códigos.';
        _this7.porcentaje = _this7.porcentaje + res.data;
        _this7.exportarActivo = 1;
        _this7.progressInterActivo = '';
        _this7.generarActivo = '';
        /*condicion para validar codigos repetidos
        while( this.porcentaje < this.cantidad ){
            codigosEnviar = [];
            generarCodigos(this.porcentaje, (this.cantidad+1));
            for( var i=(this.porcentaje+1); i<=this.cantidad; i++ ){
                codigosEnviar.push(this.codigos[i].codigo);
            }
             var formData = new FormData();
                formData.append("codigo", codigosEnviar);
                formData.append("serie", this.nombre_serie);
                formData.append("libro", this.nombre);
                formData.append("anio", this.anio);
                formData.append("idlibro", this.idLibro);
                formData.append("estado", 0);
                formData.append("idusuario", this.creador_codigo);
             axios.post('http://127.0.0.1:8000/api/codigosLibros', formData)
            .then(res => {
                this.textAlertCant = 'Se han guardado con éxito: '+res.data+' códigos.';
                this.porcentaje = this.porcentaje + res.data;
                this.exportarActivo = 1;
                this.progressInterActivo = '';
                this.generarActivo = '';
                 var formData = new FormData();
                    formData.append("id", this.creador_codigo);
                    formData.append("cantidad", this.porcentaje);
                    
                    var datos = this.creador_codigo +'*'+ this.porcentaje;
                     axios.get('http://127.0.0.1:8000/api/codigosLibrosExportados/' + datos).then(res => {
                        this.openLoadingColor();
                        this.codigos = res.data;
                        this.porcentaje = 0;
                        if( res.data == 0 ){
                            alert('Se ha producido un error al exportar. Comuníquese con el departamento de sistemas para exportar el Excel.');
                        }
                    })
                })
                .catch(function (error) {
                    alert(error);
                });
        }
        */
        //////////////////////////
        /////////////////esto debe ir dentro del while/////////////

        var formData = new FormData();
        formData.append("id", _this7.creador_codigo);
        formData.append("cantidad", _this7.porcentaje);
        var datos = _this7.creador_codigo + '*' + _this7.porcentaje;
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://127.0.0.1:8000/api/codigosLibrosExportados/' + datos).then(function (res) {
          _this7.openLoadingColor();

          _this7.codigos = res.data;
          _this7.porcentaje = 0;

          if (res.data == 0) {
            alert('Se ha producido un error al exportar. Comuníquese con el departamento de sistemas para exportar el Excel.');
          }
        }); ////////////////////////////////////////////////////////////////////
      }).catch(function (error) {
        alert(error);
      });
    },
    exportarProceso: function exportarProceso() {
      this.activePrompt = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .btn-default{\n  margin: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CodigosLibrosComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=template&id=5b23bd5e&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=template&id=5b23bd5e& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _c(
        "vs-popup",
        {
          staticStyle: { color: "white" },
          attrs: {
            "background-color-popup": _vm.colorx,
            title: "¿Cómo buscar?",
            active: _vm.tutorialBuscarActivo
          },
          on: {
            "update:active": function($event) {
              _vm.tutorialBuscarActivo = $event
            }
          }
        },
        [
          _c("p", [
            _vm._v(
              "Escoja un libro para ver sus códigos. También puede filtrar por fecha escribiendo la fecha completa o solo una parte de ella"
            ),
            _c("br"),
            _vm._v(" Ejemplos:")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v("\n            Fecha completa: 2020-08-24 "),
            _c("br"),
            _vm._v("\n            Solo año y mes: 2020-08"),
            _c("br"),
            _vm._v("\n            Año mes y hora: 2020-08-24 19:39\n        ")
          ])
        ]
      ),
      _vm._v(" "),
      _c("vs-breadcrumb", { staticClass: "mb-5" }, [
        _c(
          "li",
          [
            _c(
              "vs-button",
              {
                staticClass: "btn-volver",
                staticStyle: { "font-size": "14px" },
                attrs: { color: "primary", type: "line", size: "small" },
                on: {
                  click: function($event) {
                    return _vm.cambiarvista()
                  }
                }
              },
              [_vm._v("Elegir Libro")]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "vs-breadcrum--separator" }, [
              _vm._v("/")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c(
              "vs-button",
              {
                staticStyle: { "font-size": "14px" },
                attrs: { color: "primary", type: "line", size: "small" },
                on: {
                  click: function($event) {
                    _vm.buscarlibros()
                    _vm.tutorialBuscarActivo = true
                  }
                }
              },
              [_vm._v("Buscar")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "seccionCodigos" } },
        [
          _vm._l(_vm.series, function(item, indexitem) {
            return _c(
              "div",
              { key: indexitem, staticClass: "btn-group" },
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "m-1",
                    attrs: { color: "success", type: "gradient" },
                    on: {
                      click: function($event) {
                        _vm.serieAsignada = "Libros de " + item.nombre_serie
                        _vm.verLibrosSeries(item.id_serie, item)
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      { staticStyle: { "text-transform": "uppercase" } },
                      [_vm._v(_vm._s(item.nombre_serie))]
                    )
                  ]
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "vx-card",
            {
              staticClass: "mt-3 mb-3",
              attrs: {
                title: _vm.serieAsignada,
                "title-color": "primary",
                subtitle:
                  "Seleccione una seria para ver sus libros disponibles."
              }
            },
            _vm._l(_vm.libros_series, function(item, indexitem) {
              return _c(
                "div",
                { key: indexitem, staticClass: "btn-group" },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: { color: item.boton, type: "flat" },
                      on: {
                        click: function($event) {
                          _vm.idLibro = item.idLibro
                          _vm.id_serie = item.id_serie
                          _vm.iniciales = item.iniciales
                          _vm.nombre = item.nombre
                          _vm.anio = item.year
                          _vm.version = item.version
                          _vm.libroAsignado = item.nombre
                          _vm.verVistaBuscar()
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticStyle: { "text-transform": "uppercase" } },
                        [_vm._v(_vm._s(item.nombre))]
                      )
                    ]
                  )
                ],
                1
              )
            }),
            0
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { display: "none" }, attrs: { id: "seccionGenerar" } },
        [
          _c(
            "vx-card",
            {
              staticClass: "mt-5 mb-3",
              attrs: {
                title: "Generar Códigos para " + _vm.libroAsignado,
                "title-color": "primary",
                subtitle:
                  "El archivo excel generado DEBE SER ENVIADO PARA IMPRESIÓN, y al DEPARTAMENTO MULTIMEDIA"
              }
            },
            [
              _vm.porcentaje === 100 && _vm.guardarActivo != ""
                ? _c("vs-progress", {
                    attrs: {
                      height: 8,
                      percent: _vm.porcentaje,
                      color: "success"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.progressInterActivo != ""
                ? _c("vs-progress", {
                    attrs: { indeterminate: "", color: "primary" }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("b", { staticStyle: { color: "#0AD68C" } }, [
                _vm._v(_vm._s(_vm.textAlertCant))
              ]),
              _vm._v(" "),
              _c(
                "vs-table",
                {
                  attrs: {
                    multiple: "",
                    pagination: "",
                    "max-items": "25",
                    search: "",
                    data: _vm.codigos
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(ref) {
                        var data = ref.data
                        return _vm._l(data, function(tr, indextr) {
                          return _c(
                            "vs-tr",
                            { key: indextr, attrs: { data: tr } },
                            [
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].codigo } },
                                [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data[indextr].codigo) +
                                      "\n                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].libro } },
                                [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data[indextr].libro) +
                                      "\n                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].serie } },
                                [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data[indextr].serie) +
                                      "\n                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].anio } },
                                [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data[indextr].anio) +
                                      "\n                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                {
                                  attrs: { data: data[indextr].libro_idlibro }
                                },
                                [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data[indextr].libro_idlibro) +
                                      "\n                "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        })
                      }
                    }
                  ]),
                  model: {
                    value: _vm.codigoSelected,
                    callback: function($$v) {
                      _vm.codigoSelected = $$v
                    },
                    expression: "codigoSelected"
                  }
                },
                [
                  _c(
                    "template",
                    { slot: "header" },
                    [
                      _vm._v("\n                Cantidad:  \n                "),
                      _c(
                        "vx-tooltip",
                        {
                          attrs: {
                            color: "warning",
                            text:
                              "Ingrese la cantidad de códigos que desea generar (máximo 500)"
                          }
                        },
                        [
                          _c("vs-input", {
                            staticClass: "inputx mr-3",
                            staticStyle: {
                              width: "80px",
                              "text-align": "center"
                            },
                            model: {
                              value: _vm.cantidad,
                              callback: function($$v) {
                                _vm.cantidad = $$v
                              },
                              expression: "cantidad"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.cantidad <= 500 && _vm.generarActivo != ""
                        ? _c(
                            "vs-button",
                            {
                              staticStyle: { "font-size": "13px" },
                              attrs: { color: "primary", size: "small" },
                              on: {
                                click: function($event) {
                                  return _vm.generarCodigos(0, _vm.cantidad)
                                }
                              }
                            },
                            [_vm._v("Generar")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.cantidad > 500
                        ? _c(
                            "vs-button",
                            {
                              staticStyle: { "font-size": "13px" },
                              attrs: { color: "danger", size: "small" }
                            },
                            [_vm._v("Cantidad excede los 500")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.exportarActivo != ""
                        ? _c(
                            "vx-tooltip",
                            {
                              attrs: {
                                color: "warning",
                                text:
                                  "Antes de exportar seleccione los codigos deseados."
                              }
                            },
                            [
                              _c(
                                "vs-button",
                                {
                                  staticClass: "ml-5",
                                  staticStyle: { "font-size": "14px" },
                                  attrs: { color: "warning", size: "small" },
                                  on: {
                                    click: function($event) {
                                      return _vm.exportarProceso()
                                    }
                                  }
                                },
                                [_vm._v("Exportar")]
                              )
                            ],
                            1
                          )
                        : _vm.guardarActivo != "" &&
                          _vm.codigos[0].codigo != undefined
                        ? _c(
                            "vs-button",
                            {
                              staticClass: "ml-5",
                              staticStyle: { "font-size": "14px" },
                              attrs: { color: "success", size: "small" },
                              on: {
                                click: function($event) {
                                  _vm.guardarCodigos()
                                  _vm.guardarActivo = ""
                                }
                              }
                            },
                            [_vm._v("Guardar")]
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "thead" },
                    [
                      _c("vs-th", { attrs: { "sort-key": "codigo" } }, [
                        _vm._v("Código")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "libro" } }, [
                        _vm._v("Libro")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "serie" } }, [
                        _vm._v("Serie")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "anio" } }, [
                        _vm._v("Año")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "libro_idlibro" } }, [
                        _vm._v("Id")
                      ])
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "export-table",
          staticStyle: { display: "none" },
          attrs: { align: "center", id: "seccionBuscar" }
        },
        [
          _c("vs-breadcrumb", { staticClass: "mb-5" }, [
            _c(
              "li",
              [
                _c(
                  "div",
                  { staticClass: "mt-2", staticStyle: { "font-size": "13px" } },
                  [_vm._v("Seleccione un libro")]
                ),
                _vm._v(" "),
                _c("v-select", {
                  staticClass: "mr-2",
                  staticStyle: {
                    width: "250px",
                    "font-size": "15px",
                    "background-color": "white"
                  },
                  attrs: {
                    options: _vm.libros,
                    dir: _vm.$vs.rtl ? "rtl" : "ltr"
                  },
                  model: {
                    value: _vm.codigo.libro,
                    callback: function($$v) {
                      _vm.$set(_vm.codigo, "libro", $$v)
                    },
                    expression: "codigo.libro"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("li", [
              _c("br"),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "vs-breadcrum--separator",
                  staticStyle: { "font-size": "30px" }
                },
                [_vm._v("»")]
              )
            ]),
            _vm._v(" "),
            _c(
              "li",
              [
                _c(
                  "div",
                  { staticClass: "mt-2", staticStyle: { "font-size": "13px" } },
                  [_vm._v("Ej: 2020-08-24 19:05")]
                ),
                _vm._v(" "),
                _c("vs-input", {
                  staticClass: "mr-2",
                  model: {
                    value: _vm.fecha_busqueda,
                    callback: function($$v) {
                      _vm.fecha_busqueda = $$v
                    },
                    expression: "fecha_busqueda"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("br"),
                _vm._v(" "),
                _c("vs-button", {
                  staticClass: "mt-2",
                  attrs: {
                    radius: "",
                    color: "success",
                    type: "gradient",
                    "icon-pack": "feather",
                    icon: "icon-search"
                  },
                  on: {
                    click: function($event) {
                      return _vm.buscarCodigos(
                        _vm.codigo.libro,
                        _vm.fecha_busqueda
                      )
                    }
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "vs-table",
            {
              attrs: {
                multiple: "",
                pagination: "",
                "max-items": "25",
                search: "",
                data: _vm.codigosbuscar
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(tr, indextr) {
                      return _c(
                        "vs-tr",
                        { key: indextr, attrs: { data: tr } },
                        [
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].codigo } },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(data[indextr].codigo) +
                                  "\n                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].libro } },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(data[indextr].libro) +
                                  "\n                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].serie } },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(data[indextr].serie) +
                                  "\n                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: data[indextr].anio } }, [
                            _vm._v(
                              "\n                    " +
                                _vm._s(data[indextr].anio) +
                                "\n                "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].libro_idlibro } },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(data[indextr].libro_idlibro) +
                                  "\n                "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    })
                  }
                }
              ]),
              model: {
                value: _vm.codigoBuscarSelected,
                callback: function($$v) {
                  _vm.codigoBuscarSelected = $$v
                },
                expression: "codigoBuscarSelected"
              }
            },
            [
              _c(
                "template",
                { slot: "header" },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "mr-5",
                      staticStyle: { "font-size": "14px" },
                      attrs: { color: "warning", size: "small" },
                      on: {
                        click: function($event) {
                          _vm.activePrompt = true
                        }
                      }
                    },
                    [_vm._v("Exportar")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", { attrs: { "sort-key": "codigo" } }, [
                    _vm._v("Código")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "libro" } }, [
                    _vm._v("Libro")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "serie" } }, [
                    _vm._v("Serie")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "anio" } }, [
                    _vm._v("Año")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "libro_idlibro" } }, [
                    _vm._v("Id")
                  ])
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          staticClass: "export-options",
          attrs: {
            title: "Exportar a Excel",
            "accept-text": "Exportar",
            active: _vm.activePrompt
          },
          on: {
            cancle: _vm.clearFields,
            accept: _vm.exportToExcel,
            close: _vm.clearFields,
            "update:active": function($event) {
              _vm.activePrompt = $event
            }
          }
        },
        [
          _c(
            "vs-alert",
            {
              staticClass: "mb-3",
              attrs: {
                color: "warning",
                "icon-pack": "feather",
                icon: "icon-info"
              }
            },
            [
              _c("span", [
                _vm._v("Recuerde "),
                _c("b", [_vm._v("seleccionar")]),
                _vm._v(" los códigos que desea exportar.")
              ])
            ]
          ),
          _vm._v(" "),
          _c("vs-input", {
            staticClass: "w-full",
            attrs: { placeholder: "Ingrese el nombre del archivo" },
            model: {
              value: _vm.fileName,
              callback: function($$v) {
                _vm.fileName = $$v
              },
              expression: "fileName"
            }
          }),
          _vm._v(" "),
          _c("v-select", {
            staticClass: "my-4",
            attrs: { options: _vm.formats },
            model: {
              value: _vm.selectedFormat,
              callback: function($$v) {
                _vm.selectedFormat = $$v
              },
              expression: "selectedFormat"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "flex" })
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-popup", {
        attrs: { fullscreen: "", title: "Libros", active: _vm.popupActive },
        on: {
          "update:active": function($event) {
            _vm.popupActive = $event
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/codigos/CodigosLibrosComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/codigos/CodigosLibrosComponent.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CodigosLibrosComponent_vue_vue_type_template_id_5b23bd5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodigosLibrosComponent.vue?vue&type=template&id=5b23bd5e& */ "./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=template&id=5b23bd5e&");
/* harmony import */ var _CodigosLibrosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodigosLibrosComponent.vue?vue&type=script&lang=js& */ "./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CodigosLibrosComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodigosLibrosComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CodigosLibrosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CodigosLibrosComponent_vue_vue_type_template_id_5b23bd5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CodigosLibrosComponent_vue_vue_type_template_id_5b23bd5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/codigos/CodigosLibrosComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodigosLibrosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CodigosLibrosComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodigosLibrosComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodigosLibrosComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CodigosLibrosComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodigosLibrosComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodigosLibrosComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodigosLibrosComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodigosLibrosComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodigosLibrosComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=template&id=5b23bd5e&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=template&id=5b23bd5e& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodigosLibrosComponent_vue_vue_type_template_id_5b23bd5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CodigosLibrosComponent.vue?vue&type=template&id=5b23bd5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/codigos/CodigosLibrosComponent.vue?vue&type=template&id=5b23bd5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodigosLibrosComponent_vue_vue_type_template_id_5b23bd5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodigosLibrosComponent_vue_vue_type_template_id_5b23bd5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);