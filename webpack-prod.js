
var fs = require('fs');

//先清空上线文件夹下的文件
exports.folder = function(path){

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
    console.log(path + '目录删除成功！');

}

exports.clearMd5=function () {
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
}


var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.loaders = function () {
  
  var SOURCE_MAP = true
  SOURCE_MAP ? 'source-map' : false
  // generate loader string to be used with extract text plugin
  function generateExtractLoaders (loaders) {
    return loaders.map(function (loader) {
      return loader + '-loader' + (SOURCE_MAP ? '?sourceMap' : '')
    }).join('!')
  }

  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return {
      //http://vuejs.github.io/vue-loader/configurations/extract-css.html
      css: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css'])),
      less: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'less'])),
      sass: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'sass'])),
      stylus: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'stylus']))
  }
}