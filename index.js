var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/', function(req,res){
    console.log("Dummy data test");
    var resObject = {
      dummyData: "ping from root test"
    };
    res.write(JSON.stringify(resObject));
    res.end();
  });

app.get('/navRecords', function(req, res){
  io.emit('message', {route: 'records', data:'testmsg'});
  var resObject = {
    navData: "ping from nav records test"
  };
  res.write(JSON.stringify(resObject));
  res.end();
});

app.get('/navDash', function(req, res){
    io.emit('message', {route: 'dash', data:'testmsg'});
    var resObject = {
      dashData: "ping from nav dash test"
    };
    res.write(JSON.stringify(resObject));
    res.end();
});

app.get('/navForm', function(req, res){
    io.emit('message', {route: 'form', data:'testmsg'});
    var resObject = {
      formData: "ping from form test"
    };
    res.write(JSON.stringify(resObject));
    res.end();
  });

app.get('/navDico', function(req, res){
    io.emit('message', {route: 'dico', data:'testmsg'});
    var resObject = {
      dicoData: "ping from DICO test"
    };
    res.write(JSON.stringify(resObject));
    res.end();
});

app.get('/navBloodMeasure', function(req, res){
    io.emit('message', {route: 'blood', data:'testmsg'});
    var resObject = {
      bloodPrssr: "ping from blood pressure test"
    };
    res.write(JSON.stringify(resObject));
    res.end();
});

io.on('connection', function(socket){
    console.log("new socket connection");
    // var mymessage = {
    //     test: "ping from inside io connection block"
    //   };
    // io.emit('message', mymessage);
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
