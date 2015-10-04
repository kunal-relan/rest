var express =  require('express');

var app = express();
var port = process.env.PORT || 3002;

app.get('/',function(req, res){
    res.send('Welcome this program is running on port : ' + port + "and I am really happy now" );


});

app.listen(port,function(){
  console.log("port on 3002");
});
