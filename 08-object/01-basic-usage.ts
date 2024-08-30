const obj: {
  x: number,
  y: number,
} = {
  x: 1,
  y: 2,
}

// end with a semicolon.
type MyObj1 = {
  x: number;
  y: number;
}

// end with a comma.
type MyObj2 = {
  x: number,
  y: number,
}

// ts-type-warning => Property 'y' is missing in type '{ x: number; }' but required in type 'MyObj1'.
// const o1: MyObj1 = { x: 1 } // error

// ts-type-warning => Object literal may only specify known properties, and 'z' does not exist in type 'MyObj2'.
// const o2: MyObj2 = {x: 1, y:2, z:3} // error

// ts-type-warning => Property 'z' does not exist on type '{ x: number; y: number; }'.
// console.log(obj.z); // error
// obj.z = 1; // error

const myUser = {
  name: 'Alice',
}

// tsconfig.json => "strictNullChecks": true
// ts-type-warning => The operand of a 'delete' operator must be optional.
// delete myUser.name; // error
myUser.name = 'Bob';

type MyUser = {
  name: string,
}

const myUser2: MyUser = {
  name: 'Alice',
}

// tsconfig.json => "strictNullChecks": true
// ts-type-warning => The operand of a 'delete' operator must be optional.
// delete myUser2.name;  // error
myUser2.name = 'Bob';

console.log(myUser);
console.log(myUser2);

const obj1: {
  x: number,
  y: number,
  add(x: number, y: number): number,
  // or
  // add: (x: number, y: number) => number,
} = {
  x: 1,
  y: 2,
  add(x, y) {
    return x + y;
  },
}

type Name = MyUser['name']; // string

// way-1
type Obj1 = {
  x: number,
  y: number,
}
const o1: Obj1 = {
  x: 1,
  y: 2,
}

// way-2
interface Obj2 {
  x: number,
  y: number,
}
const o2: Obj2 = {
  x: 1,
  y: 2,
}

interface MyInterface {
  // extends property
  toString(): string,
  // self property
  prop: number,
}

const myInterface: MyInterface = {
  prop: 1
}

/**
 * 对象类型的最简单声明方法，就是使用大括号表示对象，在大括号内部声明每个属性和方法的类型。
 * 
 * 属性的类型可以用分号结尾，也可以用逗号结尾。
 * 
 * 一旦声明了类型，对象赋值时，就不能缺少指定的属性，也不能有多余的属性。读写不存在的属性也会报错。
 * 
 * 对象的方法使用函数类型描述。对象类型可以使用方括号读取属性的类型。（当开启严格空检查时）删除类型声明中存在的属性 name 会报错，但是可以修改它的值。
 * 
 * 除了 type 命令可以为对象类型声明一个别名，TypeScript 还提供了 interface 命令，可以把对象类型提炼为一个接口。
 * 
 * 注意，TypeScript 不区分对象自身的属性和继承的属性，一律视为对象的属性。
 */