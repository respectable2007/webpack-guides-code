/*定义输出文件路径*/
const path = require('path');

/*输出文件替换*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清空打包文件-dist
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');

module.exports = {
	/*单入口*/
	// entry: './src/index.js',
	/*多入口*/
	entry:{
		app: './src/index.js',
		/*代码分离-动态导入不需要多入口*/
		// another: './src/another-module.js'
		// print: './src/print.js'

	},
	/*开放环境，查找错误等*/
	devtool: 'inline-source-map',
	/*自动编译*/
	devServer: {
		contentBase: './dist',
		/*模块热替换*/
		hot: true
	},
	plugins:[
		//清空打包文件-dist
		new CleanWebpackPlugin(['dist']),
		/*输出文件替换*/
		new HtmlWebpackPlugin({
			title: 'output management'
		}),
		/*模块热替换*/
		new webpack.HotModuleReplacementPlugin(),
		/*防止重复，将共同的模块剥离到一个js文件内，单独的js内不包括共同模块*/
		/*代码分离-动态导入不需要引用以下插件*/
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'common'
		// })
	],
	/*输出文件目录等*/
	output: {
		/*单入口输出*/
		 // filename: 'bundle.js',
		filename: '[name].bundle.js',
		/*代码分离-动态导入,编译后，动态导入的模块会单独存入一个js文件*/
		chunkFilename: '[name].bundle.js',
		path:path.resolve(__dirname, 'dist')
	},
	/*css、图片、字体、csv、tsv、xml等资源加载*/
	module: {
		rules: [{
			test:/\.css$/,
			use:[
			  'style-loader',
			  'css-loader'
			]
		},
		{
			test:/\.(png|svg|jpg|gif)$/,
			use:[
			  'file-loader'
			]
		},{
			test:/\.(woff|woff2|eot|ttf|otf)$/,
			use:[
			  'file-loader'
			]
		},
		{
			test:/\.(csv|tsv)$/,
			use:[
			  'csv-loader'
			]
		},
		{
			test:/\.xml$/,
			use:[
			  'xml-loader'
			]
		}]
	}
};