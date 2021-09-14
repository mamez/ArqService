function validar(){
    if(validarInput()){
      var usuario =  $('#Usuario').val();
      if(usuario == "1234"){
          window.location.href="file:///C:/Users/Johana/Desktop/InterfazIII/Analista/index.html";
      }
      else if(usuario =="2345"){
        window.location.href="file:///C:/Users/Johana/Desktop/InterfazIII/Gerente/index.html";
      }
      else if(usuario =="5346"){
        window.location.href="file:///C:/Users/Johana/Desktop/InterfazIII/Directora/index.html";
      }
      else if(usuario =="1328"){
        window.location.href="file:///C:/Users/Johana/Desktop/InterfazIII/Empleado/index.html";
      }
      else if(usuario =="2709"){
        window.location.href="file:///C:/Users/Johana/Desktop/InterfazIII/Aspirante/index.html";
      }


    }

}
function validarInput(){

    $('.Swal.fire').remove();

    var Usuario=$('#Usuario').val(),
        Contraseña=$('#Contraseña').val();

    // validamos el campo Usuario
    if(Usuario=="" || Usuario==null){

        cambiarColor("Usuario");
        // mostramos le mensaje de alerta
        Swal.fire("Usuario Invalido");
        return false;
    }else{
        var expresion= /^.{4,12}$/;
        if(!expresion.test(Usuario)){
            // mostrara el mesaje que debe ingresar un Usuario válido
            cambiarColor("Usuario");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }

    // validamos el contraseña
    if(Contraseña=="" || Contraseña==null){

        cambiarColor("Contraseña");
        // mostramos le mensaje de alerta
        Swal.fire("Contraseña Invalida");
        return false;
    }else{
        var expresion= /^.{4,12}$/;
        if(!expresion.test(Contraseña)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("Contraseña");
            Swal.fire("Por favor ingrese un Contraseña ");
            return false;
        }
    }
    $('form').submit();
    return true;
}
$('input').focus(function(){
    $('.Swal.fire').remove();
    colorDefault('Usuario');
    colorDefault('Contraseña');
});
function colorDefault(dato){
    $('#' + dato).css({
        border: "3px solid #999"
    });
}

// creamos una funcio para cambiar de color a su bordes de los input
function cambiarColor(dato){
    $('#' + dato).css({
        border: "3px solid #dd5144"
    });
}





