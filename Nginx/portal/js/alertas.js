// Crear Grupo
function agregar(){
    Swal.fire({
        title: 'Nombre Nuevo Grupo',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Crear',
        showLoaderOnConfirm: true,
    }).then((result="") => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `'Grupo creado`,
          })
        }
    })

}

function eliminar(){
  Swal.fire({
    title: '¿Estás seguro?',
    text: "No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, bórralo!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Borrado!',
        'Su archivo ha sido eliminado.',
        'success'
      )
    }
  })

}

function cancelar(){
  Swal.fire({
    title: '¿Estás seguro?',
    text: "No podrás revertir esto!",
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, cancelar!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Cancelado!',
        

      )
    }
  })
  
}

function agregarEva(){
  Swal.mixin({
    input: 'text',
    confirmButtonText: 'Siguiente &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2', '3']
  }).queue([
    {
      title: 'Tipo',
      
    },
    'Pregunta',
    'Opciones'
  ]).then((result) => {
    if (result.value) {
      const answers = JSON.stringify(result.value)
      Swal.fire({
        title: 'Todo listo',
        html: `
          Pregunta es 
          <pre><code>${answers}</code></pre>
        `,
        confirmButtonText: 'Guardar'
      })
    }
  })
}

function guardar(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Creado con exito',
    showConfirmButton: false,
    timer: 1500
  })
}

