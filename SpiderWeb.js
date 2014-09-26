module.exports.webs = function(server){
  server.get('/example', function(req, res, next){
    ///
  };
  server.post('/postexample', function(req, res, next){
    ///
  });
  
  return server;
};

module.exports.sockets = function(socket){
  socket.emit('test', {hello: 'world'});
  socket.on('my other event', function(data){
    ///
  });
  return socket;
};
