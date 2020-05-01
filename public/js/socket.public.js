
//Comando para establecer la conexion

const socket = io()

const lblTicket1 = $('#lblTicket1'),
      lblTicket2 = $('#lblTicket2'),
      lblTicket3 = $('#lblTicket3'),
      lblTicket4 = $('#lblTicket4')
    
const lblEscritorio1 = $('#lblEscritorio1'),
      lblEscritorio2 = $('#lblEscritorio2'),
      lblEscritorio3 = $('#lblEscritorio3'),
      lblEscritorio4 = $('#lblEscritorio4')


const lblTickets = [lblTicket1,lblTicket2,lblTicket3,lblTicket4]
      lblEscritorios = [lblEscritorio1,lblEscritorio2,lblEscritorio3,lblEscritorio4]


socket.on('estadoActual', (data) =>{
    actualizaHTML(data.ultimos4)
})


socket.on('ultimos4', (data) =>{

    var audio = new Audio('audio/new-ticket.mp3')
    audio.play()

    actualizaHTML(data.ultimos4)
})


function actualizaHTML(ultimos4){
    for(let i=0; i < ultimos4.length ; i++){
        lblTickets[i].text('Ticket ' + ultimos4[i].numero)
        lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio)
        console.log(ultimos4[i])
    }
}



