const express = require( 'express' );
const path = require( 'path' );
require( 'dotenv' ).config();
const _port = process.env.PORT || 3000;

// Create an Express app
const app = express();

// Node server
const server = require( 'http' ).createServer( app );

// Sockets messages
module.exports.io = require( 'socket.io' )( server );
require( './sockets/socket' );

// Path to the public folder
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ) );

// Start the server
server.listen( _port, ( err ) => {

    if ( err ) throw new Error( err );

    console.log( 'Server is running on port ' + _port, _port );

} );