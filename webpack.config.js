/*定义输出文件路径*/
const path = require('path');

/*输出文件替换*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清空打包文件-dist
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');

module.exports = {
	/*单入口,library*/
	 entry: './src/index.js',
	/*多入口*/
	 // entry:{
	 // 	app: './src/index.js',
	 // 	/*代码分离-动态导入不需要多入口*/
	 // 	// another: './src/another-module.js'
	 // 	// print: './src/print.js'
	 // },
	 /*提取模版，第三方库，因第三方库很少像本地源代码频繁修改，减少向
	 服务器获取资源*/
	 // entry: {
	 // 	main: './src/index.js',
	 // 	vendor: [
	 // 	  'lodash'
	 // 	]
	 // },
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
			/*管理输出*/
			// title: 'output management'
			/*缓存*/
			title: 'Caching'
		}),
		/*模块热替换*/
		new webpack.HotModuleReplacementPlugin(),
		/*防止重复，将共同的模块剥离到一个js文件内，单独的js内不包括共同模块*/
		/*代码分离-动态导入不需要引用以下插件*/
			// new webpack.optimize.CommonsChunkPlugin({
			// 	name: 'common'
			// })
		/*提取模版-第三方库,vendor必须在runtime前，否则编译失败,
		但因为模块标识符的存在，导致第三方库hash值发生变化，
		所以，使用hashedModuleIdsPlugin插件保证vendor不变化*/
		 // new webpack.HashedModuleIdsPlugin(),
		 // new webpack.optimize.CommonsChunkPlugin({
		 // 	name: 'vendor'
		 // }),
		/*提取模版*/
		 // new webpack.optimize.CommonsChunkPlugin({
		 // 	name: 'runtime'
		 // })
		/*shimming-provideplugin*/
		// new webpack.ProvidePlugin({
		// 	$: 'jquery',
		// 	jQuery: 'jQuery',
		// 	/*从tslib包中导入函数__assign*/
		// 	__assign: ['tslib', '__assign']
		// })
	],
	/*library-若不配置externals的话，会将其他模块一起打包进library中*/
	// externals: {
	// 	"lodash":{
	// 		commonjs: 'lodash',
	// 		commonjs2: 'lodash',
	// 		amd: 'lodash',
	// 		root: "_"
	// 	}
	// },
	/*shimming-未压缩的commonJS／AMD文件优先于dist打包版本*/
	resolve： {
		alias: {
			jquery: "jquery/src/jquery"
		}
	}
	/*输出文件目录等*/
	output: {
		/*单入口输出*/
		 // filename: 'bundle.js',
		/*多入口输出*/
		 // filename: '[name].bundle.js',
		/*代码分离-动态导入,编译后，动态导入的模块会单独存入一个js文件*/
		 // chunkFilename: '[name].bundle.js',
		/*缓存,若文件文件未更改，则文件名中的hash值不变，若变化，则hash值变更*/
		 // filename: '[name].[hash].js',
		/*library*/
		// filename: 'webpack-numbers.js',
		// library:'webpackNumbers',
		// libraryTarget:'umd',
		path: path.resolve(__dirname, 'dist')
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
		},
		/*shimming-imports-loader／exports-loader*/
		{
			test: require.resolve("some-module"),
			/*imports-loader替换重写*/
			// use: 'imports-loader?this=>window'
			/*强制使用CommonJS路径*/
			// use: 'imports-loader?define=>false'
			/*exports-loader,将全局变量导出为CommonJS格式*/
			use: 'exports-loader?file,parse=helpers.parse'
		}
		],
		/*shimming-noParse选项，若无AMD／CommonJS版本时，可将dist版本
		标记为noParse，webpack将直接引入该模块且不会解析它*/
		noParse:/jquery|backbone/
	}
};