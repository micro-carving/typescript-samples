const op: {
  x: number;
  y?: number;
} = {
  x: 1,
  // y: 2,
}

type User = {
  firstName: string;
  lastName?: string;
  // lastName?: string | undefined
}

const user: User = {
  firstName: 'John',
  lastName: undefined,
}

const usr: User = {
  firstName: 'John',
}

// tsconfig.json => "strictNullChecks": true
// ts-type-warning => 'usr.lastName' is possibly 'undefined'.
// usr.lastName.toLowerCase(); // error

if (usr.lastName !== undefined) {
  console.log(usr.lastName.toLowerCase());
}

// way-1
let firstName = (usr.firstName === undefined) ? 'Foo' : usr.firstName;
let lastName = (usr.lastName === undefined) ? 'Bar' : usr.lastName;

// way-2
firstName = usr.firstName ?? 'Foo';
lastName = usr.lastName ?? 'Bar';

// tsconfig.json => "strictNullChecks": true, "exactOptionalPropertyTypes": true, next line will be error
const uo: {
  x: number,
  y?: number,
} = {
  x: 1,
  y: undefined
}

type A = {
  x: number,
  y?: number,
}

type B = {
  x: number,
  y: number | undefined,
}

const a: A = { x: 1 };
// ts-type-warning => Property 'y' is missing in type '{ x: number; }' but required in type 'B'.
// const b: B = { x: 1 }; // error

/**
 * 如果某个属性是可选的（即可以忽略），需要在属性名后面加一个问号。
 * 
 * 可选属性等同于允许赋值为 undefined ，读取一个没有赋值的可选属性时，返回 undefined 。读取可选属性之前，必须检查一下是否为 undefined 。
 * 
 * 判空赋值有两种方法：方法一使用三元运算符 ?: ，判断是否为 undefined ，并设置默认值。方法二使用空合并运算符 ?? ，判断是否为 undefined 或 null ，并设置默认值。
 * 
 * TypeScript 提供编译设置 ExactOptionalPropertyTypes ，只要同时打开这个设置和 strictNullChecks ，可选属性就不能设为 undefined 。
 * 
 * 注意，可选属性与允许设为 undefined 的必选属性是不等价的。
 * 如果对象属性是一个可选属性，那就可以省略不写；如果是允许设为 undefined 的必选属性，一旦省略就会报错，必须显式地设为 undefined 。
 */