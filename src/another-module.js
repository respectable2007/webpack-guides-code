/*代码分离
  与index.js引用相同模块
*/
import _ from 'lodash';
console.log(
	_.join(['Another', 'module', 'loaded!'], ' ')
);