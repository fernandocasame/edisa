var cont = 1,
        sopa = 0,
        calificacions = 2.5,
        calificacion = 10, //calificacion de todo el html
        preguntas = 4, //cantidad de preguntas
        cpregunta = (calificacion / preguntas), //valor de cada pregunta
        itemsC = 0, //items CORRECTOS de cada pregunta, asignar en cada pregunta
        itemsT = 18,
        itemsTs = 0,
        cor = 0,
        incor = 0;
    f_pregunta1();
    f_pregunta2();
    f_pregunta3();
    f_pregunta4();

    function f_pregunta1() {
        itemsC = 3; //total de items correctos de esta pregunta
        var opts0 = ['<li class="list-group-item"> <span class="hvr-grow grupo1 no">El viento soplaba con fuerza.</span></li>', '<li class="list-group-item"> <span class="hvr-grow grupo1 no">Una paloma tiró una hoja al agua.</span></li>', '<li class="list-group-item"> <span class="hvr-grow grupo1 si">Una hormiga estaba bebiendo a orillas de un río.</span></li>', '<li class="list-group-item"> <span class="hvr-grow grupo1 no">Nunca te olvidaré, dijo la hormiga.</span></li>'];
        var opts1 = ['<li class="list-group-item"> <span class="hvr-grow grupo2 no">Desde su hormiguero, la hormiga vio al cazador.</span></li>', '<li class="list-group-item"> <span class="hvr-grow grupo2 no">La paloma revoloteaba de acá para allá.</span></li>', '<li class="list-group-item"> <span class="hvr-grow grupo2 si">Llegó al bosque un cazador.</span></li>', '<li class="list-group-item"> <span class="hvr-grow grupo2 no">El cazador apuntó al ave con su escopeta.</span></li>'];
        var opts2 = ['<li class="list-group-item"> <span class="hvr-grow grupo3 no">El cazador soltó la escopeta.</span></li>', '<li class="list-group-item"> <span class="hvr-grow grupo3 si">La paloma agradeció a la hormiga.</span></li>', '<li class="list-group-item"> <span class="hvr-grow grupo3 no">La paloma se salvó.</span></li>', '<li class="list-group-item"> <span class="hvr-grow grupo3 no">La hormiga mordió al cazador.</span></li>'];
        var pregs1 = ['<div class="col-12 card m-1 p-2" id="pregunta1"> <div class="card-header"><b>• ¿Qué ocurre al inicio de la historia?</b></div> <ul class="list-group list-group-flush opts0"> </ul> </div>', '<div class="col-12 card m-1 p-2" id="pregunta2"> <div class="card-header"><b>• ¿Cuál de las siguientes acciones es el inicio del problema que tuvo la hormiga de la fábula?</b></div> <ul class="list-group list-group-flush opts1"> </ul> </div>', '<div class="col-12 card m-1 p-2" id="pregunta3"> <div class="card-header"><b>• Selecciona la acción con la que concluye la fábula</b></div> <ul class="list-group list-group-flush opts2"> </ul> </div>'];
        opts0.sort(f_randomico);
        opts1.sort(f_randomico);
        opts2.sort(f_randomico);
        pregs1.sort(f_randomico);
        $(".preguntas1").html(pregs1);
        $(".opts0").html(opts0);
        $(".opts1").html(opts1);
        $(".opts2").html(opts2);
        $(".grupo1").on("click", function() {
            $(".grupo1").each(function() {
                $(this).removeClass("encierreCaja");
            })
            $(this).addClass("encierreCaja");
        })
        $(".grupo2").on("click", function() {
            $(".grupo2").each(function() {
                $(this).removeClass("encierreCaja");
            })
            $(this).addClass("encierreCaja");
        })
        $(".grupo3").on("click", function() {
            $(".grupo3").each(function() {
                $(this).removeClass("encierreCaja");
            })
            $(this).addClass("encierreCaja");
        })

    }

    function f_pregunta2() {
        itemsC = 5;
        var pregs = ['<div class="form-group row p-2"> <div class="col-sm-2 col-xs-4"> <select class="form-control accion0 combo-opciones"> <option value="">Seleccione</option> </select> </div> <div class="col-sm-10 col-xs-8"> Las hormigas son capaces de llevar bastante peso sobre sus espaldas, cuando caminan hacia su hogar. </div> </div>', '<div class="form-group row p-2"> <div class="col-sm-2 col-xs-4"> <select class="form-control accion1 combo-opciones"> <option value="">Seleccione</option> </select> </div> <div class="col-sm-10 col-xs-8"> Cuando una persona se esconde, tiene la idea de no dejarse ver por los demás. </div> </div>', '<div class="form-group row p-2"> <div class="col-sm-2 col-xs-4"> <select class="form-control accion2 combo-opciones"> <option value="">Seleccione</option> </select> </div> <div class="col-sm-10 col-xs-8"> Vinces es una ciudad ubicada cerca del límite entre la tierra y el río Vinces. </div> </div>', '<div class="form-group row p-2"> <div class="col-sm-2 col-xs-4"> <select class="form-control accion3 combo-opciones"> <option value="">Seleccione</option> </select> </div> <div class="col-sm-10 col-xs-8"> Los cazadores usan un arma de fuego con cañones largos. </div> </div>', '<div class="form-group row p-2"> <div class="col-sm-2 col-xs-4"> <select class="form-control accion4 combo-opciones"> <option value="">Seleccione</option> </select> </div> <div class="col-sm-10 col-xs-8"> Algunos pájaros dan pequeñas vueltas sobre los árboles de fruta madura. </div> </div>'];
        var opts1 = ['<option value="res0">hormiguero</option>', '<option value="res1">intención</option>', '<option value="res2">orilla</option>', '<option value="res3">escopeta</option>', '<option value="res4">revolotear</option>'];
        pregs.sort(f_randomico);
        opts1.sort(f_randomico);
        $(".preguntas2").append(pregs);
        $(".combo-opciones").append(opts1);
    }

    function f_pregunta3() {
        var pregs3 = ['<tr> <td width="80"><input type="text" maxlength="1" class="form-control text-uppercase res0"></td> <td>No tienen el mismo tamaño</td> </tr>', '<tr> <td width="80"><input type="text" maxlength="1" class="form-control text-uppercase res1"></td> <td>Una de las dos especies no es un ave</td> </tr>', '<tr> <td width="80"><input type="text" maxlength="1" class="form-control text-uppercase res2"></td> <td>Los colores del plumaje no son similares</td> </tr>', '<tr> <td width="80"><input type="text" maxlength="1" class="form-control text-uppercase res3"></td> <td>Una de las dos especies se alimenta de huevos</td> </tr>', '<tr> <td width="80"><input type="text" maxlength="1" class="form-control text-uppercase res4"></td> <td>El tamaño del pico no es igual</td> </tr>']
        pregs3.sort(f_randomico);
        $(".preguntas3").html(pregs3);
    }

    function f_pregunta4() {
        var words = ['ATRAPAR', 'AYUDAR', 'CONFIAR', 'ARRIESGAR', 'PROTEGER'];
        var gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');
        $('#solve').click(function() { wordfindgame.solve(gamePuzzle, words); });
        var puzzle = wordfind.newPuzzle(words, { height: 20, width: 20, fillBlanks: false });
        wordfind.print(puzzle);
    }

    function totalf() {
        f_califica_preg1();
        f_califica_preg2();
        f_califica_preg3();
        f_califica_preg4();
        var pre1a = $("#pre1a").val() > 0 ? $("#pre1a").val() : 0;
        var pre2a = $("#pre2a").val() > 0 ? $("#pre2a").val() : 0;
        var pre3a = $("#pre3a").val() > 0 ? $("#pre3a").val() : 0;
        var pre4a = $("#pre4a").val()> 0 ? $("#pre4a").val() : 0;;
        total = (parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a)).toFixed(2);

        $("#txtNota").html(total);
        $('#bt_comprobar').prop("disabled", true);
        $('input').attr("disabled", true);
        $('.nota-abierta').addClass('backnoabierta');
        $('.enc1a').off('click');
        $('.desaparece').filter(function() {
            return $.trim($(this).text()) === ''
        }).hide();
    }

    function f_califica_preg1() {
        itemsC = 3; //items correctos de esta pregunta
        cor = 0;
        $(".grupo1, .grupo2, .grupo3").off();
        if ($(".opts0 .encierreCaja").hasClass("si")) {
            cor++;
            f_ok($(".opts0 .encierreCaja"));
        } else {
            incor++;
            f_no($(".opts0 .encierreCaja"));
        }
        if ($(".opts1 .encierreCaja").hasClass("si")) {
            cor++;
            f_ok($(".opts1 .encierreCaja"));
        } else {
            incor++;
            f_no($(".opts1 .encierreCaja"));
        }
        if ($(".opts2 .encierreCaja").hasClass("si")) {
            cor++;
            f_ok($(".opts2 .encierreCaja"));
        } else {
            incor++;
            f_no($(".opts2 .encierreCaja"));
        }
        f_calificacion("#pre1a");
    }

    function f_califica_preg2() {
        itemsC = 5; //items correctos de esta pregunta
        cor = 0;
        if ($(".accion0").val() == "res0") {
            cor++;
            f_ok($(".accion0"));
        } else {
            incor++;
            f_no($(".accion0"));
        }
        if ($(".accion1").val() == "res1") {
            cor++;
            f_ok($(".accion1"));
        } else {
            incor++;
            f_no($(".accion1"));
        }
        if ($(".accion2").val() == "res2") {
            cor++;
            f_ok($(".accion2"));
        } else {
            incor++;
            f_no($(".accion2"));
        }
        if ($(".accion3").val() == "res3") {
            cor++;
            f_ok($(".accion3"));
        } else {
            incor++;
            f_no($(".accion3"));
        }
        if ($(".accion4").val() == "res4") {
            cor++;
            f_ok($(".accion4"));
        } else {
            incor++;
            f_no($(".accion4"));
        }
        f_calificacion("#pre2a");
    }

    function f_califica_preg3() {
        itemsC = 5; //items correctos de esta pregunta
        cor = 0;
        if ($(".res0").val().toUpperCase() == "V") {
            cor++;
            f_ok($(".res0"));
        }else{
            incor++;
            f_no($(".res0"));
        }
        if ($(".res1").val().toUpperCase() == "F") {
            cor++;
            f_ok($(".res1"));
        }else{
            incor++;
            f_no($(".res1"));
        }
        if ($(".res2").val().toUpperCase() == "V") {
            cor++;
            f_ok($(".res2"));
        }else{
            incor++;
            f_no($(".res2"));
        }
        if ($(".res3").val().toUpperCase() == "F") {
            cor++;
            f_ok($(".res3"));
        }else{
            incor++;
            f_no($(".res3"));
        }
        if ($(".res4").val().toUpperCase() == "V") {
            cor++;
            f_ok($(".res4"));
        }else{
            incor++;
            f_no($(".res4"));
        }
        f_calificacion("#pre3a");
    }

    function f_califica_preg4() {
        itemsC = 5; //items correctos de esta pregunta
        cor = sopa;
        f_calificacion("#pre4a");
    }