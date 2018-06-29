module.exports = {
  mode: 'development',
  entry:  __dirname + "/index.js",
  output: {
    path: __dirname+'/dist',
    filename: "bundle.js",
    publicPath:"dist/"      //加这一句才能正确引用图片文件,ps:用devServer时记得要去掉这句
  },
  
  //配置本地服务器做测试
  devServer: {
    contentBase: __dirname,//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } ,

 //加载各种loader
 module: {  
        rules: [{  
                  test: /(\.jsx|\.js)$/,  
                  exclude: /node_modules/,  
                  loader: 'babel-loader',  
                  options:
                  {
                      presets:['es2015','react','stage-3'],
                      //import这个plugins实现antd组件的按需一次加载，无需再将组件和样式分开加载，styles设为true时加载的时less
                      plugins:[["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]]
                  }

            },
            {   //由于css-modules和antd不能公用，用css-modules打包时排除掉antd
                test: /\.css$/,
                exclude: /node_modules|antd\.css/,
                use: [{loader:"style-loader"},
                      {loader:"css-loader",
                       options:{modules:true}
                    }
                ]
              
            },
            {//这条loader规则针对的是antd的css样式
              test: /\.css$/,
              include: /node_modules|antd\.css/,
              use:[{loader:"style-loader"},
                   {loader:"css-loader"}
                  ]
            },
                //解决文件引用路径
            {   test: /\.(gif|jpg|png|woff|svg|eot|ttf|webp|JPG)\??.*$/, 
                use:[
                      {loader: 'url-loader',
                       options:{
                        limit:1024,
                        name:'[path][name].[ext]',
                        outputPath:'images'
                       }
                    }
                    ]},
            {   test: /\.(mp3)\??.*$/, 
                use:[
                      {loader: 'url-loader',
                       options:{  
                        limit:1024,                     
                        name:'[path][name].[ext]',
                        outputPath:'audio'
                       }
                    }
                    ]}                    

            ]  
    }  
}