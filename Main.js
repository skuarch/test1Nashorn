#!./jdk1.8.0_45/bin/jjs -scripting

load('Connection.js');
load('Config.js');

var socket = java.net.Socket;
var thread = java.lang.Thread;
var inputStreamReader = java.oi.InputStreamReader;

try{

	socket = new java.net.Socket("localhost", 80);
	inputStreamReader = new java.io.InputStreamReader(socket.getInputStream(),'utf-8');

	print(timeout);
	print(socket);

}catch(e){
	print(e);
}

print('todo bien');