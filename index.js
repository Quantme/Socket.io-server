const express = require( 'express' );
const path = require( 'path' );
require( 'dotenv' ).config();
const _port = process.env.PORT || 3000;

// Create an Express app
const app = express();

// Node server
const server = require( 'http' ).createServer( app );
const io = require( 'socket.io' )( server );

// Sockets messages
io.on( 'connection', client => {

    console.log( 'Client connected' );

    client.on( 'disconnect', () => {
        console.log( 'Client disconnected' )
    });

});

// Path to the public folder
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ) );

server.listen( _port, ( err ) => {

    if ( err ) throw new Error( err );

    console.log( 'Server is running on port ' + _port, _port );

} );