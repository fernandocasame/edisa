var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


var random16 = ['<div class=" m-1 p-sm-4"> <p>• El convento de San Diego está ubicado en el centro histórico de la ciudad de Quito.</p> <div align="center"> <div class="m-sm-2 border p-sm-2 d-inline-block act10class" id="act010Txt1"> </div> <div class="m-sm-2 border p-sm-2 d-inline-block act10class" id="act010Txt2"> </div> <div class="m-sm-2 border p-sm-2 d-inline-block act10class" id="act010Txt3"> </div> </div> </div>', '<div class=" m-1 p-sm-4"> <p>• El padre Almeida fue un monje del convento de San Diego.</p> <div align="center"> <div class="m-sm-2 border p-sm-2 d-inline-block act11class" id="act011Txt1"> </div> <div class="m-sm-2 border p-sm-2 d-inline-block act11class" id="act011Txt2"> </div> <div class="m-sm-2 border p-sm-2 d-inline-block act11class" id="act011Txt3"> </div> </div> </div>', '<div class=" m-1 p-sm-4"> <p>• Se dice que el padre Almeida es el autor del villancico “Dulce Jesús mío”</p> <div align="center"> <div class="m-sm-2 border p-sm-2 d-inline-block act12class" id="act012Txt1"> </div> <div class="m-sm-2 border p-sm-2 d-inline-block act12class" id="act012Txt2"> </div> <div class="m-sm-2 border p-sm-2 d-inline-block act12class" id="act012Txt3"> </div> </div> </div>', '<div class=" m-1 p-sm-4"> <p>• El padre Almeida se trepó sobre el crucifijo para salir por la ventana de su celda.</p> <div align="center"> <div class="m-sm-2 border p-sm-2 d-inline-block act13class" id="act013Txt1"> </div> <div class="m-sm-2 border p-sm-2 d-inline-block act13class" id="act013Txt2"> </div> <div class="m-sm-2 border p-sm-2 d-inline-block act13class" id="act013Txt3"> </div> </div> </div>', '<div class=" m-1 p-sm-4"> <p>• El padre Almeida vio su propio cortejo fúnebre.</p> <div align="center"> <div class="m-sm-2 border p-sm-2 d-inline-block act14class" id="act014Txt1"> </div> <div class="m-sm-2 border p-sm-2 d-inline-block act14class" id="act014Txt2"> </div> <div class="m-sm-2 border p-sm-2 d-inline-block act14class" id="act014Txt3"> </div> </div> </div>', '<div class=" m-1 p-sm-4"> <p>• La imagen de Jesús crucificado le habló al padre Almeida.</p> <div align="center"> <div class="m-sm-2 border p-sm-2 d-inline-block act15class" id="act015Txt1"> </div> <div class="m-sm-2 border p-sm-2 d-inline-block act15class" id="act015Txt2"> </div> <div class="m-sm-2 border p-sm-2 d-inline-block act15class" id="act015Txt3"> </div> </div> </div>']
var act016Txt = document.getElementsByClassName('act16class');

random16.sort(f_randomico);
for (i = 0; i < act016Txt.length; i++) {
    $('#' + act016Txt[i].id).html(random16[i]);
}

var random10 = ['<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="1 enc1a1"> <font size="5">REALES</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="1 enc1a2"> <font size="5">HISTÓRICO</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="1 enc1a3"> <font size="5">FANTASÍA</font> </div> </div> </div>']
var act010Txt = document.getElementsByClassName('act10class');

random10.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random10[i]);
}

var random11 = ['<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="2 enc2a1"> <font size="5">REALES</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="2 enc2a2"> <font size="5">HISTÓRICO</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="2 enc2a3"> <font size="5">FANTASÍA</font> </div> </div> </div>']
var act011Txt = document.getElementsByClassName('act11class');

random11.sort(f_randomico);
for (i = 0; i < act011Txt.length; i++) {
    $('#' + act011Txt[i].id).html(random11[i]);
}

var random12 = ['<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="3 enc3a1"> <font size="5">REALES</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="3 enc3a2"> <font size="5">HISTÓRICO</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="3 enc3a3"> <font size="5">FANTASÍA</font> </div> </div> </div>']
var act012Txt = document.getElementsByClassName('act12class');

random12.sort(f_randomico);
for (i = 0; i < act012Txt.length; i++) {
    $('#' + act012Txt[i].id).html(random12[i]);
}

var random13 = ['<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="4 enc4a1"> <font size="5">REALES</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="4 enc4a2"> <font size="5">HISTÓRICO</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="4 enc4a3"> <font size="5">FANTASÍA</font> </div> </div> </div>']
var act013Txt = document.getElementsByClassName('act13class');

random13.sort(f_randomico);
for (i = 0; i < act013Txt.length; i++) {
    $('#' + act013Txt[i].id).html(random13[i]);
}

var random14 = ['<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="5 enc5a1"> <font size="5">REALES</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="5 enc5a2"> <font size="5">HISTÓRICO</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="5 enc5a3"> <font size="5">FANTASÍA</font> </div> </div> </div>']
var act014Txt = document.getElementsByClassName('act14class');

random14.sort(f_randomico);
for (i = 0; i < act014Txt.length; i++) {
    $('#' + act014Txt[i].id).html(random14[i]);
}

var random15 = ['<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="6 enc6a1"> <font size="5">REALES</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="6 enc6a2"> <font size="5">HISTÓRICO</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="6 enc6a3"> <font size="5">FANTASÍA</font> </div> </div> </div>']
var act015Txt = document.getElementsByClassName('act15class');

random15.sort(f_randomico);
for (i = 0; i < act015Txt.length; i++) {
    $('#' + act015Txt[i].id).html(random15[i]);
}

var random17 = ['<td class="scaja"> <p class="fuente2">Se dice que una imagen de Cristo crucificado ayuda a orar.</p> </td> <td class="scaja"><select class="hvr-bounce-in random1 imaf2" id="sel0"></select></td>', '<td class="scaja"> <p class="fuente2">Es una ceremonia en honor de las personas fallecidas.</p> </td> <td class="scaja"><select class="hvr-bounce-in random1 imaf2" id="sel1"></select></td>', '<td class="scaja"> <p class="fuente2">Los fieles se protegen de la lluvia en los patios del edificio donde viven los religiosos.</p> </td> <td class="scaja"><select class="hvr-bounce-in random1 imaf2" id="sel2"></select></td>', '<td class="scaja"> <p class="fuente2">El perro que tiene mi hermana camina en silencio por la casa.</p> </td> <td class="scaja"><select class="hvr-bounce-in random1 imaf2" id="sel3"></select></td>', '<td class="scaja"> <p class="fuente2">Las dos correas que van unidas por un extremo a cada uno de los lados del bocado o freno y sirven para dirigir los movimientos del caballo de carreras.</p> </td> <td class="scaja"><select class="hvr-bounce-in random1 imaf2" id="sel4"></select></td>']
var act017Txt = document.getElementsByClassName('act17class');

random17.sort(f_randomico);
for (i = 0; i < act017Txt.length; i++) {
    $('#' + act017Txt[i].id).html(random17[i]);
}

var random19 = ['<font color="#0077c0" size="4"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar; if: mouseup, do: qcolor animated, to: .pintar">DE LUGAR</div> </font>', '<font color="#0077c0" size="4"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar; if: mouseup, do: qcolor animated, to: .pintar">DE TIEMPO</div> </font>']
var act019Txt = document.getElementsByClassName('act19class');

random19.sort(f_randomico);
for (i = 0; i < act019Txt.length; i++) {
    $('#' + act019Txt[i].id).html(random19[i]);
}

var random18 = ['<div class="row"> <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3 bordtable"> <p class="sfont">El padre Almeida iba hacia una pequeña ventana que daba a la calle.</p> </div> <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3 bordtable"> <p class="sfont">¿De dónde salía?</p> </div> <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 bordtable" align="center"> <div align="center" id="div0" data-placeholder="Arrastra aquí" class="caja2 form-control pintar c2"></div> </div> </div> <br>', '<div class="row"> <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3 bordtable"> <p class="sfont">Aparentemente, los planes del padre Almeida eran seguir ese ritmo de vida.</p> </div> <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3 bordtable"> <p class="sfont">¿Por cuánto tiempo sería?</p> </div> <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 bordtable" align="center"> <div align="center" id="div1" data-placeholder="Arrastra aquí" class="caja2 form-control pintar c2"></div> </div> </div> <br>', '<div class="row"> <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3 bordtable"> <p class="sfont">Se dice que el Cristo crucificado estaba cansado de ser usado como escalera.</p> </div> <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3 bordtable"> <p class="sfont">¿Dónde estaba el crucifijo?</p> </div> <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 bordtable" align="center"> <div align="center" id="div2" data-placeholder="Arrastra aquí" class="caja2 form-control pintar c2"></div> </div> </div><br> ', '<div class="row"> <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3 bordtable"> <p class="sfont">Luego de su juerga, el padre Almeida vio un cortejo fúnebre en la calle. Le pareció extraño a esa hora…</p> </div> <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-3 bordtable"> <p class="sfont">¿Qué hora del día sería?</p> </div> <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 bordtable" align="center"> <div align="center" id="div3" data-placeholder="Arrastra aquí" class="caja2 form-control pintar c2"></div> </div> </div> <br>']
var act018Txt = document.getElementsByClassName('act18class');

random18.sort(f_randomico);
for (i = 0; i < act018Txt.length; i++) {
    $('#' + act018Txt[i].id).html(random18[i]);
}

var random20 = ['<font color="#0077c0" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">compadre</div> </font>', '<font color="#0077c0" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">padrino</div> </font>', '<font color="#0077c0" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">apadrinar</div> </font>', '<font color="#0077c0" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">padrastro</div> </font>', '<font color="#0077c0" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">paternidad</div> </font>', '<font color="#0077c0" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">crucero</div> </font>', '<font color="#0077c0" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">crucifijo</div> </font>', '<font color="#0077c0" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">cruzar</div> </font>', '<font color="#0077c0" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">cruzado</div> </font>', '<font color="#0077c0" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">crucificar</div> </font>']
var act020Txt = document.getElementsByClassName('act20class');

random20.sort(f_randomico);
for (i = 0; i < act020Txt.length; i++) {
    $('#' + act020Txt[i].id).html(random20[i]);
}

var random21 = ['<div class="row"> <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">PADRE</div> <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12"> <div align="center" id="divv1" class="caja4 form-control pintar2 c1 p2im1" data-placeholder="Arrastra aquí"></div> </div> </div>', '<div class="row"> <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12">CRUZ</div> <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12"> <div align="center" id="divv2" class="caja4 form-control pintar2 c1 p2im2" data-placeholder="Arrastra aquí"></div> </div> </div>']
var act021Txt = document.getElementsByClassName('act21class');

random21.sort(f_randomico);
for (i = 0; i < act021Txt.length; i++) {
    $('#' + act021Txt[i].id).html(random21[i]);
}


$('.1').css('cursor', 'pointer');
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1a1':
            $('.enc1a1').addClass('encierreCaja');
            $('.enc1a2').removeClass('encierreCaja');
            $('.enc1a3').removeClass('encierreCaja');

            break;
        case '1 enc1a2':
            $('.enc1a2').addClass('encierreCaja');
            $('.enc1a1').removeClass('encierreCaja');
            $('.enc1a3').removeClass('encierreCaja');

            break;

        case '1 enc1a3':
            $('.enc1a3').addClass('encierreCaja');
            $('.enc1a1').removeClass('encierreCaja');
            $('.enc1a2').removeClass('encierreCaja');

            break;
    }
});

$('.2').css('cursor', 'pointer');
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 enc2a1':
            $('.enc2a1').addClass('encierreCaja');
            $('.enc2a2').removeClass('encierreCaja');
            $('.enc2a3').removeClass('encierreCaja');

            break;
        case '2 enc2a2':
            $('.enc2a2').addClass('encierreCaja');
            $('.enc2a1').removeClass('encierreCaja');
            $('.enc2a3').removeClass('encierreCaja');

            break;

        case '2 enc2a3':
            $('.enc2a3').addClass('encierreCaja');
            $('.enc2a1').removeClass('encierreCaja');
            $('.enc2a2').removeClass('encierreCaja');

            break;

    }
});

$('.3').css('cursor', 'pointer');
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 enc3a1':
            $('.enc3a1').addClass('encierreCaja');
            $('.enc3a2').removeClass('encierreCaja');
            $('.enc3a3').removeClass('encierreCaja');

            break;
        case '3 enc3a2':
            $('.enc3a2').addClass('encierreCaja');
            $('.enc3a1').removeClass('encierreCaja');
            $('.enc3a3').removeClass('encierreCaja');

            break;

        case '3 enc3a3':
            $('.enc3a3').addClass('encierreCaja');
            $('.enc3a1').removeClass('encierreCaja');
            $('.enc3a2').removeClass('encierreCaja');

            break;

    }
});

$('.4').css('cursor', 'pointer');
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 enc4a1':
            $('.enc4a1').addClass('encierreCaja');
            $('.enc4a2').removeClass('encierreCaja');
            $('.enc4a3').removeClass('encierreCaja');

            break;
        case '4 enc4a2':
            $('.enc4a2').addClass('encierreCaja');
            $('.enc4a1').removeClass('encierreCaja');
            $('.enc4a3').removeClass('encierreCaja');

            break;

        case '4 enc4a3':
            $('.enc4a3').addClass('encierreCaja');
            $('.enc4a1').removeClass('encierreCaja');
            $('.enc4a2').removeClass('encierreCaja');

            break;

    }
});

$('.5').css('cursor', 'pointer');
$('.5').click(function() {
    switch ($(this).attr('class')) {
        case '5 enc5a1':
            $('.enc5a1').addClass('encierreCaja');
            $('.enc5a2').removeClass('encierreCaja');
            $('.enc5a3').removeClass('encierreCaja');

            break;
        case '5 enc5a2':
            $('.enc5a2').addClass('encierreCaja');
            $('.enc5a1').removeClass('encierreCaja');
            $('.enc5a3').removeClass('encierreCaja');

            break;

        case '5 enc5a3':
            $('.enc5a3').addClass('encierreCaja');
            $('.enc5a1').removeClass('encierreCaja');
            $('.enc5a2').removeClass('encierreCaja');

            break;
    }
});

$('.6').css('cursor', 'pointer');
$('.6').click(function() {
    switch ($(this).attr('class')) {
        case '6 enc6a1':
            $('.enc6a1').addClass('encierreCaja');
            $('.enc6a2').removeClass('encierreCaja');
            $('.enc6a3').removeClass('encierreCaja');

            break;
        case '6 enc6a2':
            $('.enc6a2').addClass('encierreCaja');
            $('.enc6a1').removeClass('encierreCaja');
            $('.enc6a3').removeClass('encierreCaja');

            break;

        case '6 enc6a3':
            $('.enc6a3').addClass('encierreCaja');
            $('.enc6a1').removeClass('encierreCaja');
            $('.enc6a2').removeClass('encierreCaja');

            break;
    }
});


function pregunta1() {
    var nt1 = 0;
    var nt2 = 0;
    var nt3 = 0;
    var nt4 = 0;
    var nt5 = 0;
    var nt6 = 0;

    if ($('.enc1a1').hasClass('encierreCaja') == true) {
        nt1 = 1;
        $('.enc1a1').addClass('correcto');
    } else if ($('.enc1a2').hasClass('encierreCaja') == true) {
        $('.enc1a2').addClass('incorrecto');
    } else if ($('.enc1a3').hasClass('encierreCaja') == true) {
        $('.enc1a3').addClass('incorrecto');
    }

    if ($('.enc2a2').hasClass('encierreCaja') == true) {
        nt2 = 1;
        $('.enc2a2').addClass('correcto');
    } else if ($('.enc2a1').hasClass('encierreCaja') == true) {
        $('.enc2a1').addClass('incorrecto');
    } else if ($('.enc2a3').hasClass('encierreCaja') == true) {
        $('.enc2a3').addClass('incorrecto');
    }

    if ($('.enc3a2').hasClass('encierreCaja') == true) {
        nt3 = 1;
        $('.enc3a2').addClass('correcto');
    } else if ($('.enc3a1').hasClass('encierreCaja') == true) {
        $('.enc3a1').addClass('incorrecto');
    } else if ($('.enc3a3').hasClass('encierreCaja') == true) {
        $('.enc3a3').addClass('incorrecto');
    }

    if ($('.enc4a3').hasClass('encierreCaja') == true) {
        nt4 = 1;
        $('.enc4a3').addClass('correcto');
    } else if ($('.enc4a1').hasClass('encierreCaja') == true) {
        $('.enc4a1').addClass('incorrecto');
    } else if ($('.enc4a2').hasClass('encierreCaja') == true) {
        $('.enc4a2').addClass('incorrecto');
    }

    if ($('.enc5a3').hasClass('encierreCaja') == true) {
        nt5 = 1;
        $('.enc5a3').addClass('correcto');
    } else if ($('.enc5a1').hasClass('encierreCaja') == true) {
        $('.enc5a1').addClass('incorrecto');
    } else if ($('.enc5a2').hasClass('encierreCaja') == true) {
        $('.enc5a2').addClass('incorrecto');
    }

    if ($('.enc6a3').hasClass('encierreCaja') == true) {
        nt6 = 1;
        $('.enc6a3').addClass('correcto');
    } else if ($('.enc6a1').hasClass('encierreCaja') == true) {
        $('.enc6a1').addClass('incorrecto');
    } else if ($('.enc6a2').hasClass('encierreCaja') == true) {
        $('.enc6a2').addClass('incorrecto');
    }

    $('.1').off('click');
    $('.2').off('click');
    $('.3').off('click');
    $('.4').off('click');
    $('.5').off('click');
    $('.6').off('click');

    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4) + parseFloat(nt5) + parseFloat(nt6);
    var total = (subtotal * 3) / 6;
    if (total < 0) {
        total = 0;
        $('#pre1a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre1a').val(parseFloat(total).toFixed(2));
    }
}

var random1 = [
    '<option>CONVENTO</option>',
    '<option>SIGILOSAMENTE</option>',
    '<option>CRUCIFIJO</option>',
    '<option>RIENDAS</option>',
    '<option>FÚNEBRE</option>',
];
random1.sort(f_randomico);
$('.random1').html('<option>-Seleccione-</option>' + random1 + '');



function pregunta2() {

    var respact2 = ['CRUCIFIJO', 'FÚNEBRE', 'CONVENTO', 'SIGILOSAMENTE', 'RIENDAS'];
    var cont = 0;
    for (var i = 0; i < respact2.length; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sel' + [i] + '').addClass('correctoar');
        } else {
            $('#sel' + [i] + '').addClass('incorrectoar');
        }
    }
    var total = (cont * 2.5) / respact2.length;
    //var totin = ((sumtotal * 4) / 9).toFixed(2);

    if (total < 0) {
        total = 0;
        $('#pre2a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre2a').val(parseFloat(total).toFixed(2));
    }
}

function pregunta3() {
    var respact2 = ['DE LUGAR', 'DE TIEMPO', 'DE LUGAR', 'DE TIEMPO'];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#div' + [i] + '').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#div' + [i] + '').addClass('correctoar');
        } else {
            $('#div' + [i] + '').addClass('incorrectoar');
        }

    }
    var total = (cont * 2) / 4;
    $('#pre3a').val(parseFloat(total).toFixed(2));
}

function pregunta4() {
    var p1 = $('.p2im1 p').length;
    var buenas = 0,
        malas = 0,
        respr1 = 0,
        respr2 = 0;
    var cnt1 = [],
        cor1 = ['compadre',
            'padrino',
            'apadrinar',
            'padrastro',
            'paternidad',
        ];
    Array.from(document.querySelectorAll('.p2im1 div')).forEach(elemento => { cnt1.push(elemento.textContent) });
console.log(cnt1);

    for (var i = 0; i < cnt1.length; i++) {
        var res = cnt1[i];
        var rc = cor1.indexOf(res);
        if (cor1[rc] == res) {
            cont = cont + 1;
            cor1[rc] = 'A';
            document.querySelectorAll('.p2im1 div')[i].style.background = '#00e600';
            buenas++;
        } else {
            document.querySelectorAll('.p2im1 div')[i].style.background = '#ff6666';
            malas++;
        }
    }

    ///////////////////////////////////////////////////////
    var cnt2 = [],
        cor2 = ['crucero', 'crucifijo', 'cruzar', 'cruzado', 'crucificar'];
    Array.from(document.querySelectorAll('.p2im2 div')).forEach(elemento => { cnt2.push(elemento.textContent) });
    for (var i = 0; i < cnt2.length; i++) {
        var res2 = cnt2[i];
        var rc2 = cor2.indexOf(res2);
        if (cor2[rc2] == res2) {
            cont = cont + 1;
            cor2[rc2] = 'A';
            document.querySelectorAll('.p2im2 div')[i].style.background = '#00e600';
            buenas++;
        } else {
            document.querySelectorAll('.p2im2 div')[i].style.background = '#ff6666';
            malas++;
        }
    }
    ///////////////////////////////////////////////////////
    // var respr1 = (buenas * 10) / 16;
    // var respr2 = (malas * 10) / 16;

    var total = (buenas * 2.5) / 10;
    $('#pre4a').val(parseFloat(total).toFixed(2));
}

function total() {

    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;


    cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a);
    Calculo_nota();
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('textarea').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    $('div').attr("disabled", true);
    $('.nota-abierta').addClass('backnoabierta');
    $('.desaparece').filter(function() {
        return $.trim($(this).text()) === ''
    }).hide();
    $('.panel-collapse').show();
    $('.panelindividual').hide();
    $('select').attr("disabled", true);
}