var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://jeff:jeff123@ds137206.mlab.com:37206/checkmark')

var checkmarkSchema = new mongoose.Schema({
    item: String
});

var checkmark = mongoose.model('Checkmark', checkmarkSchema);


var urlencodedParser = bodyParser.urlencoded({extended:false});



module.exports = function(app){
    
    app.use( function( req, res, next ) {
        // this middleware will call for each requested
        // and we checked for the requested query properties
        // if _method was existed
        // then we know, clients need to call DELETE request instead
        if ( req.query._method == 'DELETE' ) {
            // change the original METHOD
            // into DELETE method
            req.method = 'DELETE';
            // and set requested url to /user/12
            req.url = req.path;
        }       
        next(); 
        
    });


    app.get('/', function(req,res){
        checkmark.find({},function(err,data){
            if(err) throw err;
            console.log(data);
            res.render('pages/index',{checkmarks: data});
        });
    });


    app.post('/', urlencodedParser,function(req,res){

        var newcheckmark = checkmark(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);

        });        
    });


    app.delete('/:id', function(req,res){
        checkmark.find({_id: req.params.id}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    });
}