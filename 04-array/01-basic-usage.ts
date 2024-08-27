let arr: number[] = [1, 2, 3, 4, 5]; // number type

let arr1: (number | string)[] = [1, 2, 3, 4, 5, 'hello']; // union type

let arr2: any[]; // any type

let arr3: Array<number> = [1, 2, 3, 4, 5]; // Array<number> type

let arr4: Array<number | string> = [1, 2, 3, 4, 5, 'hello']; // Array<number | string> type

arr = [];
arr = [1];
arr = [1, 2, 3];

arr[3] = 11;
arr.length = 2;

console.log(arr); // [1, 2]

let foo = arr[3]; // ok
console.log(foo); // undefined

type Names = string[];
type Name1 = Names[0]; // string
type Name2 = Names[number]; // string

/**
 * TypeScript 数组有一个根本特征：所有成员的类型必须相同，但是成员数量是不确定的，可以是无限数量的成员，也可以是零成员。
 * 数组的类型有两种写法。第一种写法是在数组成员的类型后面，加上一对方括号。数组类型的第二种写法是使用 TypeScript 内置的 Array 接口。
 * 
 * TypeScript 允许使用方括号读取数组成员的类型。TypeScript 不会对数组边界进行检查，越界访问数组并不会报错。
 */