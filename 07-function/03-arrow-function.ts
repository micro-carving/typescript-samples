const repeat = (str: string, times: number) => str.repeat(times);

function greet(fn: (a: string) => void): void {
  fn('Hello World');
}

// greet((str) => console.log(str)); // Hello World

type Person = {
  id: number
  name: string;
}

const people = ['John', 'Jane', 'Mary'].map((name, index): Person => ({ id: ++index, name }));
// console.log('people => ', people); // people =>  [ { id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Mary' } ]

type Color = {
  value: string;
}

// const colors = ['red', 'green', 'blue'].map((color): Color => ({ value: color })); // ok

// ts-type-warning =>  Argument of type '(color: Color) => { value: Color; }' is not assignable to parameter of type '(value: string, index: number, array: string[]) => { value: Color; }'.
// const colors = ['red', 'green', 'blue'].map((color: Color) => ({ value: color })); // error

// ts-type-warning =>  Cannot find name 'color'. Did you mean 'colors'?
// const colors = ['red', 'green', 'blue'].map(color: Color => ({ value: color })); // error

/**
 * 箭头函数是普通函数的一种简化写法，它的类型写法与普通函数类似。
 * 
 * 箭头函数类型声明写在箭头函数的定义里面。其中，参数的类型写在参数名后面，返回值类型写在参数列表的圆括号后面。
 * 
 * 类型写在箭头函数的定义里面，与使用箭头函数表示函数类型，写法有所不同。
 */