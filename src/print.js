// export default function printMe() {
// 	console.log('I get called from print.js!');
// 	// cosnole.log('I get called from print.js!');
// }

/*懒加载*/
console.log('The print.js module has loaded! See the network tab in dev tools...');

export default () => {
	console.log('Button Clicked: here\'s "some text"!');
}