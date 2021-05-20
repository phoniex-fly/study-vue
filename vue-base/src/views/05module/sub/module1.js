var a = 10;
var b = 20;
var c = 30;

var show = function () {
  console.log("ok")
}

/*默认导出*/
export default {
  a, b, show
}

/*按需导出*/
export var d = 40;

export function say() {
  console.log("hello")
}
