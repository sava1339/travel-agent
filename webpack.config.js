const path = require('path')
const HTMLwebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname,'src','index.js') ,
    output:{
        path: path.resolve(__dirname,'dist'),
        publicPath:"auto",
        filename:"build.js"
    },
    devServer:{
        historyApiFallback:true,
        static:{
            directory:path.join(__dirname,'/')
        },
        port:8081,
        open:true
    },
    module:{
        rules:[
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js/,
                exclude:/node_modules/,
                use:["babel-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins:[
        new HTMLwebpackPlugin({
            template: path.resolve(__dirname,'src','index.html')
        })
    ]
}