
function TestController(){
    self = this;

    self.index = function(req,res,next){    
     // res.send("ok");
     self.validate({username:req.params.username},function(err){
      // console.log(err);
      
      if(null !== err){
       req.socket.send(err.message);
       next();       
       
      }
     });

     res.send("ok");
    //  self.validate({password:req.params.password},function(result){
    //   if(result !== null){
    //    res.send(result);
    //   }     
    // });

  };    
}

module.exports = TestController;