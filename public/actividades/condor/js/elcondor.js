var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

var random10 = ['<td> <p class="fcenter">El pastor</p> </td> <td style="width: 20px"></td> <td align="center"> <div class="hvr-grow" data-anijs="if: click, do: flip animated"> <span class="1 enc1a"> <font color="#ffffff" size="5"><b>✓</b></font> </span> </div> </td>', '<td> <p class="fcenter">La comadreja</p> </td> <td style="width: 20px"></td> <td align="center"> <div class="hvr-grow" data-anijs="if: click, do: flip animated"> <span class="2 enc1a"> <font color="#ffffff" size="5"><b>✓</b></font> </span> </div> </td>', '<td> <p class="fcenter">La hija del pastor</p> </td> <td style="width: 20px"></td> <td align="center"> <div class="hvr-grow" data-anijs="if: click, do: flip animated"> <span class="3 enc1a"> <font color="#ffffff" size="5"><b>✓</b></font> </span> </div> </td>', '<td> <p class="fcenter">La guacamaya</p> </td> <td style="width: 20px"></td> <td align="center"> <div class="hvr-grow" data-anijs="if: click, do: flip animated"> <span class="4 enc1a"> <font color="#ffffff" size="5"><b>✓</b></font> </span> </div> </td>', '<td> <p class="fcenter">El cóndor</p> </td> <td style="width: 20px"></td> <td align="center"> <div class="hvr-grow" data-anijs="if: click, do: flip animated"> <span class="5 enc1a"> <font color="#ffffff" size="5"><b>✓</b></font> </span> </div> </td>', '<td> <p class="fcenter">La serpiente</p> </td> <td style="width: 20px"></td> <td align="center"> <div class="hvr-grow" data-anijs="if: click, do: flip animated"> <span class="6 enc1a"> <font color="#ffffff" size="5"><b>✓</b></font> </span> </div> </td>', '<td> <p class="fcenter">El picaflor</p> </td> <td style="width: 20px"></td> <td align="center"> <div class="hvr-grow" data-anijs="if: click, do: flip animated"> <span class="7 enc1a"> <font color="#ffffff" size="5"><b>✓</b></font> </span> </div> </td>']
var act010Txt = document.getElementsByClassName('act10class');

random10.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random10[i]);
}

var random11 = ['<td> <font size="5"><span class="20 enc2a">El pastor y su hija vivían en las llanuras.</span></font> </td>', '<td> <font size="5"><span class="21 enc2a">Un picaflor era amigo de los pastores.</span></font> </td>', '<td> <font size="5"><span class="22 enc2a">El pastor y su hija eran dueños de un gran rebaño.</span></font> </td>', '<td> <font size="5"><span class="23 enc2a">La joven tuvo un hijo.</span></font> </td>', '<td> <font size="5"><span class="24 enc2a">El picaflor le dio de comer al cóndor un asno muerto.</span></font> </td>']
var act011Txt = document.getElementsByClassName('act11class');

random11.sort(f_randomico);
for (i = 0; i < act011Txt.length; i++) {
    $('#' + act011Txt[i].id).html(random11[i]);
}

var random12 = ['<td class="scaja"> <p class="fuente2">Esta historia fabulosa de tradición oral cuenta la aventura de una joven y un cóndor.</p> </td> <td class="scaja"><select class="hvr-bounce-in random1 imaf2" id="sel0"></select></td>', '<td class="scaja"> <p class="fuente2">El nido del cóndor estaba en el filo de un precipicio.</p> </td> <td class="scaja"><select class="hvr-bounce-in random1 imaf2" id="sel1"></select></td>', '<td class="scaja"> <p class="fuente2">Los pastores eran dueños de un gran grupo de ovejas.</p> </td> <td class="scaja"><select class="hvr-bounce-in random1 imaf2" id="sel2"></select></td>', '<td class="scaja"> <p class="fuente2">La joven sentía tristeza por su padre ausente.</p> </td> <td class="scaja"><select class="hvr-bounce-in random1 imaf2" id="sel3"></select></td>', '<td class="scaja"> <p class="fuente2">El cóndor tuvo que aceptar la desaparición de su esposa e hijo.</p> </td> <td class="scaja"><select class="hvr-bounce-in random1 imaf2" id="sel4"></select></td>']
var act012Txt = document.getElementsByClassName('act12class');

random12.sort(f_randomico);
for (i = 0; i < act012Txt.length; i++) {
    $('#' + act012Txt[i].id).html(random12[i]);
}

var random13 = ['<td class="scaja"> <p class="fuente2">Cierto día llegó un joven bastante apuesto y bien vestido</p> </td> <td class="scaja"> <p class="fuente2"><b class="colorb">del que la muchacha quedó enamorada</b></p> </td> <td class="scaja"><select class="hvr-bounce-in random2 imaf2" id="sell0"></select></td>', '<td class="scaja"> <p class="fuente2"><b class="colorb">La chica accedió a la proposición del joven</b></p> </td> <td class="scaja"> <p class="fuente2">Se colocó frente a él para que la alzara.</p> </td> <td class="scaja"><select class="hvr-bounce-in random2 imaf2" id="sell1"></select></td>', '<td class="scaja"> <p class="fuente2">La joven sentía nostalgia por su padre</p> </td> <td class="scaja"> <p class="fuente2"><b class="colorb">Solicitaba al cóndor que la devolviera a su casa</b></p> </td> <td class="scaja"><select class="hvr-bounce-in random2 imaf2" id="sell2"></select></td>', '<td class="scaja"> <p class="fuente2"><b class="colorb">Llegó a visitarle el picaflor</b></p> </td> <td class="scaja"> <p class="fuente2">La muchacha decidió pedirle ayuda</p> </td> <td class="scaja"><select class="hvr-bounce-in random2 imaf2" id="sell3"></select></td>', '<td class="scaja"> <p class="fuente2"><b class="colorb">El picaflor aseguró al cóndor que su esposa y su bebé se habían convertido en sapos</b></p> </td> <td class="scaja"> <p class="fuente2">El cóndor tuvo que resignarse</p> </td> <td class="scaja"><select class="hvr-bounce-in random2 imaf2" id="sell4"></select></td>']
var act013Txt = document.getElementsByClassName('act13class');

random13.sort(f_randomico);
for (i = 0; i < act013Txt.length; i++) {
    $('#' + act013Txt[i].id).html(random13[i]);
}

var random14 = ['<font color="#0077c0" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">hermosa</div> </font>', '<font color="#0077c0" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">colibrí</div> </font>', '<font color="#0077c0" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">prendada</div> </font>', '<font color="#0077c0" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">solicitud</div> </font>', '<font color="#0077c0" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">hogar</div> </font>']
var act014Txt = document.getElementsByClassName('act14class');

random14.sort(f_randomico);
for (i = 0; i < act014Txt.length; i++) {
    $('#' + act014Txt[i].id).html(random14[i]);
}

var random15 = ['<div class="cajtabla" style="color: #ffffff"> linda </div> <div id="div0" class="caja4 form-control pintar2 c1" data-placeholder="Arrastra aquí"></div>', '<div class="cajtabla" style="color: #ffffff"> picaflor </div> <div id="div1" class="caja4 form-control pintar2 c1" data-placeholder="Arrastra aquí"></div>', '<div class="cajtabla" style="color: #ffffff"> enamorada </div> <div id="div2" class="caja4 form-control pintar2 c1" data-placeholder="Arrastra aquí"></div>', '<div class="cajtabla" style="color: #ffffff"> petición </div> <div id="div3" class="caja4 form-control pintar2 c1" data-placeholder="Arrastra aquí"></div>', '<div class="cajtabla" style="color: #ffffff"> casa </div> <div align="center" id="div4" class="caja4 form-control pintar2 c1" data-placeholder="Arrastra aquí"></div>']
var act015Txt = document.getElementsByClassName('act15class');

random15.sort(f_randomico);
for (i = 0; i < act015Txt.length; i++) {
    $('#' + act015Txt[i].id).html(random15[i]);
}

document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 2, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 2);
});

$(".enc1a").css('cursor', 'pointer');
$(".enc1a").click(function() {
    if ($(this).hasClass("seleccionCaja")) {
        $(this).removeClass("seleccionCaja");
    } else {
        $(this).addClass("seleccionCaja");
    }
});

$(".enc2a").addClass('hvr-grow-shadow');
$(".enc2a").css('cursor', 'pointer');
$(".enc2a").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta1() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0;

    if ($('.1').hasClass('seleccionCaja') == true) {
        nt1 = 1;
        $('.1').addClass('correcto');
    }

    if ($('.3').hasClass('seleccionCaja') == true) {
        nt2 = 1;
        $('.3').addClass('correcto');
    }

    if ($('.5').hasClass('seleccionCaja') == true) {
        nt3 = 1;
        $('.5').addClass('correcto');
    }

    if ($('.7').hasClass('seleccionCaja') == true) {
        nt4 = 1;
        $('.7').addClass('correcto');
    }

    if ($('.2').hasClass('seleccionCaja') == true) {
        nt5 = 1.35;
        $('.2').addClass('incorrecto');
    }

    if ($('.4').hasClass('seleccionCaja') == true) {
        nt6 = 1.35;
        $('.4').addClass('incorrecto');
    }

    if ($('.6').hasClass('seleccionCaja') == true) {
        nt7 = 1.35;
        $('.6').addClass('incorrecto');
    }

    ////////////////////////////////////////////


    var nt20 = 0,
        nt21 = 0,
        nt22 = 0,
        nt23 = 0,
        nt24 = 0;

    if ($('.20').hasClass('subrayar') == true) {
        nt20 = 1;
        $('.20').addClass('correcto');
    }

    if ($('.22').hasClass('subrayar') == true) {
        nt21 = 1;
        $('.22').addClass('correcto');
    }

    if ($('.21').hasClass('subrayar') == true) {
        nt22 = 0.70;
        $('.21').addClass('incorrecto');
    }

    if ($('.23').hasClass('subrayar') == true) {
        nt23 = 0.70;
        $('.23').addClass('incorrecto');
    }

    if ($('.24').hasClass('subrayar') == true) {
        nt24 = 0.70;
        $('.24').addClass('incorrecto');
    }

    ////////////////////////////////////////////

    $('.enc2a').off('click');
    var subtotal2 = parseFloat(nt20) + parseFloat(nt21) - parseFloat(nt22) - parseFloat(nt23) - parseFloat(nt24);

    $('.enc1a').off('click');
    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4) - parseFloat(nt5) - parseFloat(nt6) - parseFloat(nt7);

    var sumtotal = parseFloat(subtotal2) + parseFloat(subtotal);
    var totalfinal = (sumtotal * 3) / 6;

    if (totalfinal < 0) {
        totalfinal = 0;
        $('#pre1a').val(parseFloat(totalfinal).toFixed(2));
    } else {
        $('#pre1a').val(parseFloat(totalfinal).toFixed(2));
    }
}





var random1 = [
    '<option>REBAÑO</option>',
    '<option>RESIGNACIÓN</option>',
    '<option>MITO</option>',
    '<option>BARRANCO</option>',
    '<option>AÑORANZA</option>',
];
random1.sort(f_randomico);
$('.random1').html('<option>-Seleccione-</option>' + random1 + '');



function pregunta2() {

    var respact2 = ['MITO', 'BARRANCO', 'REBAÑO', 'AÑORANZA', 'RESIGNACIÓN'];
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
    var total = (cont * 1.25) / respact2.length;
    //var totin = ((sumtotal * 4) / 9).toFixed(2);

    if (total < 0) {
        total = 0;
        $('#pre2a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre2a').val(parseFloat(total).toFixed(2));
    }
}


var random2 = [
    '<option>CONSECUENTE</option>',
    '<option>ANTECEDENTE</option>',
];
random2.sort(f_randomico);
$('.random2').html('<option>-Seleccione-</option>' + random2 + '');



function pregunta3() {

    var respact2 = ['CONSECUENTE', 'ANTECEDENTE', 'CONSECUENTE', 'ANTECEDENTE', 'ANTECEDENTE'];
    var cont = 0;
    for (var i = 0; i < respact2.length; i++) {
        var res = $('#sell' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sell' + [i] + '').addClass('correctoar');
        } else {
            $('#sell' + [i] + '').addClass('incorrectoar');
        }
    }
    var total = (cont * 1.25) / respact2.length;
    //var totin = ((sumtotal * 4) / 9).toFixed(2);

    if (total < 0) {
        total = 0;
        $('#pre3a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre3a').val(parseFloat(total).toFixed(2));
    }
}


function pregunta4() {
    var respact2 = ['hermosa', 'colibrí', 'prendada', 'solicitud', 'hogar'];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#div' + [i] + '').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#div' + [i] + '').addClass('correctoar');
        } else {
            $('#div' + [i] + '').addClass('incorrectoar');
        }

    }
    var total = (cont * 2.5) / 5;
    $('#pre4a').val(parseFloat(total).toFixed(2));
}


function total() {

    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;
    var pre5a = document.getElementById('pre5a').value;

    if (pre5a == "") {
        alert("Calificar Pregunta de Soy el constructor de nidos");
        document.getElementById('pre5a').focus();
        $('#pre5a').addClass("alertaabierta");
    } else {

        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        var pre1a = document.getElementById('pre1a').value;
        var pre2a = document.getElementById('pre2a').value;
        var pre3a = document.getElementById('pre3a').value;
        var pre4a = document.getElementById('pre4a').value;
        var pre5a = document.getElementById('pre5a').value;


        cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a) + parseFloat(pre5a);
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
        $('.eliminarsubir').hide();
    }
}