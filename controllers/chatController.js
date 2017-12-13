module.exports = function(app){
   

    app.get('/chat', function(req,res){
        res.render('pages/chat');
    });


    app.post('/chat', function(req,res){
        
    });


    app.delete('/chat', function(req,res){
        
    });
}