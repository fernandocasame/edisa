// JavaScript Document
$(document).ready(function() {
    $(".openbtn").addClass("animate__fadeOut");
    $('[data-toggle="tooltip"]').tooltip();
});
$(window).resize(function() {
    if ($(window).width() < 650) {
        closeNav();
    } else {
        openNav();
    }
});

/* FIN USO EN ACTIVIDADES */
function f_randomico(a, b) {
    if (Math.random() < 0.5) return -1;
    else return 1;
}

function mostrar_ayuda() {
    $("#nota-informativa").show().removeClass("d-none animate__fadeOut").addClass("animate__fadeInLeft");
}

function cerrar_ayuda() {
    $("#nota-informativa").removeClass("animate__fadeInLeft").addClass("animate__fadeOut").delay(1000).hide("slows");
}


function openNav() {
    $(".flotante").removeClass("animate__fadeOutLeft").addClass("animate__fadeInLeft");
    $(".openbtn").removeClass("animate__fadeInLeft").addClass("animate__fadeOutLeft");
}

function closeNav() {
	$("#nota-informativa").addClass("animate__fadeOut");
    $(".flotante").addClass("animate__fadeOutLeft");
    $(".openbtn").addClass("animate__fadeInLeft");

}

function Calculo_nota() {
    //var calc = (calificacion / itemsT);
    var total = (cor * (calificacion / itemsT)).toFixed(2);
    //var total = suma.toFixed(2);
    $("#txtNota").html(total);
    $('.nota').addClass("alertanotafinal");
    $('.nota').addClass("bkgcolor");
    f_tiempo();
}

function f_tiempo() {
    setTimeout(function() {
            // ComprobacionFinal();
    }, 3000);
}

function validNumero(num1,num2,allowFloat=0){
    if(allowFloat==1){
        var regex = new RegExp("^.|["+num1+"-"+num2+"]+$");
    }else{
        var regex = new RegExp("^["+num1+"-"+num2+"]+$");
    }

    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}

function validMaxIngreso(elemento,num){
    if(elemento.value>num){
        alert('La calificación no puede ser mayor a '+num)
        elemento.value= "";
        return 1;
    }else{

        return 0;

    }
}
function separateString(stringToSeparate){
    var separator = " ";
    var stringSplited = [];
    stringSplited = stringToSeparate.split(separator);
    return stringSplited;
}

$('.nota-abierta').keypress(function(event) {
    return filterFloat(event, this);
})

function filterFloat(evt, input) {
    // Backspace = 8, Enter = 13, ‘0′ = 48, ‘9′ = 57, ‘.’ = 46, ‘-’ = 43
    var key = window.Event ? evt.which : evt.keyCode;
    var chark = String.fromCharCode(key);
    var tempValue = input.value + chark;
    if (key >= 48 && key <= 57) {
        if (filter(tempValue) === false) {
            return false;
        } else {
            return true;
        }
    } else {
        if (key == 8 || key == 13 || key == 0) {
            return true;
        } else if (key == 46) {
            if (filter(tempValue) === false) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
}

function f_ok(obj) {
    $(obj).addClass("correcto");
}

function f_no(obj) {
    $(obj).addClass("incorrecto");
}