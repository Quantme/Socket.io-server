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

});