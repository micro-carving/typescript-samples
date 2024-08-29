// x is an optional parameter
function fun(x?: number) {
  return x;
};

fun(); // valid
fun(10); // valid
fun(undefined); // valid

function fun1(x: number | undefined) {
  return x;
}

// ts-type-warning => Expected 1 arguments, but got 0.
// fun1(); // error

// ts-type-warning => A required parameter cannot follow an optional parameter.
// let myFunc: (a?: number, b: number) => number; // error

let myFunc: (a: number | undefined, b: number) => number;

let myFunc1: (a: number, b?: number) => number;
myFunc1 = function (x, y) {
  if (y === undefined) {
    return x;
  }
  return x + y;
}

/**
 * 如果函数的某个参数可以省略，则在参数名后面加问号表示。
 * 
 * 参数名带有问号，表示该参数的类型实际上是 原始类型 |undefined ，它有可能为 undefined 。
 * 
 * 参数 x 是可选的，等同于说 x 可以赋值为 undefined 。但是，反过来就不成立，类型显式设为 undefined 的参数，就不能省略。
 * 
 * 参数 x 的类型是 number|undefined ，表示要么传入一个数值，要么传入 undefined ，如果省略这个参数，就会报错。
 * 
 * 函数的可选参数只能在参数列表的尾部，跟在必选参数的后面。
 * 
 * 如果前部参数有可能为空，这时只能显式注明该参数类型可能为 undefined 。
 * 
 * 函数体内部用到可选参数时，需要判断该参数是否为 undefined 。
 */