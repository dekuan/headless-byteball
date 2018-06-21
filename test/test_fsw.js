/*jslint node: true */
"use strict";

var fs			= require( 'fs' );

var log_filename	= 'filename.log';


let writeStream		= fs.createWriteStream( log_filename, { flags : 'a' } );
writeStream.write( Date().toString() + ': ' );
writeStream.write( ( new Date() ).toLocaleString() );
writeStream.write( "\n" );
writeStream.end();
