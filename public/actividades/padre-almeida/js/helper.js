function mostrar_ayuda() {
    $("#nota-informativa").show("blind", { direction: 'up' }, 500)
}

function cerrar_ayuda() {
    $("#nota-informativa").hide("blind", { direction: 'up' }, 500).delay(500);
}
