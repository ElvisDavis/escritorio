var tabla;
//funcion que s ejecuta al inicio
function init(){
    $("#formulario").on("submit", function (e){
        guardaryeditar(e);
    });
}

//funcion limpiar
function limpiar()
{
    $('#razonsocial').val("");
    $('#direccion').val("")
    $('#telefono').val();
    $('#email').val();
    $('#ruc').val();
    $('#clave').val();
}

//funcion cancelar form
function cancelarform(){
    limpiar();
}
// function guardar y editar
function guardaryeditar(e){
    e.preventDefault(); //No se activa la accion predeterminada del evento
    $("#btnGuardar").prop("disabled",false);
    var formData= new FormData($('#formulario')[0]);
    $.ajax({
        url:("../ajax/contribuyente.php?op=guardaryeditar"),
        type:"POST",
        data:formData,
        contentType: false,
        processData:false,
        success: function(datos)
        {
            bootbox.alert(datos);
        }
    });
    limpiar();
}
init();
