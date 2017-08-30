// import _ from 'lodash';
// import './css/style.css';
// import myimage from './img/1.png';
// import data from './xml/data.xml';
// import printMe from './print.js';


// function componet() {
// 	var element = document.createElement('div');
// 	var btn = document.createElement('button');
// 	// element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// 	btn.innerHTML = 'Click me and check the console!';
// 	btn.onclick = printMe;
// 	element.appendChild(btn);

// 	// element.classList.add('hello');
// 	// var img = new Image();

// 	/*myimage存储图片最终的url*/
// 	// img.src = myimage;

// 	/*data包含可直接使用的已解析JSON数据*/
// 	// console.log(data);
// 	// element.appendChild(img);
// 	return element;
// }
// let element = componet();
// document.body.appendChild(element);


/*模块热替换*/
// if (module.hot) {
// 	module.hot.accept('./print.js', function(){
// 		console.log('Accept the updated printMe module!');
// 		// printMe();
// 		document.body.removeChild(element);
// 		element = componet();
// 		document.body.appendChild(element);
// 	})
// }


/*动态导入*/
// function getComponent() {
// 	return import(/* webpackChunkName:"lodash"*/ 'lodash').then(_ => {
// 		var element = document.createElement('div');
// 		element.innerHTML = _join(['Hello', 'webpack'], ' ');
// 		return element;
// 	}).catch(error => 'An error occurred while loading the component');
// }
// getComponent().then(component => {
// 	document.body.appendChild(component)
// })


/*使用某个依赖包????后，可将getComponent内代码简化*/
// async function getComponent(){
// 	var element = document.createElement('div');
// 	const _ = await import(/* webpackChunkName: 'lodash'*/ 'lodash');
// 	element.innerHTML = _join.(['Hello', 'webpack'], ' ');
// 	return element;
// }
// getComponent().then(component => {
// 	document.body.appendChild(component);
// })


/*懒加载*/
// import _ from 'lodash';

// function component() {
// 	var element = document.createElement('div');
// 	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// 	var button = document.createElement('button');
// 	var br = document.createElement('br');

// 	button.innerHTML = 'Click me and look at the console!';
// 	element.appendChild(br);
// 	element.appendChild(button);
// 	/*点击时，加载print.js代码模块*/
// 	button.onclick = e => import(/*webpackChunkName: "print"*/ './print').then(module => {
// 		var print = module.default;
// 		print();
// 	})

// 	return element;
// }

// document.body.appendChild(component());


/*模块标识符*/
// import _ from 'lodash';
// import Print from './print.js';

// function component(){
// 	var element = document.createElement('div');
// 	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// 	// element.onclick = Print.bind(null, 'Hello webpack!');
// 	return element;
// }
// document.body.appendChild(component());


/*创建Library*/
import _ from 'lodash';
import numRef from './ref.json';

export function numToWord(num) {
	return _.reduce(numRef,(accum, ref) => {
		return ref.num === num ? ref.word : accum;
	}, '');
}
export function wordToNum(word) {
	return _.reduce(numRef, (accum, ref) => {
		return ref.word === word && word.toLowerCase() ? ref.num :accum;
	}, -1);
}














