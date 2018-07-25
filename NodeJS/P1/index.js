var http = require('http');
var url = require('url');

var operations = require("./sum");
var resta = require("./resta");
var mult = require("./mult");
var div = require ("./div");

http.createServer(
    (req, res) => {
        var q = url.parse(req.url, true).query;
        var regex=  RegExp('[a-z]+[A-z]+');
       
        res.writeHead(200, { ContentType: 'text/html'});
        if(!isNaN(q.n1) && !isNaN(q.n2) && !isNaN(q.opc)  ){
            
                switch(parseInt(q.opc)){
    
                    case 1:   res.end( "Suma: "+q.n1+"+ "+q.n2+"= " + operations.Sum(q.n1 , q.n2)); break;
                    case 2:   res.end("Resta: " +q.n1+"- "+q.n2+"= " + resta.Resta(q.n1, q.n2)); break;
                    case 3:   res.end("Multiplicacion: " +q.n1+"* "+q.n2+"= " +  mult.Mult(q.n1, q.n2)); break;
                    case 4:   res.end("Division: " +q.n1+"/ "+q.n2+"= " +  div.Div(q.n1, q.n2)); break;
                    default : res.end("No validosss"); break;
                }
            
        }
       
        else{
            res.end("No valido");
        }
        
     /*   res.end( "Suma: " + operations.Sum(q.n1 , q.n2) + "Resta: " + resta.Resta(q.n1, q.n2) 
    + "<br>Multiplicacion: " + mult.Mult(q.n1, q.n2) + "Division " + div.Div(q.n1 ,q.n2));*/
    }
).listen(8080);


