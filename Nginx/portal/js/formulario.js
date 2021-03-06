

function controlPaso(){
    var cont = 0;
    for(var i= 1; i<4; i++){
        var stipItem = ".stip-"+ i; 
        var  isShow = $( stipItem ).hasClass( "fnc-show" );
        if(isShow){
            cont = i;
        }
    }
   for(cont; cont<4; cont++){
    var stipItem = ".stip-"+ cont;
    var stipHeader = ".stip-header-"+cont;
    var  isShow = $( stipItem ).hasClass( "fnc-show" );
    if(cont==3){
        $("#btnSigui").html('Enviar');
    }
       if(isShow){
        $( stipItem).removeClass( "fnc-show" ).addClass( "fnc-hide" );
        $( stipHeader).removeClass( "active" );
       }else{
        $( stipItem).removeClass( "fnc-hide" ).addClass( "fnc-show" );
        $( stipHeader).addClass( "active" );
        cont = 4;
       }
   }

}
function procesarForm(){
    if(validarFormulario()){
        controlPaso();
    }
} 

function validarFormulario(){
    $('.alert').remove();
    var cont = 1;
    for(var i= 1; i<4; i++){
        var stipItem = ".stip-"+ i; 
        var  isShow = $( stipItem ).hasClass( "fnc-show" );
        if(isShow){
            cont = i;
        }

        
    }
    // declarion de variables
    var nombre=$('#nombre').val(),
        nombre2=$('#nombre2').val(),
        apellido=$('#apellido').val(),
        apellido2=$('#apellido2').val(),
        lugarnacimiento=$('#lugarnacimiento').val(),
        fechanacimiento=$('#fechanacimiento').val(),
        tipoidentidad=$('#tipoidentidad').val(),
        numeroidentidad=$('#numeroidentidad').val(),
        fechaexpedicion=$('#fechaexpedicion').val(),
        lugarexpedicion=$('#lugarexpedicion').val(),
        estadocivil=$('#estadocivil').val();
        rh=$('#rh').val(),
        telefono=$('#telefono').val(),
        direccion=$('#direccion').val(),
        correo=$('#correo').val(),
        ciudad=$('#ciudad').val(),
        localidad=$('#localidad').val(),
        barrio=$('#barrio').val(),
        estadocivil=$('#estadocivil').val(),
        numerohijos=$('#numerohijos').val(),
        nivelestudios=$('#nivelestudios').val(),
        eps=$('#eps').val(),
        cesantias=$('#cesantias').val(),
        afp=$('#afp').val();

    // validamos el campo nombre
    //inicio stip-1
  
    if(cont==1){
        if(nombre=="" || nombre==null){

            cambiarColor("nombre");
            // mostramos el mensaje de alerta
            Swal.fire("Campo obligatorio");
            return false;
        }else{
            var expresion= /^[a-zA-Z???????????????????????? ]*$/;
            if(!expresion.test(nombre)){
                // mostrara el mesaje que debe ingresar un nombre v??lido
                cambiarColor("nombre");
                alert("No se permiten carateres especiales o n??meros");
                return false;
            }
        }
        // validamos el campo segundo nombre
        if(nombre2=="" || nombre2==null){
    
            cambiarColor("nombre2");
            // mostramos el mensaje de alerta
            alert("Campo obligatorio");
            return false;
        }else{
            var expresion= /^[a-zA-Z???????????????????????? ]*$/;
            if(!expresion.test(nombre2)){
                // mostrara el mesaje que debe ingresar un nombre2 v??lido
                cambiarColor("nombre2");
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
            var expresion= /^[a-zA-Z???????????????????????? ]*$/;
            if(!expresion.test(apellido)){
                // mostrara el mesaje que debe ingresar un apellido v??lido
                cambiarColor("apellido");
                alert("No se permiten carateres especiales o numeros");
                return false;
            }
        }
        // validamos el campo segundo apellido
        if(apellido2=="" || apellido2==null){
    
            cambiarColor("apellido2");
            // mostramos el mensaje de alerta
            alert("Campo obligatorio");
            return false;
        }else{
            var expresion= /^[a-zA-Z???????????????????????? ]*$/;
            if(!expresion.test(apellido2)){
                // mostrara el mesaje que debe ingresar un apellido2 v??lido
                cambiarColor("apellido2");
                alert("No se permiten carateres especiales o numeros");
                return false;
            }
        }
        // validamos el campo Lugar Nacimiento
        if(lugarnacimiento=="" || lugarnacimiento==null){
    
            cambiarColor("lugarnacimiento");
            // mostramos el mensaje de alerta
            alert("Campo obligatorio");
            return false;
        }else{
            var expresion= /^[a-zA-Z???????????????????????? ]*$/;
            if(!expresion.test(lugarnacimiento)){
                // mostrara el mesaje que debe ingresar un lugarnacimiento v??lido
                cambiarColor("lugarnacimiento");
                alert("No se permiten carateres especiales o numeros");
                return false;
            }
        }
        // validamos el campo Fecha Nacimiento
        if(fechanacimiento=="" || fechanacimiento==null){
    
            cambiarColor("fechanacimiento");
            // mostramos el mensaje de alerta
            alert("Campo obligatorio");
            return false;
        }else{
            var expresion= /^/;
            if(!expresion.test(fechanacimiento)){
                // mostrara el mesaje que debe ingresar un fechanacimiento v??lido
                cambiarColor("fechanacimiento");
                alert("No se permiten carateres especiales o numeros");
                return false;
            }
        }
        // validamos el campo Tipo documento Identidad
        if(tipoidentidad=="" || tipoidentidad==null){
    
            cambiarColor("tipoidentidad");
            // mostramos el mensaje de alerta
            alert("Campo obligatorio");
            return false;
        }else{
            var expresion= /^/;
            if(!expresion.test(tipoidentidad)){
                // mostrara el mesaje que debe ingresar un tipoidentidad v??lido
                cambiarColor("tipoidentidad");
                alert("No se permiten carateres especiales o numeros");
                return false;
            }
        }
        // validamos el campo Numero documento
        if(numeroidentidad=="" || numeroidentidad==null){
    
            cambiarColor("numeroidentidad");
            // mostramos el mensaje de alerta
            alert("Campo obligatorio");
            return false;
        }else{
            var expresion= /^\d{7,14}$/;
            if(!expresion.test(numeroidentidad)){
                // mostrara el mesaje que debe ingresar un numeroidentidad v??lido
                cambiarColor("numeroidentidad");
                alert("No se permiten carateres especiales o numeros");
                return false;
            }
        }
        // validamos el campo Fecha expedicion
        if(fechaexpedicion=="" || fechaexpedicion==null){
    
            cambiarColor("fechaexpedicion");
            // mostramos el mensaje de alerta
            alert("Campo obligatorio");
            return false;
        }else{
            var expresion= /^/;
            if(!expresion.test(fechaexpedicion)){
                // mostrara el mesaje que debe ingresar un fechaexpedicion v??lido
                cambiarColor("fechaexpedicion");
                alert("No se permiten carateres especiales o numeros");
                return false;
            }
        }
        // validamos el campo Lugar expedicion
        if(lugarexpedicion=="" || lugarexpedicion==null){
    
            cambiarColor("lugarexpedicion");
            // mostramos el mensaje de alerta
            alert("Campo obligatorio");
            return false;
        }else{
            var expresion= /^[a-zA-Z???????????????????????? ]*$/;
            if(!expresion.test(lugarexpedicion)){
                // mostrara el mesaje que debe ingresar un lugarexpedicion v??lido
                cambiarColor("lugarexpedicion");
                alert("No se permiten carateres especiales o numeros");
                return false;
            }
    
        }
        
    }
//fin stip-1
 
    if (cont ==2){
        //inicio stip-2
    
    // validamos el telefono
    if(telefono=="" || telefono==null){

        cambiarColor("telefono");
        // mostramos el mensaje de alerta
        alert("Campo obligatorio1");
        return false;
    }else{
        var expresion= /^\d{7,14}$/;
        if(!expresion.test(telefono)){
            // mostrara el mesaje que debe ingresar un nombre v??lido
            cambiarColor("telefono");
            alert("Por favor ingrese un telefono v??lido");
            return false;
        }
    }
    // validamos el campo Direccion
    if(direccion=="" || direccion==null){

        cambiarColor("direccion");
        // mostramos el mensaje de alerta
        alert("Campo obligstorio7");
        return false;
    }
    // validamos el correo
    if(correo=="" || correo==null){

        cambiarColor("correo");
        // mostramos el mensaje de alerta
        alert("Campo obligatorio2");
        return false;
    }else{
        var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(correo)){
            // mostrara el mesaje que debe ingresar un nombre v??lido
            cambiarColor("correo");
            alert("Por favor ingrese un correo v??lido");
            return false;
        }
    }
     // validamos el campo Ciudad 
     if(ciudad=="" || ciudad==null){

        cambiarColor("ciudad");
        // mostramos el mensaje de alerta
        alert("Campo obligatorio3");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(ciudad)){
            // mostrara el mesaje que debe ingresar un ciudad v??lido
            cambiarColor("ciudad");
            alert("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo Localidad
    if(localidad=="" || localidad==null){

        cambiarColor("localidad");
        // mostramos el mensaje de alerta
        alert("Campo obligatorio4");
        return false;
    }else{
        var expresion= /^/;
        if(!expresion.test(localidad)){
            // mostrara el mesaje que debe ingresar un localidad v??lido
            cambiarColor("localidad");
            alert("No se permiten carateres especiales o numeros");
            return false;
        }
    }
     // validamos la Barrio  
     if(barrio=="" || barrio==null){

        cambiarColor("barrio");
        // mostramos le barrio de alerta
        alert("Campo obligatorio5");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9???????????????????????? ]*$/;
        if(!expresion.test(barrio)){
            // mostrara el mesaje que debe ingresar un nombre v??lido
            cambiarColor("barrio");
            alert("No se permiten caracteres especiales");
            return false;
        }
    }
     // validamos la Estado civil  
     if(estadocivil=="" || estadocivil==null){

        cambiarColor("estadocivil");
        // mostramos le estadocivil de alerta
        alert("Campo obligatorio6");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9???????????????????????? ]*$/;
        if(!expresion.test(estadocivil)){
            // mostrara el mesaje que debe ingresar un nombre v??lido
            cambiarColor("estadocivil");
            alert("No se permiten caracteres especiales");
            return false;
        }
    }
   
    }
     //fin stip-2
    if(cont==3){
        //inicio stip-3
     // validamos la Numero de hijos
     if(numerohijos=="" || numerohijos==null){

        cambiarColor("numerohijos");
        // mostramos le numerohijos de alerta
        alert("Campo obligatorio");
        return false;
    }else{
        var expresion= /^\d{1,14}$/;
        if(!expresion.test(numerohijos)){
            // mostrara el mesaje que debe ingresar un nombre v??lido
            cambiarColor("numerohijos");
            alert("No se permiten caracteres especiales");
            return false;
        }
    }
    // validamos la Nivel estudios
    if(nivelestudios=="" || nivelestudios==null){

        cambiarColor("nivelestudios");
        // mostramos le nivelestudios de alerta
        alert("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9???????????????????????? ]*$/;
        if(!expresion.test(nivelestudios)){
            // mostrara el mesaje que debe ingresar un nombre v??lido
            cambiarColor("nivelestudios");
            alert("No se permiten caracteres especiales");
            return false;
        }
    }
    // validamos el campo RH
    if(rh=="" || rh==null){

        cambiarColor("rh");
        // mostramos el mensaje de alerta
        alert("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? +-]*$/;
        if(!expresion.test(rh)){
            // mostrara el mesaje que debe ingresar un rh v??lido
            cambiarColor("rh");
            alert("No se permiten carateres especiales o n??meros");
            return false;
        }
    }
    // validamos la Eps
    if(eps=="" || eps==null){

        cambiarColor("eps");
        // mostramos le eps de alerta
        alert("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9???????????????????????? ]*$/;
        if(!expresion.test(eps)){
            // mostrara el mesaje que debe ingresar un nombre v??lido
            cambiarColor("eps");
            alert("No se permiten caracteres especiales");
            return false;
        }
    }
    // validamos la Cesantias
    if(cesantias=="" || cesantias==null){

        cambiarColor("cesantias");
        // mostramos le cesantias de alerta
        alert("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9???????????????????????? ]*$/;
        if(!expresion.test(cesantias)){
            // mostrara el mesaje que debe ingresar un nombre v??lido
            cambiarColor("cesantias");
            alert("No se permiten caracteres especiales");
            return false;
        }
    }
    // validamos la AFP
    if(afp=="" || afp==null){

        cambiarColor("afp");
        // mostramos le afp de alerta
        alert("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9???????????????????????? ]*$/;
        if(!expresion.test(afp)){
            // mostrara el mesaje que debe ingresar un nombre v??lido
            cambiarColor("afp");
            alert("No se permiten caracteres especiales");
            return false;
        }
    }
   
}
 //fin stip-3
    $('form').submit();
    //alert("Se envio correctamente");
    return true;

}
$('input').focus(function(){
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('nombre2');
    colorDefault('apellido');
    colorDefault('apellido2');
    colorDefault('lugarnacimiento');
    colorDefault('fechanacimiento');
    colorDefault('tipoidentidad');
    colorDefault('numeroidentidad');
    colorDefault('fechaexpedicion');
    colorDefault('lugarexpedicion');
    colorDefault('rh');
    colorDefault('telefono');
    colorDefault('direccion');
    colorDefault('correo');
    colorDefault('ciudad');
    colorDefault('localidad');
    colorDefault('barrio');
    colorDefault('estadocivil');
    colorDefault('numerohijos');
    colorDefault('nivelestudios');
    colorDefault('eps');
    colorDefault('cesantias');
    colorDefault('afp');
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
    $('#' + dato).css({
        border: "1px solid #dd5144"
    });
}


// Asignar solicitud

function validarFormula(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se envio correctamente',
        showConfirmButton: false,
        timer: 5500,
        willClose: () => {
            $('#tipoperfil').val("").removeClass("input-error");
             $('#tituloprofes').val("").removeClass("input-error");
             $('#a??osexpe').val("").removeClass("input-error");
             $('#fechacierre').val("").removeClass("input-error");
             $('#descripcion').val("").removeClass("input-error");
             $('#analista').val("").removeClass("input-error");
             
           }
    })
    $('.Swal.fire').remove();

    // declarion de variables
    var tipoperfil=$('#tipoperfil').val(),
        tituloprofes=$('#tituloprofes').val(),
        a??osexpe=$('#a??osexpe').val(),
        fechacierre=$('#fechacierre').val(),
        descripcion=$('#descripcion').val(),
        analista=$('#analista').val();

    // validamos el campo tipoperfil
    if(tipoperfil=="" || tipoperfil==null){

        cambiarColor("tipoperfil");
        // mostramos el mensaje de alerta
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^/;
        if(!expresion.test(tipoperfil)){
            // mostrara el mesaje que debe ingresar un tipoperfil v??lido
            cambiarColor("tipoperfil");
            alert("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo tituloprofes
    if(tituloprofes=="" || tituloprofes==null){

        cambiarColor("tituloprofes");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^/;
        if(!expresion.test(tituloprofes)){
            // mostrara el mesaje que debe ingresar un tituloprofes v??lido
            cambiarColor("tituloprofes");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo a??osexpe
    if(a??osexpe=="" || a??osexpe==null){

        cambiarColor("a??osexpe");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^/;
        if(!expresion.test(a??osexpe)){
            // mostrara el mesaje que debe ingresar un a??osexpe v??lido
            cambiarColor("a??osexpe");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo fechacierre
    if(fechacierre=="" || fechacierre==null){

        cambiarColor("fechacierre");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^/;
        if(!expresion.test(fechacierre)){
            // mostrara el mesaje que debe ingresar un fechacierre v??lido
            cambiarColor("fechacierre");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo descripcion
    if(descripcion=="" || descripcion==null){

        cambiarColor("descripcion");
        // mostramos le descripcion de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9???????????????????????? ]*$/;
        if(!expresion.test(descripcion)){
            // mostrara el mesaje que debe ingresar un nombre v??lido
            cambiarColor("descripcion");
            Swal.fire("No se permiten caracteres especiales");
            return false;
        }
    }
    
    // validamos el campo analista
    if(analista=="" || analista==null){

        cambiarColor("analista");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^/;
        if(!expresion.test(analista)){
            // mostrara el mesaje que debe ingresar un analista v??lido
            cambiarColor("analista");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    return true;

}
$('input').focus(function(){
    $('.Swal.fire').remove();
    colorDefault('tipoperfil');
    colorDefault('tituloprofesional');
    colorDefault('a??osexpe');
    colorDefault('fechacierre');
    colorDefault('descripcion');
    colorDefault('analista');
});
$('textarea').focus(function(){
    $('.Swal.fire').remove();
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

// Registro Usuario

function validarFormulUsu(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario creado',
        showConfirmButton: false,
        timer: 2500
    })
    $('.Swal.fire').remove();

    // declarion de variables
    var nombre=$('#nombre').val(),
        apellido =$('#apellido').val(),
        fechanacimiento=$('#fechanacimiento').val(),
        correo=$('#correo').val(),
        celular=$('#celular').val(),
        tipoidentidad=$('#tipoidentidad').val(),
        fechaexpedicion=$('#fechaexpedicion').val(),
        lugarexpedicion=$('#lugarexpedicion').val(),
        ciudad=$('#ciudad').val();


    // validamos el campo nombre
    if(nombre=="" || nombre==null){

        cambiarColor("nombre");
        // mostramos el mensaje de alerta
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(nombre)){
            // mostrara el mesaje que debe ingresar un nombre v??lido
            cambiarColor("nombre");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    if(apellido=="" || apellido==null){

        cambiarColor("apellido");
        // mostramos el mensaje de alerta
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(nombre)){
            // mostrara el mesaje que debe ingresar un nombre v??lido
            cambiarColor("apellido");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos la correo
      if(correo=="" || correo==null){

        cambiarColor("correo");
        // mostramos le correo de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(correo)){
            // mostrara el mesaje que debe ingresar un nombre v??lido
            cambiarColor("correo");
            Swal.fire("No se permiten caracteres especiales");
            return false;
        }
    }
    // validamos el campo Fecha Nacimiento
    if(fechanacimiento=="" || fechanacimiento==null){
    
        cambiarColor("fechanacimiento");
        // mostramos el mensaje de alerta
        alert("Campo obligatorio");
        return false;
    }else{
        var expresion= /^/;
        if(!expresion.test(fechanacimiento)){
            // mostrara el mesaje que debe ingresar un fechanacimiento v??lido
            cambiarColor("fechanacimiento");
            alert("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo Tipo documento Identidad
    if(tipoidentidad=="" || tipoidentidad==null){

        cambiarColor("tipoidentidad");
        // mostramos el mensaje de alerta
        alert("Campo obligatorio");
        return false;
    }else{
        var expresion= /^/;
        if(!expresion.test(tipoidentidad)){
            // mostrara el mesaje que debe ingresar un tipoidentidad v??lido
            cambiarColor("tipoidentidad");
            alert("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo Numero documento
    if(numeroidentidad=="" || numeroidentidad==null){

        cambiarColor("numeroidentidad");
        // mostramos el mensaje de alerta
        alert("Campo obligatorio");
        return false;
    }else{
        var expresion= /^\d{7,14}$/;
        if(!expresion.test(numeroidentidad)){
            // mostrara el mesaje que debe ingresar un numeroidentidad v??lido
            cambiarColor("numeroidentidad");
            alert("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo Fecha expedicion
    if(fechaexpedicion=="" || fechaexpedicion==null){

        cambiarColor("fechaexpedicion");
        // mostramos el mensaje de alerta
        alert("Campo obligatorio");
        return false;
    }else{
        var expresion= /^/;
        if(!expresion.test(fechaexpedicion)){
            // mostrara el mesaje que debe ingresar un fechaexpedicion v??lido
            cambiarColor("fechaexpedicion");
            alert("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo Lugar expedicion
    if(lugarexpedicion=="" || lugarexpedicion==null){

        cambiarColor("lugarexpedicion");
        // mostramos el mensaje de alerta
        alert("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(lugarexpedicion)){
            // mostrara el mesaje que debe ingresar un lugarexpedicion v??lido
            cambiarColor("lugarexpedicion");
            alert("No se permiten carateres especiales o numeros");
            return false;
        }
        

    }
    return true;

}
$('input').focus(function(){
    $('.Swal.fire').remove();
    colorDefault('nombre');
    colorDefault('correo');
    colorDefault('apellido');
    colorDefault('fechaexpedicion');
    colorDefault('fechanacimiento');
    colorDefault('lugarexpedicion');
    colorDefault('tipoidentidad');
    colorDefault('numeroidentidad');
    
});
$('textarea').focus(function(){
    $('.Swal.fire').remove();
    colorDefault('mensaje');
});
function colorDefault(dato){
    $('#' + dato).css({
        border: "1px solid #999"
    });
}
function cambiarColor(dato){
    $('#' + dato).css({
        border: "3px solid #dd5144"
    });
}

// validar curriculum 
function validarFormulariCur(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se envio correctamente',
        showConfirmButton: false,
        timer: 2500
    })
    $('.Swal.fire').remove();

    // declarion de variables
    var textarea=$('#textarea').val(),
        nombrecarrera=$('#nombrecarrera').val(),
        universidad=$('#universidad').val(),
        pais=$('#pais').val(),
        a??ofinalizacion=$('#a??ofinalizacion').val(),
        universidad2=$('#universidad2').val(),
        pais2=$('#pais2').val(),
        a??ofinalizacion2=$('#a??ofinalizacion2').val(),
        nombre3=$('#nombre3').val(),
        pais3=$('#pais3').val(),
        a??ofinalizacion3=$('#a??ofinalizacion3').val();
        espacio=$('#espacio').val();
        espacio2=$('#espacio2').val();
        espacio3=$('#espacio3').val();
        espacio4=$('#espacio4').val();
        espacio5=$('#espacio5').val();
        espacio6=$('#espacio6').val();
        espacio7=$('#espacio7').val();
        espacio8=$('#espacio8').val();
        espacio9=$('#espacio9').val();
        espacio10=$('#espacio10').val();
        empresa=$('#empresa').val(),
        rol=$('#rol').val(),
        duracion=$('#duracion').val(),
        funciones=$('#funciones').val(),
        lenguaje=$('#lenguaje').val();
        sistemaopera=$('#sistemaopera').val(),
        basedatos=$('#basedatos').val(),
        herramienta=$('#herramienta').val(),
        otros=$('#otros').val();


    // validamos el campo textarea
    if(textarea=="" || textarea==null){

        cambiarColor("textarea");
        // mostramos le textarea de alerta
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[,\\.\\a-zA-Z0-9???????????????????????? ]*$/;
        if(!expresion.test(textarea)){
            // mostrara el mesaje que debe ingresar un nombre v??lido
            cambiarColor("textarea");
            Swal.fire("No se permiten caracteres especiales");
            return false;
        }
    }
    // validamos el campo nombrecarrera
    if(nombrecarrera=="" || nombrecarrera==null){

        cambiarColor("nombrecarrera");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(nombrecarrera)){
            // mostrara el mesaje que debe ingresar un nombrecarrera v??lido
            cambiarColor("nombrecarrera");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo universidad
    if(universidad=="" || universidad==null){

        cambiarColor("universidad");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(universidad)){
            // mostrara el mesaje que debe ingresar un universidad v??lido
            cambiarColor("universidad");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo pais
    if(pais=="" || pais==null){

        cambiarColor("pais");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(pais)){
            // mostrara el mesaje que debe ingresar un pais v??lido
            cambiarColor("pais");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo a??ofinalizacion
    if(a??ofinalizacion=="" || a??ofinalizacion==null){

        cambiarColor("a??ofinalizacion");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^/;
        if(!expresion.test(a??ofinalizacion)){
            // mostrara el mesaje que debe ingresar un a??ofinalizacion v??lido
            cambiarColor("a??ofinalizacion");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo universidad2
    if(universidad2=="" || universidad2==null){

        cambiarColor("universidad2");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(universidad2)){
            // mostrara el mesaje que debe ingresar un universidad2 v??lido
            cambiarColor("universidad2");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo pais2
    if(pais2=="" || pais2==null){

        cambiarColor("pais2");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(pais2)){
            // mostrara el mesaje que debe ingresar un pais2 v??lido
            cambiarColor("pais2");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo a??ofinalizacion2
    if(a??ofinalizacion2=="" || a??ofinalizacion2==null){

        cambiarColor("a??ofinalizacion2");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^/;
        if(!expresion.test(a??ofinalizacion2)){
            // mostrara el mesaje que debe ingresar un a??ofinalizacion2 v??lido
            cambiarColor("a??ofinalizacion2");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo nombre3
    if(nombre3=="" || nombre3==null){

        cambiarColor("nombre3");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(nombre3)){
            // mostrara el mesaje que debe ingresar un nombre3 v??lido
            cambiarColor("nombre3");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo pais3
    if(pais3=="" || pais3==null){

        cambiarColor("pais3");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(pais3)){
            // mostrara el mesaje que debe ingresar un pais3 v??lido
            cambiarColor("pais3");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo a??ofinalizacion3
    if(a??ofinalizacion3=="" || a??ofinalizacion3==null){

        cambiarColor("a??ofinalizacion3");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^/;
        if(!expresion.test(a??ofinalizacion3)){
            // mostrara el mesaje que debe ingresar un a??ofinalizacion3 v??lido
            cambiarColor("a??ofinalizacion3");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo espacio
    if(espacio=="X" || espacio==null){

        var expresion= /^/;
        if(!expresion.test(espacio)){
            // mostrara el mesaje que debe ingresar un espacio v??lido
            cambiarColor("espacio");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }else{
        
        cambiarColor("espacio");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }
    if(espacio2=="X" || espacio2==null){

        var expresion= /^/;
        if(!expresion.test(espacio2)){
            // mostrara el mesaje que debe ingresar un espacio2 v??lido
            cambiarColor("espacio2");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }else{
        
        cambiarColor("espacio2");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }
    if(espacio3=="X" || espacio3==null){

        var expresion= /^/;
        if(!expresion.test(espacio3)){
            // mostrara el mesaje que debe ingresar un espacio3 v??lido
            cambiarColor("espacio3");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }else{
        
        cambiarColor("espacio3");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }
    if(espacio4=="X" || espacio4==null){

        var expresion= /^/;
        if(!expresion.test(espacio4)){
            // mostrara el mesaje que debe ingresar un espacio4 v??lido
            cambiarColor("espacio4");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }else{
        
        cambiarColor("espacio4");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }
    if(espacio5=="X" || espacio5==null){

        var expresion= /^/;
        if(!expresion.test(espacio5)){
            // mostrara el mesaje que debe ingresar un espacio5 v??lido
            cambiarColor("espacio5");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }else{
        
        cambiarColor("espacio5");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }
    // validamos el campo espacio
    if(espacio6=="X" || espacio6==null){

        var expresion= /^/;
        if(!expresion.test(espacio6)){
            // mostrara el mesaje que debe ingresar un espacio v??lido
            cambiarColor("espacio6");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }else{
        
        cambiarColor("espacio6");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }
    if(espacio7=="X" || espacio7==null){

        var expresion= /^/;
        if(!expresion.test(espacio7)){
            // mostrara el mesaje que debe ingresar un espacio7 v??lido
            cambiarColor("espacio7");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }else{
        
        cambiarColor("espacio7");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }
    if(espacio8=="X" || espacio8==null){

        var expresion= /^/;
        if(!expresion.test(espacio8)){
            // mostrara el mesaje que debe ingresar un espacio8 v??lido
            cambiarColor("espacio8");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }else{
        
        cambiarColor("espacio8");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }
    if(espacio9=="X" || espacio9==null){

        var expresion= /^/;
        if(!expresion.test(espacio9)){
            // mostrara el mesaje que debe ingresar un espacio9 v??lido
            cambiarColor("espacio9");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }else{
        
        cambiarColor("espacio9");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }
    if(espacio10=="X" || espacio10==null){

        var expresion= /^/;
        if(!expresion.test(espacio10)){
            // mostrara el mesaje que debe ingresar un espacio10 v??lido
            cambiarColor("espacio10");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }else{
        
        cambiarColor("espacio10");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }
     // validamos el campo empresa
    if(empresa=="" || empresa==null){

        cambiarColor("empresa");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(empresa)){
            // mostrara el mesaje que debe ingresar un empresa v??lido
            cambiarColor("empresa");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo rol
    if(rol=="" || rol==null){

        cambiarColor("rol");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(rol)){
            // mostrara el mesaje que debe ingresar un rol v??lido
            cambiarColor("rol");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo duracion
    if(duracion=="" || duracion==null){

        cambiarColor("duracion");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^/;
        if(!expresion.test(duracion)){
            // mostrara el mesaje que debe ingresar un duracion v??lido
            cambiarColor("duracion");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
     // validamos el campo funciones
     if(funciones=="" || funciones==null){

        cambiarColor("funciones");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(funciones)){
            // mostrara el mesaje que debe ingresar un funciones v??lido
            cambiarColor("funciones");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo lenguaje
    if(lenguaje=="" || lenguaje==null){

        cambiarColor("lenguaje");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(lenguaje)){
            // mostrara el mesaje que debe ingresar un lenguaje v??lido
            cambiarColor("lenguaje");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
     // validamos el campo sistemaopera
     if(sistemaopera=="" || sistemaopera==null){

        cambiarColor("sistemaopera");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(sistemaopera)){
            // mostrara el mesaje que debe ingresar un sistemaopera v??lido
            cambiarColor("sistemaopera");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo basedatos
    if(basedatos=="" || basedatos==null){

        cambiarColor("basedatos");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(basedatos)){
            // mostrara el mesaje que debe ingresar un basedatos v??lido
            cambiarColor("basedatos");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
     // validamos el campo herramienta
     if(herramienta=="" || herramienta==null){

        cambiarColor("herramienta");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(herramienta)){
            // mostrara el mesaje que debe ingresar un herramienta v??lido
            cambiarColor("herramienta");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    // validamos el campo otros
    if(otros=="" || otros==null){

        cambiarColor("otros");
        // mostramos el mensaje de Swal.firea
        Swal.fire("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-Z???????????????????????? ]*$/;
        if(!expresion.test(otros)){
            // mostrara el mesaje que debe ingresar un otros v??lido
            cambiarColor("otros");
            Swal.fire("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    $('form').submit();
    Swal.fire("Se envio correctamente");
    return true;

}
$('input').focus(function(){
    $('.Swal.fire').remove();
    colorDefault('textarea');
    colorDefault('nombrecarrera');
    colorDefault('universidad');
    colorDefault('pais');
    colorDefault('a??ofinalizacion');
    colorDefault('universidad2');
    colorDefault('pais2');
    colorDefault('a??ofinalizacion2');
    colorDefault('nombre3');
    colorDefault('pais3');
    colorDefault('a??ofinalizacion3');
    colorDefault('espacio');
    colorDefault('espacio2');
    colorDefault('espacio3');
    colorDefault('espacio4');
    colorDefault('espacio5');
    colorDefault('espacio6');
    colorDefault('espacio7');
    colorDefault('espacio8');
    colorDefault('espacio9');
    colorDefault('espacio10');
    colorDefault('empresa');
    colorDefault('rol');
    colorDefault('duracion');
    colorDefault('funciones');
    colorDefault('lenguaje');
    colorDefault('sistemaopera');
    colorDefault('basedatos');
    colorDefault('herramienta');
    colorDefault('otros');
});
$('textarea').focus(function(){
    $('.Swal.fire').remove();
    colorDefault('mensaje');
});
function colorDefault(dato){
    $('#' + dato).css({
        border: "1px solid #999"
    });
}
function cambiarColor(dato){
    $('#' + dato).css({
        border: "3px solid #dd5144"
    });
}


