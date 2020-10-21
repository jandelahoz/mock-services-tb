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
    
    res.type('xml');
    res.status(200);
	res.render('TuresBalonProviders_BookFligthElement', { result : true });
})