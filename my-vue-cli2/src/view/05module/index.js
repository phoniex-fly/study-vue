import m, {d, say} from './sub/module1' /*全部导入+按需导入*/
import './sub/module2' /*直接导入，只单纯的执行某个模块中的代码，不需要得到模块向外暴露的成员*/

function f() {
  console.log(m)
  console.log(d)
  console.log(say)
}
