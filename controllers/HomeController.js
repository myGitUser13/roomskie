function HomeController(){
    
    this.index = function(req,res,next){
        
        res.render('home');
        
    }
}

module.exports = HomeController;