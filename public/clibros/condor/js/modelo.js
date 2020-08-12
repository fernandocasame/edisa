var random5 = ['<div class="col-12 card m-1" id="pregunta1"> <div class="col-12" style="border-radius: 20px;overflow-x: auto;"> <div class="col-12"> <br> <table align="justify"> <tr style="box-shadow: 10px 5px 5px #dfd9ec"> <td> <p>• Los dos personajes de la fábula “El lobo y la grulla son</p> </td> <td> <div style="width: 20px"></div> </td> <td> <div align="justify" id="div0" data-placeholder="Arrastra aquí" class="caja2 form-control pintar c2"></div> </td> </tr> <tr style="height: 10px"></tr> </table> <br><br> </div> <div class="col-12"> <div class="row"> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act1class" id="act01Txt1" > </div> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act1class" id="act01Txt2"> </div> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act1class" id="act01Txt3"> </div> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act1class" id="act01Txt4"> </div> </div> <br><br> </div> </div> </div>', '<div class="col-12 card m-1" id="pregunta2"> <div class="col-12" style="border-radius: 20px;overflow-x: auto;"> <div class="col-12"> <br> <table align="justify"> <tr style="box-shadow: 10px 5px 5px #dfd9ec"> <td> <p>• La grulla representa a una persona</p> </td> <td> <div style="width: 20px"></div> </td> <td> <div align="justify" id="div1" data-placeholder="Arrastra aquí" class="caja2 form-control pintar2 c2"></div> </td> </tr> <tr style="height: 10px"></tr> </table> <br><br> </div> <div class="col-12"> <div class="row"> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act2class" id="act02Txt1" align="center" > </div> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act2class" id="act02Txt2" align="center" > </div> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act2class" id="act02Txt3" > </div> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act2class" id="act02Txt4" > </div> </div> <br><br> </div> </div> </div>', '<div class="col-12 card m-1" id="pregunta3"> <div class="col-12" style="border-radius: 20px;overflow-x: auto;"> <div class="col-12"> <br> <table align="justify"> <tr style="box-shadow: 10px 5px 5px #dfd9ec"> <td> <p>• El lobo representa a una persona</p> </td> <td> <div style="width: 20px"></div> </td> <td> <div align="justify" id="div2" data-placeholder="Arrastra aquí" class="caja2 form-control pintar3 c2"></div> </td> </tr> <tr style="height: 10px"></tr> </table> <br><br> </div> <div class="col-12"> <div class="row"> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act3class" id="act03Txt1" > </div> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act3class" id="act03Txt2" > </div> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act3class" id="act03Txt3" > </div> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act3class" id="act03Txt4" > </div> </div> <br><br> </div> </div> </div>', '<div class="col-12 card m-1" id="pregunta4"> <div class="col-12" style="border-radius: 20px;overflow-x: auto;"> <div class="col-12"> <br> <table align="justify"> <tr style="box-shadow: 10px 5px 5px #dfd9ec"> <td> <p>• Según lo que has estudiado, la fábula es un texto</p> </td> <td> <div style="width: 20px"></div> </td> <td> <div align="justify" id="div3" data-placeholder="Arrastra aquí" class="caja2 form-control pintar4 c2"></div> </td> </tr> <tr style="height: 10px"></tr> </table> <br><br> </div> <div class="col-12"> <div class="row"> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act4class" id="act04Txt1" > </div> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act4class" id="act04Txt2"> </div> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act4class" id="act04Txt3"> </div> <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 desaparece act4class" id="act04Txt4"> </div> </div> <br><br> </div> </div> </div> </div>']
var act05Txt = document.getElementsByClassName('act5class');

random5.sort(f_randomico);
for (i = 0; i < act05Txt.length; i++) {
    $('#' + act05Txt[i].id).html(random5[i]);
}

var random1 = ['<font color="#0077c0" size="5"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar; if: mouseup, do: qcolor animated, to: .pintar">personas</div> </font>', '<font color="#0077c0" size="5"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar; if: mouseup, do: qcolor animated, to: .pintar">objetos</div> </font>', '<font color="#0077c0" size="5"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar; if: mouseup, do: qcolor animated, to: .pintar">animales</div> </font>', '<font color="#0077c0" size="5"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar; if: mouseup, do: qcolor animated, to: .pintar">lugares</div> </font>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<font color="#0077c0" size="5"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">generosa</div> </font>', '<font color="#0077c0" size="5"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">egoísta</div> </font>', '<font color="#0077c0" size="5"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">confiada</div> </font>', '<font color="#0077c0" size="5"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar2; if: mouseup, do: qcolor animated, to: .pintar2">valiente</div> </font>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

var random3 = ['<font color="#0077c0" size="5"> <div class="drag3" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar3; if: mouseup, do: qcolor animated, to: .pintar3">honrada</div> </font>', '<font color="#0077c0" size="5"> <div class="drag3" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar3; if: mouseup, do: qcolor animated, to: .pintar3">incumplida</div> </font>', '<font color="#0077c0" size="5"> <div class="drag3" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar3; if: mouseup, do: qcolor animated, to: .pintar3">generosa</div> </font>', '<font color="#0077c0" size="5"> <div class="drag3" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar3; if: mouseup, do: qcolor animated, to: .pintar3">egoísta</div> </font>']
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

var random4 = ['<font color="#0077c0" size="5"> <div class="drag4" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar4; if: mouseup, do: qcolor animated, to: .pintar4">narrativo</div> </font>', '<font color="#0077c0" size="5"> <div class="drag4" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar4; if: mouseup, do: qcolor animated, to: .pintar4">descriptivo</div> </font>', '<font color="#0077c0" size="5"> <div class="drag4" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar4; if: mouseup, do: qcolor animated, to: .pintar4">informativo</div> </font>', '<font color="#0077c0" size="5"> <div class="drag4" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar4; if: mouseup, do: qcolor animated, to: .pintar4">instructivo</div> </font>']
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

var random10 = ['<div class=" m-1 p-sm-4"> <p>• Cuando una persona está comiendo, es posible que se ___________.</p> <div class="act6class m-sm-2 border p-sm-2 d-inline-block" id="act06Txt1"></div>  <div class="act6class m-sm-2 border p-sm-2 d-inline-block" id="act06Txt2"></div>  <div class="act6class m-sm-2 border p-sm-2 d-inline-block" id="act06Txt3"></div>   <div class="act6class m-sm-2 border p-sm-2 d-inline-block" id="act06Txt4"></div>  </div>', '<div class="m-1 p-sm-4"> <p>• Antes de sacar punta a un lápiz debemos ____________ dentro del sacapuntas.</p> <div class="act7class m-sm-2 border p-sm-2 d-inline-block" id="act07Txt1"></div> <div class="act7class m-sm-2 border p-sm-2 d-inline-block" id="act07Txt2"></div><div class="act7class m-sm-2 border p-sm-2 d-inline-block" id="act07Txt3"></div><div class="act7class m-sm-2 border p-sm-2 d-inline-block" id="act07Txt4"></div>', '<div class="m-1 p-sm-4"> <p>• Si vamos por un sendero estrecho y vemos un árbol caído se dice que está __________ en el camino.</p> <div class="act8class m-sm-2 border p-sm-2 d-inline-block" id="act08Txt1"></div><div class="act8class m-sm-2 border p-sm-2 d-inline-block" id="act08Txt"></div><div class="act8class m-sm-2 border p-sm-2 d-inline-block" id="act08Txt3"></div><div class="act8class m-sm-2 border p-sm-2 d-inline-block" id="act08Txt4"></div>', '<div class="m-1 p-sm-4"> <p>• Cuando un animal __________ a otro, se dice que se lo ha comido.</p> <div class="act9class m-sm-2 border p-sm-2 d-inline-block" id="act09Txt1"></div><div class="act9class m-sm-2 border p-sm-2 d-inline-block" id="act09Txt2"></div><div class="act9class m-sm-2 border p-sm-2 d-inline-block" id="act09Txt3"></div><div class="act9class m-sm-2 border p-sm-2 d-inline-block" id="act09Txt4"></div>']
var act010Txt = document.getElementsByClassName('act10class');

random10.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random10[i]);
}

var random6 = ['<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="1 enc1a1"> <font size="5">duerma</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="1 enc1a2"> <font size="5">atragante</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="1 enc1a3"> <font size="5">caiga</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="1 enc1a4"> <font size="5">bañe</font> </div> </div> </div>']
var act06Txt = document.getElementsByClassName('act6class');

random6.sort(f_randomico);
for (i = 0; i < act06Txt.length; i++) {
    $('#' + act06Txt[i].id).html(random6[i]);
}

var random7 = ['<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="2 enc2a1"> <font size="5">limpiarlo</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="2 enc2a2"> <font size="5">secarlo</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="2 enc2a3"> <font size="5">introducirlo</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="2 enc2a4"> <font size="5">sacudirlo</font> </div> </div> </div>']
var act07Txt = document.getElementsByClassName('act7class');

random7.sort(f_randomico);
for (i = 0; i < act07Txt.length; i++) {
    $('#' + act07Txt[i].id).html(random7[i]);
}

var random8 = ['<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="3 enc3a1"> <font size="5">acostado</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="3 enc3a2"> <font size="5">botado</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="3 enc3a3"> <font size="5">cortado</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="3 enc3a4"> <font size="5">atravesado</font> </div> </div> </div>']
var act08Txt = document.getElementsByClassName('act8class');

random8.sort(f_randomico);
for (i = 0; i < act08Txt.length; i++) {
    $('#' + act08Txt[i].id).html(random8[i]);
}

var random9 = ['<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="4 enc4a1"> <font size="5">mata</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="4 enc4a2"> <font size="5">cocina</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="4 enc4a3"> <font size="5">devora</font> </div> </div> </div>', '<div class="hvr-grow2"> <div data-anijs="if: click, do: bounceIn animated"> <div class="4 enc4a4"> <font size="5">entierra</font> </div> </div> </div>']
var act09Txt = document.getElementsByClassName('act9class');

random9.sort(f_randomico);
for (i = 0; i < act09Txt.length; i++) {
    $('#' + act09Txt[i].id).html(random9[i]);
}

var random13 = ['<div style="box-shadow: 0px 0px 20px #98BF61; border-radius: 35px 0px 35px 0px; background-color: #98BF61"> <p class="fuente2"><b style="color: #ffffff">Antes</b></p> </div> <div class="row"> <div class="col-12 desaparece act11class" id="act011Txt1" align="justify" > </div> <div class="col-12 desaparece act11class" id="act011Txt2" align="justify" > </div> <div class="col-12 desaparece act11class" id="act011Txt3" align="justify" > </div> </div> <br>', '<div style="box-shadow: 0px 0px 20px #98BF61; border-radius: 35px 0px 35px 0px; background-color: #98BF61"> <p class="fuente2"><b style="color: #ffffff">Después</b></p> </div> <div class="row"> <div class="col-12 desaparece act12class" id="act012Txt1" align="justify" > </div> <div class="col-12 desaparece act12class" id="act012Txt2" align="justify" > </div> </div> <br>']
var act013Txt = document.getElementsByClassName('act13class');

random13.sort(f_randomico);
for (i = 0; i < act013Txt.length; i++) {
    $('#' + act013Txt[i].id).html(random13[i]);
}

var random11 = ['<font color="#0077c0" size="4"> <div class="drag5" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar5; if: mouseup, do: qcolor animated, to: .pintar5">La grulla pidió que el lobo le pagara.</div> </font>', '<font color="#0077c0" size="4"> <div class="drag5" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar5; if: mouseup, do: qcolor animated, to: .pintar5">El lobo había matado y devorado otro animal.</div> </font>', '<font color="#0077c0" size="4"> <div class="drag5" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar5; if: mouseup, do: qcolor animated, to: .pintar5">El lobo corría por todas partes en busca de auxilio.</div> </font>']
var act011Txt = document.getElementsByClassName('act11class');

random11.sort(f_randomico);
for (i = 0; i < act011Txt.length; i++) {
    $('#' + act011Txt[i].id).html(random11[i]);
}

var random12 = ['<font color="#0077c0" size="4"> <div class="drag5" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar5; if: mouseup, do: qcolor animated, to: .pintar5">La grulla sacó el hueso atravesado</div> </font>', '<font color="#0077c0" size="4"> <div class="drag5" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated; if: mousedown, do: ui-state-active animated, to: .pintar5; if: mouseup, do: qcolor animated, to: .pintar5">El lobo ofreció a la grulla un pago por su ayuda.</div> </font>']
var act012Txt = document.getElementsByClassName('act12class');

random12.sort(f_randomico);
for (i = 0; i < act012Txt.length; i++) {
    $('#' + act012Txt[i].id).html(random12[i]);
}


var random14 = ['<div style="margin: 5px"> <p class="fuente2">Un lobo comía un hueso</p> <div align="justify" id="divv0" class="caja4 form-control pintar5" data-placeholder="Arrastra aquí (antes)"></div> </div>', '<div style="margin: 5px"> <p class="fuente2">Encontró en su camino a una grulla.</p> <div align="justify" id="divv1" class="caja4 form-control pintar5" data-placeholder="Arrastra aquí (después)"></div> </div>', '<div style="margin: 5px"> <p class="fuente2">El lobo pidió a la grulla que lo salvara.</p> <div align="justify" id="divv2" class="caja4 form-control pintar5" data-placeholder="Arrastra aquí (antes)"></div> </div>', '<div style="margin: 5px"> <p class="fuente2">La grulla introdujo su cabeza en la boca del lobo.</p> <div align="justify" id="divv3" class="caja4 form-control pintar5" data-placeholder="Arrastra aquí (después)"></div> </div>', '<div style="margin: 5px"> <p class="fuente2">El lobo le dijo: ¡Oye amiga! Agradéceme que no te como a ti también.</p> <div align="justify" id="divv4" class="caja4 form-control pintar5" data-placeholder="Arrastra aquí (antes)"></div> </div>']
var act014Txt = document.getElementsByClassName('act14class');

random14.sort(f_randomico);
for (i = 0; i < act014Txt.length; i++) {
    $('#' + act014Txt[i].id).html(random14[i]);
}

var random15 = ['Capturar', 'Colaborar', 'Creer', 'Aventurar', 'Cuidar']
var act015Txt = document.getElementsByClassName('act15class');

random15.sort(f_randomico);
for (i = 0; i < act015Txt.length; i++) {
    $('#' + act015Txt[i].id).html(random15[i]);
}


function pregunta1() {
    var respact2 = ['animales', 'confiada', 'incumplida', 'narrativo'];
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
    $('#pre1a').val(parseFloat(total).toFixed(2));
}


$('.1').css('cursor', 'pointer');
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1a1':
            $('.enc1a1').addClass('encierreCaja');
            $('.enc1a2').removeClass('encierreCaja');
            $('.enc1a3').removeClass('encierreCaja');
            $('.enc1a4').removeClass('encierreCaja');

            break;
        case '1 enc1a2':
            $('.enc1a2').addClass('encierreCaja');
            $('.enc1a1').removeClass('encierreCaja');
            $('.enc1a3').removeClass('encierreCaja');
            $('.enc1a4').removeClass('encierreCaja');

            break;

        case '1 enc1a3':
            $('.enc1a3').addClass('encierreCaja');
            $('.enc1a1').removeClass('encierreCaja');
            $('.enc1a2').removeClass('encierreCaja');
            $('.enc1a4').removeClass('encierreCaja');

            break;

        case '1 enc1a4':
            $('.enc1a4').addClass('encierreCaja');
            $('.enc1a1').removeClass('encierreCaja');
            $('.enc1a2').removeClass('encierreCaja');
            $('.enc1a3').removeClass('encierreCaja');

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
            $('.enc2a4').removeClass('encierreCaja');

            break;
        case '2 enc2a2':
            $('.enc2a2').addClass('encierreCaja');
            $('.enc2a1').removeClass('encierreCaja');
            $('.enc2a3').removeClass('encierreCaja');
            $('.enc2a4').removeClass('encierreCaja');

            break;

        case '2 enc2a3':
            $('.enc2a3').addClass('encierreCaja');
            $('.enc2a1').removeClass('encierreCaja');
            $('.enc2a2').removeClass('encierreCaja');
            $('.enc2a4').removeClass('encierreCaja');

            break;

        case '2 enc2a4':
            $('.enc2a4').addClass('encierreCaja');
            $('.enc2a1').removeClass('encierreCaja');
            $('.enc2a2').removeClass('encierreCaja');
            $('.enc2a3').removeClass('encierreCaja');

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
            $('.enc3a4').removeClass('encierreCaja');

            break;
        case '3 enc3a2':
            $('.enc3a2').addClass('encierreCaja');
            $('.enc3a1').removeClass('encierreCaja');
            $('.enc3a3').removeClass('encierreCaja');
            $('.enc3a4').removeClass('encierreCaja');

            break;

        case '3 enc3a3':
            $('.enc3a3').addClass('encierreCaja');
            $('.enc3a1').removeClass('encierreCaja');
            $('.enc3a2').removeClass('encierreCaja');
            $('.enc3a4').removeClass('encierreCaja');

            break;

        case '3 enc3a4':
            $('.enc3a4').addClass('encierreCaja');
            $('.enc3a1').removeClass('encierreCaja');
            $('.enc3a2').removeClass('encierreCaja');
            $('.enc3a3').removeClass('encierreCaja');

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
            $('.enc4a4').removeClass('encierreCaja');

            break;
        case '4 enc4a2':
            $('.enc4a2').addClass('encierreCaja');
            $('.enc4a1').removeClass('encierreCaja');
            $('.enc4a3').removeClass('encierreCaja');
            $('.enc4a4').removeClass('encierreCaja');

            break;

        case '4 enc4a3':
            $('.enc4a3').addClass('encierreCaja');
            $('.enc4a1').removeClass('encierreCaja');
            $('.enc4a2').removeClass('encierreCaja');
            $('.enc4a4').removeClass('encierreCaja');

            break;

        case '4 enc4a4':
            $('.enc4a4').addClass('encierreCaja');
            $('.enc4a1').removeClass('encierreCaja');
            $('.enc4a2').removeClass('encierreCaja');
            $('.enc4a3').removeClass('encierreCaja');

            break;
    }
});


function pregunta2() {
    var nt1 = 0;
    var nt2 = 0;
    var nt3 = 0;
    var nt4 = 0;

    if ($('.enc1a2').hasClass('encierreCaja') == true) {
        nt1 = 1;
        $('.enc1a2').addClass('correcto');
    } else if ($('.enc1a1').hasClass('encierreCaja') == true) {
        $('.enc1a1').addClass('incorrecto');
    } else if ($('.enc1a3').hasClass('encierreCaja') == true) {
        $('.enc1a3').addClass('incorrecto');
    } else if ($('.enc1a4').hasClass('encierreCaja') == true) {
        $('.enc1a4').addClass('incorrecto');
    }

    if ($('.enc2a3').hasClass('encierreCaja') == true) {
        nt2 = 1;
        $('.enc2a3').addClass('correcto');
    } else if ($('.enc2a1').hasClass('encierreCaja') == true) {
        $('.enc2a1').addClass('incorrecto');
    } else if ($('.enc2a2').hasClass('encierreCaja') == true) {
        $('.enc2a2').addClass('incorrecto');
    } else if ($('.enc2a4').hasClass('encierreCaja') == true) {
        $('.enc2a4').addClass('incorrecto');
    }

    if ($('.enc3a4').hasClass('encierreCaja') == true) {
        nt3 = 1;
        $('.enc3a4').addClass('correcto');
    } else if ($('.enc3a1').hasClass('encierreCaja') == true) {
        $('.enc3a1').addClass('incorrecto');
    } else if ($('.enc3a2').hasClass('encierreCaja') == true) {
        $('.enc3a2').addClass('incorrecto');
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
    } else if ($('.enc4a3').hasClass('encierreCaja') == true) {
        $('.enc4a3').addClass('incorrecto');
    }

    $('.1').off('click');
    $('.2').off('click');
    $('.3').off('click');
    $('.4').off('click');

    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
    var total = (subtotal * 2) / 4;
    if (total < 0) {
        total = 0;
        $('#pre2a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre2a').val(parseFloat(total).toFixed(2));
    }
}


function pregunta3() {
    // var respact2 = ['El lobo había matado y devorado otro animal.', 'El lobo ofreció a la grulla un pago por su ayuda.', 'El lobo corría por todas partes en busca de auxilio.', 'La grulla sacó el hueso atravesado', 'La grulla pidió que el lobo le pagara.'];
    // for (var i = 0; i < 5; i++) {
    //     var res = $('#divv' + [i] + '').text();
    //     if (respact2[i] == res) {
    //         cont = cont + 1;
    //         $('#divv' + [i] + '').addClass('correctoar');
    //     } else {
    //         $('#divv' + [i] + '').addClass('incorrectoar');
    //     }

    // }
    var cont = 0;
    if( $(".accion1").val() =="res1"){
        cont++;
        $(".accion1").addClass('correctoar');
    }else{
        $(".accion1").addClass('incorrectoar');
    }if( $(".accion2").val() =="res2"){
        cont++;
        $(".accion2").addClass('correctoar');
    }else{
        $(".accion2").addClass('incorrectoar');
    }if( $(".accion3").val() =="res3"){
        cont++;
        $(".accion3").addClass('correctoar');
    }else{
        $(".accion3").addClass('incorrectoar');
    }if( $(".accion4").val() =="res4"){
        cont++;
        $(".accion4").addClass('correctoar');
    }else{
        $(".accion4").addClass('incorrectoar');
    }if( $(".accion5").val() =="res5"){
        cont++;
        $(".accion5").addClass('correctoar');
    }else{
        $(".accion5").addClass('incorrectoar');
    }
    var total = (cont * 2.5) / 5;
    $('#pre3a').val(parseFloat(total).toFixed(2));
}


$(".enc1a").addClass('hvr-grow-shadow3');
$(".enc1a").css('cursor', 'pointer');
$(".enc1a").click(function() {
    if ($(this).hasClass("seleccionCaja")) {
        $(this).removeClass("seleccionCaja");
    } else {
        $(this).addClass("seleccionCaja");
    }
});