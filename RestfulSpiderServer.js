var restify = require('restify'), server = restify.createServer(); //for https  use {certificate:'', key:''}
var redis = require('redis'), redisClient = redis.createClient();
var socket = require('socket.io')(server), io = socket.listen(server);

server.use(restify.bodyParser());
server.listen(8080, function(){
       ///
});

var spider = require('./SpiderWeb.js');
io.sockets.on('connection', function(socket){
        spider.sockets(socket);
});

server = (function(server, redis, io){
        server = spider.webs(server);
        return server
})(server, redis, io);

