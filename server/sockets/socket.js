const { io } = require('../server');
const {TicketControl} = require('../classes/ticket-control')


const ticketControl = new TicketControl()


io.on('connection', (client) => {

    //Escuchar client

    client.on('siguienteTicket', (callback)=>{
        
       let siguiente = ticketControl.siguiente()

        callback(siguiente)

    })

    //Enviar
    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()
    })

    client.on('atenderTicket', (data, callback) =>{

        if(!data.escritorio){
            return callback({
                err: true,
                message: 'El escritorio es necesario'
            })
        }

        let atenderTicker = ticketControl.atenderTicket(data.escritorio)

        callback(atenderTicker)

        //Actualizar/notificar cambios en los ultimos 4

        client.broadcast.emit('ultimos4', {
            ultimos4: ticketControl.getUltimos4()
        })
        /*  ANOTACION para el Mandril

            Cuando mandas un objeto con la DATA, tienes por ejemplo este objeto DATA

            Tienes luego que acceder al arreglo que esta dentro de la DATA

            -----DATA.ultimos4-------  NO SEAS MANDRIL

        */
       
    })

})