// Comando para establecer la conexion

const socket = io()

const label = $('#lblNuevoTicket')

socket.on('connect', ()=>{
    console.log('Conectado al servidor')
})

socket.on('disconnect', ()=>{
    console.log('Desconectado del servidor')
})

socket.on('estadoActual', (data)=>{
    label.text(data.actual)
    console.log(data)
})


buttonTicket = document.getElementById('crearTicket')

// $('button').on('click', function(){

//    //Enviar
//     socket.emit('siguienteTicket', (siguienteTicket)=>{

//         label.text(siguienteTicket)

//     })

// })

buttonTicket.addEventListener('click', ()=>{
    socket.emit('siguienteTicket', (siguienteTicket)=>{

                label.text(siguienteTicket)
        
    })
})