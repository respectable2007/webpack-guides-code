// import _ from 'lodash';
// import './css/style.css';
// import myimage from './img/1.png';
// import data from './xml/data.xml';
import printMe from './print.js';
function componet() {
	var element = document.createElement('div');
	var btn = document.createElement('button');
	// element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn);

	// element.classList.add('hello');
	// var img = new Image();

	/*myimage存储图片最终的url*/
	// img.src = myimage;

	/*data包含可直接使用的已解析JSON数据*/
	// console.log(data);
	// element.appendChild(img);
	return element;
}
let element = componet();
document.body.appendChild(element);
/*模块热替换*/
if (module.hot) {
	module.hot.accept('./print.js', function(){
		console.log('Accept the updated printMe module!');
		// printMe();
		document.body.removeChild(element);
		element = componet();
		document.body.appendChild(element);
	})
}
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