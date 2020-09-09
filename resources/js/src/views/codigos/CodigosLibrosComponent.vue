<template>
    <div>
        
        <vs-popup :background-color-popup="colorx" title="¿Cómo buscar?" style="color: white;" :active.sync="tutorialBuscarActivo">
            <p>Escoja un libro para ver sus códigos. También puede filtrar por fecha escribiendo la fecha completa o solo una parte de ella<br> Ejemplos:</p>
            <p>
                Fecha completa: 2020-08-24 <br>
                Solo año y mes: 2020-08<br>
                Año mes y hora: 2020-08-24 19:39
            </p>
        </vs-popup>

        <vs-breadcrumb class="mb-5">
            <li>
                <vs-button color="primary" type="line" class="btn-volver" size="small" style="font-size: 14px;" @click="cambiarvista();">Elegir Libro</vs-button>
                <span class="vs-breadcrum--separator">/</span>
            </li>

            <li>
                <vs-button color="primary" type="line"  @click="buscarlibros(); tutorialBuscarActivo=true;" size="small" style="font-size: 14px;">Buscar</vs-button>
            </li>
        </vs-breadcrumb>


        <div id="seccionCodigos">
        <!------listado series---->
        <div class="btn-group" :key="indexitem" v-for="(item, indexitem) in series">
            <vs-button class="m-1" @click="serieAsignada = 'Libros de '+item.nombre_serie; verLibrosSeries(item.id_serie, item);" color="success" type="gradient">
                <span style="text-transform: uppercase;">{{ item.nombre_serie }}</span>
            </vs-button>
        </div>
        <!-----fin listado series---------------->
        
        <vx-card v-bind:title="serieAsignada" class="mt-3 mb-3" title-color="primary" subtitle="Seleccione una seria para ver sus libros disponibles.">
            <div class="btn-group" :key="indexitem" v-for="(item, indexitem) in libros_series">
                <vs-button v-bind:color="item.boton" @click="idLibro = item.idLibro; id_serie = item.id_serie; iniciales = item.iniciales; nombre = item.nombre; anio = item.year; version = item.version; libroAsignado=item.nombre; verVistaBuscar()" type="flat">
                    <span style="text-transform: uppercase;">{{ item.nombre }}</span>
                </vs-button>
            </div>
        </vx-card>

        </div>




        <div id="seccionGenerar" style="display: none;">        
            <vx-card v-bind:title="'Generar Códigos para ' + libroAsignado" class="mt-5 mb-3" title-color="primary" subtitle="El archivo excel generado DEBE SER ENVIADO PARA IMPRESIÓN, y al DEPARTAMENTO MULTIMEDIA">
            
            <vs-progress v-if="porcentaje === 100 && guardarActivo!=''" :height="8" :percent="porcentaje" color="success"></vs-progress>

            <vs-progress v-if="progressInterActivo != ''" indeterminate color="primary"></vs-progress>
            
            <b style="color: #0AD68C;">{{ textAlertCant }}</b>

            <vs-table multiple v-model="codigoSelected" pagination max-items="25" search :data="codigos">

                <template slot="header">
                    Cantidad:&nbsp;&nbsp;
                    <vx-tooltip color="warning" text="Ingrese la cantidad de códigos que desea generar (máximo 500)">
                        <vs-input class="inputx mr-3" style="width: 80px; text-align: center;" v-model="cantidad" />
                    </vx-tooltip>

                    <vs-button color="primary" size="small" style="font-size: 13px;" @click="generarCodigos(0, cantidad)" v-if="cantidad<=500 && generarActivo!=''">Generar</vs-button>

                    <vs-button color="danger" size="small" style="font-size: 13px;"  v-if="cantidad>500">Cantidad excede los 500</vs-button>

                    <vx-tooltip v-if="exportarActivo!=''" color="warning" text="Antes de exportar seleccione los codigos deseados.">
                        <vs-button color="warning" size="small" class="ml-5" style="font-size: 14px;" @click="exportarProceso()">Exportar</vs-button>
                    </vx-tooltip>

                    <vs-button v-else-if="guardarActivo!='' && codigos[0].codigo != undefined" color="success" size="small" class="ml-5" style="font-size: 14px;" @click="guardarCodigos(); guardarActivo = ''">Guardar</vs-button>

                </template>
                
                <template slot="thead">
                    <vs-th sort-key="codigo">Código</vs-th>
                    <vs-th sort-key="libro">Libro</vs-th>
                    <vs-th sort-key="serie">Serie</vs-th>
                    <vs-th sort-key="anio">Año</vs-th>
                    <vs-th sort-key="libro_idlibro">Id</vs-th>
                </template>

                <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].codigo">
                        {{ data[indextr].codigo }}
                    </vs-td>

                    <vs-td :data="data[indextr].libro">
                        {{ data[indextr].libro }}
                    </vs-td>

                    <vs-td :data="data[indextr].serie">
                        {{ data[indextr].serie }}
                    </vs-td>

                    <vs-td :data="data[indextr].anio">
                        {{ data[indextr].anio }}
                    </vs-td>

                    <vs-td :data="data[indextr].libro_idlibro">
                        {{ data[indextr].libro_idlibro }}
                    </vs-td>
                </vs-tr>
                </template>
            </vs-table>
            
            </vx-card>
        </div>




        <!--SECCION CODIGOS BUSCAR--->
        <div align="center" id="seccionBuscar" class="export-table" style="display: none;">
            
            <vs-breadcrumb class="mb-5">
                <li>
                    <div class="mt-2" style="font-size: 13px;">Seleccione un libro</div>
                    <!--<v-select class="mr-2" style="width: 250px; font-size: 15px; background-color: white;" :options="libros" v-model="codigo.libro" @input="buscarCodigos(codigo.libro, fecha_busqueda)" :dir="$vs.rtl ? 'rtl' : 'ltr'"/>-->
                    <v-select class="mr-2" style="width: 250px; font-size: 15px; background-color: white;" :options="libros" v-model="codigo.libro"  :dir="$vs.rtl ? 'rtl' : 'ltr'"/>
                </li>

                <li><br>
                    <span style="font-size: 30px;" class="vs-breadcrum--separator">»</span>
                </li>

                <li>
                    <div class="mt-2" style="font-size: 13px;">Ej: 2020-08-24 19:05</div>
                    <vs-input v-model="fecha_busqueda" class="mr-2"/>
                </li>
                <li><br>
                    <vs-button class="mt-2" radius color="success" type="gradient" icon-pack="feather" icon="icon-search" @click="buscarCodigos(codigo.libro, fecha_busqueda)"></vs-button>
                </li>
            </vs-breadcrumb>

            <vs-table multiple v-model="codigoBuscarSelected" pagination max-items="25" search :data="codigosbuscar">

                <template slot="header">
                    <vs-button color="warning" size="small" class="mr-5" style="font-size: 14px;" @click="activePrompt=true">Exportar</vs-button>

                    <!--<flat-pickr style="font-size: 12px;" v-model="fecha_busqueda" placeholder="Fecha Creación" @input="buscarCodigos(codigo.libro, fecha_busqueda)"/>-->
                    
                </template>
                
                <template slot="thead">
                    <vs-th sort-key="codigo">Código</vs-th>
                    <vs-th sort-key="libro">Libro</vs-th>
                    <vs-th sort-key="serie">Serie</vs-th>
                    <vs-th sort-key="anio">Año</vs-th>
                    <vs-th sort-key="libro_idlibro">Id</vs-th>
                </template>

                <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].codigo">
                        {{ data[indextr].codigo }}
                    </vs-td>

                    <vs-td :data="data[indextr].libro">
                        {{ data[indextr].libro }}
                    </vs-td>

                    <vs-td :data="data[indextr].serie">
                        {{ data[indextr].serie }}
                    </vs-td>

                    <vs-td :data="data[indextr].anio">
                        {{ data[indextr].anio }}
                    </vs-td>

                    <vs-td :data="data[indextr].libro_idlibro">
                        {{ data[indextr].libro_idlibro }}
                    </vs-td>
                </vs-tr>
                </template>
            </vs-table>
        </div>
    <!-----------fin tabla codigos buscar--------------->


        <!----modal exportar--------->
        <vs-prompt title="Exportar a Excel" class="export-options" @cancle="clearFields" @accept="exportToExcel" accept-text="Exportar" @close="clearFields" :active.sync="activePrompt">

            <vs-alert class="mb-3" color="warning" icon-pack="feather" icon="icon-info">
                <span>Recuerde <b>seleccionar</b> los códigos que desea exportar.</span>
            </vs-alert>

            <vs-input v-model="fileName" placeholder="Ingrese el nombre del archivo" class="w-full" />
            <v-select v-model="selectedFormat" :options="formats" class="my-4" />
            <div class="flex">
            <!--<span class="mr-4">Cell Auto Width:</span>
            <vs-switch v-model="cellAutoWidth">Cell Auto Width</vs-switch>-->
            </div>
        </vs-prompt>
        <!----fin modal exportar--------->



        <!----modal ver libros series--------->
        <vs-popup fullscreen title="Libros" :active.sync="popupActive">
            
        </vs-popup>
        <!----fin modal modal ver libros series--------->

    </div>

</template>

<style>
    .btn-default{
        margin: 5px;
    }
</style>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/js/all.min.js" integrity="sha512-M+hXwltZ3+0nFQJiVke7pqXY7VdtWW2jVG31zrml+eteTP7im25FdwtLhIBTWkaHRQyPrhO2uy8glLMHZzhFog==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
<script src="https://raw.githubusercontent.com/eligrey/FileSaver.js/master/dist/FileSaver.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/blob-polyfill/4.0.20200601/Blob.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xls/0.7.6/xls.core.min.js"></script>

<script>
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import Vue from 'vue'
    import axios from 'axios'
    import vSelect from 'vue-select'
    import moment from 'moment'
    import $ from 'jquery'
    import tableExport from 'tableexport'
    
    export default {
        data(){
            return {
                fileName: null,
                formats:['xlsx', 'csv', 'txt'],
                cellAutoWidth: true,
                selectedFormat: 'xlsx',
                headerTitle: ['codigo', 'libro', 'serie', 'anio', 'libro_idlibro'],
                headerVal: ['codigo', 'libro', 'serie', 'anio', 'libro_idlibro'],
                activePrompt: false,

                codigos: [],
                codigo: {codigo: '', libro: '', serie: '', anio: '', libro_idlibro: ''},

                codigosbuscar: [],
                codigobuscar: {codigo: '', libro: '', serie: '', anio: '', libro_idlibro: ''},

                series: [],
                serie: {id_serie: '', nombre_serie: '', longitud_numeros: '', longitud_letras: ''},

                libros_series: [],
                libro_serie: {id_serie: '', iniciales: '', nombre: '', year: '', version: '', boton: ''},
    
                libros: [
                    'Naturales2-PLUS',
                    'Naturales8',
                    'Naturales10',
                    'La mano prohibida y otros relatos',
                ],
                libro: {id: '', label: ''},

                editarActivo: false,

                codigoSelected: [],
                codigoBuscarSelected: [],

                asignaturaSelected: {id: '', label: ''},

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
                
                creador_codigo: null,

            }
        },
        components: {
            'v-select': vSelect,
            flatPickr
        },
        created(){
            axios.get('http://127.0.0.1:8000/api/series').then(res => {
                this.series = res.data;
            }),

            this.usuario = JSON.parse(localStorage.getItem('usuario'));
            //this.creador_codigo = this.usuario[0].idusuario
            this.creador_codigo = 6625;
        },
        methods: {
            exportToExcel () {
                import('@/vendor/Export2Excel').then(excel => {
                    const list = this.codigoSelected
                    const data = this.formatJson(this.headerVal, list)
                    excel.export_json_to_excel({
                    header: this.headerTitle,
                    data,
                    filename: this.fileName,
                    autoWidth: this.cellAutoWidth,
                    bookType: this.selectedFormat
                    })
                    this.clearFields()
                    this.exportarActivo = '';
                    this.guardarActivo = '';
                    this.generarActivo = ' ';
                    this.textAlertCant = '';
                    this.cantidad = ''; 
                })
            },
            formatJson (filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => {
                return v[j]
            }))
            },
            clearFields () {
                this.fileName = ''
                this.cellAutoWidth = true
                this.selectedFormat = 'xlsx'
            },
            buscarlibros(){
                this.porcentaje = 0;
                $('#seccionCodigos').css('display', 'none');
                $('#seccionBuscar').css('display', 'block');
                $('#seccionGenerar').css('display', 'none');

                axios.get('http://127.0.0.1:8000/api/librosBuscar').then(res => {
                    this.libros = res.data;
                })
            },
            verLibrosSeries(id, item){
                this.longitud_numeros = item.longitud_numeros
                this.longitud_letras = item.longitud_letras
                this.nombre_serie = item.nombre_serie

                axios.get('http://127.0.0.1:8000/api/libros_series/'+ id).then(res => {
                    this.libros_series = res.data;
                })
            },
            generarCodigos(inicio, fin){
                this.codigos = [];

                let idLibrog = this.idLibro;
                let id_serieg = this.id_serie;
                let inicialesg = this.iniciales;
                let nombreg = this.nombre;
                let aniog = this.anio;
                let versiong = this.version;


                for( var i=inicio; i<fin; i++ ){
                    this.code = this.nombre_serie.substr(0, 1).toUpperCase() + this.iniciales + this.anio + "-";

                    for (var x = 0; x < this.longitud_letras; x++) {
                        this.rand = Math.floor(Math.random() * this.letras.length);
                        this.code += this.letras.substr(this.rand, 1);
                    }
                    for (var x = 0; x < this.longitud_numeros; x++) {
                        this.rand = Math.floor(Math.random() * this.numeros.length);
                        this.code += this.numeros.substr(this.rand, 1);
                    }

                    var versions = ''
                    if( this.version != '' ){
                        versions = '-'+this.version
                    }

                    this.codigos.push({codigo: this.code + versions, libro: nombreg, serie: id_serieg, anio: aniog, libro_idlibro: idLibrog});
                }

                this.guardarActivo = 1;

            },
            cambiarvista(){
                this.porcentaje = 0;
                this.exportarActivo = '';
                this.guardarActivo = '';
                this.generarActivo = ' ';
                this.cantidad = ''; 
                this.textAlertCant = '';
                
                $('#seccionCodigos').css('display', 'block');
                $('#seccionBuscar').css('display', 'none');
                $('#seccionGenerar').css('display', 'none');
            },
            buscarCodigos(libro, fecha_busqueda){
                this.openLoadingColor();
                var data = libro.label+'*'+fecha_busqueda;
                
                if( libro != '' && libro != null && fecha_busqueda != null){
                    axios.get('http://127.0.0.1:8000/api/codigosLibrosFecha/' + data).then(res => {
                        this.openLoadingColor();
                        this.codigosbuscar = res.data;
                        if( res.data == 0 ){
                            this.$vs.notify({
                            text:'No existen códigos creados para este libro. Puede probar con otra fecha.',
                            color:'warning',
                            iconPack: 'feather',
                            icon:'icon-alert-circle'})
                        }
                    })
                }else{
                    this.$vs.notify({
                    text:'Seleccione un libro y esciba una fecha aproximada para realizar la búsqueda.',
                    color:'warning',
                    iconPack: 'feather',
                    icon:'icon-alert-circle'})
                }
            },
            openLoadingColor(libro) {
                this.$vs.loading({ color: '#1A76F2' })
                setTimeout(() => {
                    this.$vs.loading.close()
                }, 2000);
            },
            verVistaBuscar(){
                this.codigos = [];
                $('#seccionCodigos').css('display', 'none');
                $('#seccionGenerar').css('display', 'block');
            },
            guardarCodigos(){
                this.progressInterActivo = 1;
                var codigosEnviar = [];
                for( var i=0; i<this.cantidad; i++ ){
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
                    *///////////////////////////


    /////////////////esto debe ir dentro del while/////////////
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
////////////////////////////////////////////////////////////////////
                    
                    
                })
                .catch(function (error) {
                    alert(error);
                });

            },
            exportarProceso(){
                this.activePrompt=true
            }
            
        },
    }
</script>