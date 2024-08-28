const arr = [1, 2];

function func1(x: number, y: number) {}

// ts-type-warning => A spread argument must either have a tuple type or be passed to a rest parameter.
// func1(...arr); // error

console.log(...arr);

const tuple: [number, number] = [1, 2];
func1(...tuple); // ok

const tupleArr = [1, 2] as const;
func1(...tupleArr); // ok

/**
 * 扩展运算符（ ... ）将数组（注意，不是元组）转换成一个逗号分隔的序列，这时 TypeScript 会认为这个序列的成员数量是不确定的，因为数组的成员数量是不确定的。
 * 
 * 这导致如果函数调用时，使用扩展运算符传入函数参数，可能发生参数数量与数组长度不匹配的报错。
 * 
 * 有些函数可以接受任意数量的参数，这时使用扩展运算符就不会报错。比如：console.log()、Array.prototype.push() 等。
 * 
 * 解决扩展运算符（ ... ）报错方法：
 * 一种方式把成员数量不确定的数组，写成成员数量确定的元组，再使用扩展运算符；
 * 另一种写法是使用 as const 断言，将数组变为只读元组。
 */