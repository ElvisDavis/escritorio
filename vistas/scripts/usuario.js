var tabla;
//función que se ejecuta al inicio
function init() {
    $("#formulario").on("submit", function (e) {
        guardaryeditar(e);
    });

    //Mostramos los permisos
    $.post("../ajax/usuario.php?op=permisos&id=", function (r) {
        $("#permisos").html(r);
    });

}
//function limpiar
function limpiar()
{
    $("#nombre").val("");
    $("#telefono").val("");
    $("#email").val("");
    $("#clave").val("");
}

//Funcion cancelarform
function cancelarform() {
    limpiar();
}
function guardaryeditar(e) {
    e.preventDefault(); //No se activa la acción predeterminada del evento
    $("#btnGuardar").prop("disabled", false);
    var formData = new FormData($('#formulario')[0]);

    $.ajax({
        url: "../ajax/usuario.php?op=guardaryeditar",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function(datos)
        {
            bootbox.alert(datos);

        }
    });
    limpiar();
}

   

init();
