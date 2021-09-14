function validarFormulario(){
    if(validar()){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sus datos se han enviado con éxito',
            showConfirmButton: false,
            timer: 35000,
            willClose: () => {
               $('#nombre').val("").removeClass("input-error");
                $('#apellido').val("").removeClass("input-error");
                $('#correo').val("").removeClass("input-error");
                $('#telefono').val("").removeClass("input-error");
                $('#descripcion').val("").removeClass("input-error");
                
              }
          })
    }
}


function validar(){
   
    $('.alert').remove();

    // declarion de variables
    var nombre=$('#nombre').val(),
        apellido=$('#apellido').val(),
        correo=$('#correo').val(),
        telefono=$('#telefono').val(),
        descripcion=$('#descripcion').val();
       
        

    // validamos el campo nombre
    if(nombre=="" || nombre==null){

        cambiarColor("nombre");
        // mostramos el mensaje de alerta
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(nombre)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("nombre");
            alert("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo apellido
    if(apellido=="" || apellido==null){

        cambiarColor("apellido");
        // mostramos el mensaje de alerta
        alert("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(apellido)){
            // mostrara el mesaje que debe ingresar un apellido válido
            cambiarColor("apellido");
            alert("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el correo
    if(correo=="" || correo==null){

        cambiarColor("correo");
        // mostramos el mensaje de alerta
        alert("Campo obligatorio");
        return false;
    }else{
        var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(correo)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("correo");
            alert("Por favor ingrese un correo válido");
            return false;
        }
    }
    // validamos el telefono
    if(telefono=="" || telefono==null){

        cambiarColor("telefono");
        // mostramos el mensaje de alerta
        alert("Campo obligatorio");
        return false;
    }else{
        var expresion= /^\d{7,14}$/;
        if(!expresion.test(telefono)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("telefono");
            alert("Por favor ingrese un telefono válido");
            return false;
        }
    }
     // validamos la descripcion
     if(descripcion=="" || descripcion==null){

        cambiarColor("descripcion");
        // mostramos le descripcion de alerta
        alert("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(descripcion)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("descripcion");
            alert("No se permiten caracteres especiales");
            return false;
        }
    }
    return true;

}
$('input').focus(function(){
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('apellido');
    colorDefault('correo');
    colorDefault('telefono');
    colorDefault('descripcion');
});
$('textarea').focus(function(){
    $('.alert').remove();
    colorDefault('mensaje');
});
function colorDefault(dato){
    $('#' + dato).css({
        border: "1px solid #999"
    });
}
function cambiarColor(dato){
    $('#' + dato).addClass("input-error")
}


