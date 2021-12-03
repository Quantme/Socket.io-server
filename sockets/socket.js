const { io } = require( '../index' );

io.on( 'connection', client => {

    console.log( 'Client connected' );

    client.on( 'disconnect', () => {
        console.log( 'Client disconnected' )
    });

    client.on( 'mensaje', payload => {
        console.log( 'Message:', payload );
        io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );
    });

    client.on('emitir-mensaje', ( payload ) => {

        // console.log(payload);

        // emite a todos!
        // io.emit('nuevo-mensaje', payload );

        // emite a todos menos el que lo emitió
        client.broadcast.emit('nuevo-mensaje', payload );

    })

});