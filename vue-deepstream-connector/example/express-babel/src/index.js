// import app from './app';
import DynamoConnector from 'deepstreamio-storage-aws-dynamodb';
// var DynamoConnector = require('./dynamo.js')
var Deepstream = require( 'deepstream.io' );
var http = require( 'http' );
var express = require( 'express' );
var deepstream = new Deepstream('./config/config.yml');
deepstream.set('storage', new DynamoConnector({
	region: 'us-east-1',
	table: 'deepstream'
}));
var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + '/'));

deepstream.set( 'httpServer', server );



deepstream.start();
server.listen( 6020, '0.0.0.0' ,function(){
    console.log( 'HTTP server listening on 6020' );
});

// const { PORT = 8080 } = process.env;
// app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console
