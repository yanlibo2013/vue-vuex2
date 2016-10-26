/*
 * @Author: henry yan
 * @Date:   2016-10-19 16:47:00
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-19 16:47:00
 */
//先清空 build 文件夹下的文件
var fs = require('fs'),
    buildPath = './build';

//删除build目录
deleteFolderRecursive(buildPath);
function deleteFolderRecursive(path) {
    var files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
    console.log(path + '目录删除成功！')
}

//readfile
//先把index.html里面关于style和js的hash值都删除掉，避免在使用 npm run dev 的时候，路径还是压缩后的路径
fs.readFile("index.html", 'utf-8', function (err, data) {
    if (err) {
        console.log("error");
    } else {
        //将index.html里面的hash值清除掉
        var devhtml = data.replace(/((?:href|src)="[^"]+\.)(js|css)(\?\w{20})/g, '$1$2');
        fs.writeFileSync('index.html', devhtml);
        console.log("版本号擦除完成!");
    }
});

var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var production = process.env.PRODUCTION;

//webpack插件
var plugins = [
    new ExtractTextPlugin(production ? "style.css?[chunkhash]" : "style.css", {
        allChunks: true,
        disable: false
    }),
    new webpack.optimize.CommonsChunkPlugin(production ? "vendor.js?[chunkhash]" : "vendor.js"),
    function () {
        return this.plugin('done', function (stats) {
            var content;
            content = JSON.stringify(stats.toJson().assetsByChunkName, null, 2);
            console.log('版本是：' + JSON.stringify(stats.toJson().hash));
        });
    },
];

var HtmlWebpackPlugin = require("html-webpack-plugin");
plugins.push(new HtmlWebpackPlugin({
    filename: '../index.html',
    template: './src/index.tpl',
    inject: true
}));


var entry = ['./src/main'],
    cdnPrefix = "",
    buildPath = "/build/",
    publishPath = production ? cdnPrefix + buildPath : buildPath;

module.exports = {
    debug: true,
    entry: entry,
    output: {
        path: __dirname + buildPath,
        filename: production ? "[id].build.js?[chunkhash]" : "[id].build.js",
        publicPath: publishPath,
        // chunkFilename: production ? "[id].build.js?[chunkhash]" : "[id].build.js",
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", 'css-loader?sourceMap!sass-loader!cssnext-loader')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", "css-loader?sourceMap!cssnext-loader")
        }, {
            test: /\.js$/,
            exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'babel'
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: "file-loader?name=images/[hash].[ext]"
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }]
    },
    vue: {
        autoprefixer: false
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    resolve: {
        extension: ['', '.js','.vue','.css'],
        alias: {
            filter: path.join(__dirname, 'src/filters')
        }
    },
    plugins: plugins,
    devtool: '#source-map'
};