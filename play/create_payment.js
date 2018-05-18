/*jslint node: true */
"use strict";

var headlessWallet	= require( '../start.js' );
var eventBus		= require( 'byteballcore/event_bus.js' );


function onError( err )
{
	throw Error( err );
}

function createPayment()
{
	var composer	= require('byteballcore/composer.js');
	var network	= require('byteballcore/network.js');
	var callbacks	= composer.getSavingCallbacks
	({
		ifNotEnoughFunds	: onError,
		ifError			: onError,
		ifOk			: function( objJoint )
		{
			network.broadcastJoint( objJoint );
		}
	});

	var from_address	= "K4XVHLJFHFE6XEMQKEKDVWUA7NZSMMYL";
	var payee_address	= "RMUEYKKN5B47SKNW7PHAKFQX2W34XPIE";
	var arrOutputs		=
	[
		{ address: from_address, amount: 0 },		//	the change
		{ address: payee_address, amount: 1 }		//	the receiver
	];
	composer.composePaymentJoint( [ from_address ], arrOutputs, headlessWallet.signer, callbacks );
}

eventBus.on( 'headless_wallet_ready', createPayment );