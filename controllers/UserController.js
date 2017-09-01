function UserController(){
    
    this.index = function(req,res,next){
                     
        if(!req.session.user){
            res.send('Not Authenticated');
        }
        
        res.render('user',{user: req.session.user, name: req.params.name});            
        
    }
}

module.exports = UserController;