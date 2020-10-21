/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.soap("/chargeCreditCard", "http://services.creditverifier.com//chargeCreditCard", "chargeCreditCardElement", function(req, res){
    // Check the request, make sure it is a compatible type, covers both SOAP 1.1 and 1.2
    if (!req.is('text/xml') && !req.is('application/xml') && !req.is('application/soap')) {
        return res.send(400, 'Invalid content type, expected application/soap+xml');
    }
    
    res.status(200);
	res.type('xml');
	res.render('TuresBalonProviders_ChargeCreditCardElement', { result : true });
});

Sandbox.soap("/verifyCreditCard", "http://services.creditverifier.com//verifyCreditCard", "verifyCreditCardElement", function(req, res){
    // Check the request, make sure it is a compatible type, covers both SOAP 1.1 and 1.2
    if (!req.is('text/xml') && !req.is('application/xml') && !req.is('application/soap')) {
        return res.send(400, 'Invalid content type, expected application/soap+xml');
    }
    
    res.status(200);
	res.type('xml');
	res.render('TuresBalonProviders_VerifyCreditCardElement', { result : true });
});

Sandbox.soap('/AA_bookFligth','http://services.aa.com//bookFligth', "bookFligthElement", function(req, res) {
    // Check the request, make sure it is a compatible type, covers both SOAP 1.1 and 1.2
    if (!req.is('text/xml') && !req.is('application/xml') && !req.is('application/soap')) {
        return res.send(400, 'Invalid content type, expected application/soap+xml');
    }
    
    res.status(200);
    res.type('xml');
	res.render('TuresBalonProviders_AABookFligthElement', { result : true });
});

Sandbox.soap('/AA_searchFlight','http://services.aa.com//searchFlight', "searchFlightElement", function(req, res) {
    // Check the request, make sure it is a compatible type, covers both SOAP 1.1 and 1.2
    if (!req.is('text/xml') && !req.is('application/xml') && !req.is('application/soap')) {
        return res.send(400, 'Invalid content type, expected application/soap+xml');
    }
    
    var oldDate = new Date(req.xmlDoc.get("//*[local-name()='departinDate']").text()); //new Date('2011-04-11T10:20:30Z')
    var newDate = new Date();
    
    res.status(200);
    res.type('xml');
	res.render('TuresBalonProviders_AASearchFligthElement', { 
	    cabin : req.xmlDoc.get("//*[local-name()='cabin']").text(), 
	    arrivingCity : req.xmlDoc.get("//*[local-name()='arrivingCity']").text(), 
	    departinCity : req.xmlDoc.get("//*[local-name()='departinCity']").text(),
	    departinDate : oldDate.toUTCString(),
	    price1 : (Math.floor(Math.random() * (300000 - 100000)) + 100000),
	    price2 : (Math.floor(Math.random() * (500000 - 300000)) + 300000),
	    price3 : (Math.floor(Math.random() * (1000000 - 500000)) + 500000),
	    number1 : Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,3).toUpperCase() + (Math.floor(Math.random() * (9999 - 1000)) + 1000),
	    number2 : Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,3).toUpperCase() + (Math.floor(Math.random() * (9999 - 1000)) + 1000),
	    number3 : Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,3).toUpperCase() + (Math.floor(Math.random() * (9999 - 1000)) + 1000),
	    arrivingDate1 : new Date(newDate.setTime(oldDate.getTime() + (75 * 60 * 1000))).toUTCString(),
	    arrivingDate2 : new Date(newDate.setTime(oldDate.getTime() + (90 * 60 * 1000))).toUTCString(),
	    arrivingDate3 : new Date(newDate.setTime(oldDate.getTime() + (60 * 60 * 1000))).toUTCString()
	});
});

Sandbox.soap('/HiltonBookRoom', 'http://services.hilton.com//bookRoom', "bookRoomElement", function(req, res) {
    // Check the request, make sure it is a compatible type, covers both SOAP 1.1 and 1.2
    if (!req.is('text/xml') && !req.is('application/xml') && !req.is('application/soap')) {
        return res.send(400, 'Invalid content type, expected application/soap+xml');
    }
    
    res.status(200);
    res.type('xml');
	res.render('TuresBalonProviders_HiltonBookRoomElement', { result : true });
});
/*
Sandbox.soap('/AV_reservarVuelo', 'http://servicios.avianca.com//reservarVuelo', "reservarVueloElement", function(req, res) {
    // Check the request, make sure it is a compatible type, covers both SOAP 1.1 and 1.2
    if (!req.is('text/xml') && !req.is('application/xml') && !req.is('application/soap')) {
        return res.send(400, 'Invalid content type, expected application/soap+xml');
    }
    
    res.status(200);
    res.type('xml');
	res.render('TuresBalonProviders_AVReservarVuelo', { result : true });
});
*/
Sandbox.soap('/AV_consultarVuelo', 'http://servicios.avianca.com//consultarVuelo', "consultarVueloElement", function(req, res) {
    // Check the request, make sure it is a compatible type, covers both SOAP 1.1 and 1.2
    if (!req.is('text/xml') && !req.is('application/xml') && !req.is('application/soap')) {
        return res.send(400, 'Invalid content type, expected application/soap+xml');
    }
    
    //var oldDate = new Date(req.xmlDoc.get("//*[local-name()='fechaSalida']").text()); //new Date('2011-04-11T10:20:30Z')
    //var newDate = new Date();
    
    res.status(200);
    res.type('xml');
	//res.render('TuresBalonProviders_AVConsultarVueloElement');
	/*res.render('TuresBalonProviders_AVConsultarVueloElement', { 
	    clase : req.xmlDoc.get("//*[local-name()='clase']").text(), 
	    ciudadOrigen : req.xmlDoc.get("//*[local-name()='ciudadOrigen']").text(), 
	    ciudadDestino : req.xmlDoc.get("//*[local-name()='ciudadDestino']").text(),
	    fechaSalida : oldDate.toUTCString(),
	    precio1 : (Math.floor(Math.random() * (450000 - 100000)) + 100000),
	    //precio2 : (Math.floor(Math.random() * (600000 - 450000)) + 450000),
	    //precio3 : (Math.floor(Math.random() * (1300000 - 600000)) + 600000),
	    number1 : 'AV' + (Math.floor(Math.random() * (9999 - 1000)) + 1000) + Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,1).toUpperCase(),
	    //number2 : 'AV' + (Math.floor(Math.random() * (9999 - 1000)) + 1000) + Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,1).toUpperCase(),
	    //number3 : 'AV' + (Math.floor(Math.random() * (9999 - 1000)) + 1000) + Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,1).toUpperCase(),
	    fechaLlegada1 : new Date(newDate.setTime(oldDate.getTime() + (60 * 60 * 1000))).toUTCString(),
	    //fechaLlegada2 : new Date(newDate.setTime(oldDate.getTime() + (75 * 60 * 1000))).toUTCString(),
	    //fechaLlegada3 : new Date(newDate.setTime(oldDate.getTime() + (55 * 60 * 1000))).toUTCString()
	});*/
});