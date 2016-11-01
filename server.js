/*
 * @Author: henry yan
 * @Date:   2016-10-19 16:47:00
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-19 16:47:00
 */

'use strict'

// -- api server

var http = require("http");
var Api = require("./server_api_define.js").Api;

var api_root_dir = __dirname + "/../api";;
console.log("root_dir : " + api_root_dir)

var api = new Api();
var server = http.createServer();
server.on("request", function(request, response) {
    api.dispatch(request, response, api_root_dir);
});
server.listen(3001);

console.log("-- file api server is running at 3001 port.\n");

// webapck start

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
config.entry.unshift('webpack-dev-server/client?http://localhost:4000', "webpack/hot/dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());

//启动服务
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot:true,
    historyApiFallback: true,
    stats: { colors: true},
    proxy: {
        '/qm/*': {
            target: 'http://localhost:3001',
            secure: false
        }
    }
}).listen(4000, 'localhost', function(err, result) {
    if (err) {
        console.log(err);
    };
    console.log('-- html dev server running at localhost:4000');
});
