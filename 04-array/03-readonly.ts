const a1 = [0, 1];

a1[0] = 2;

const a2: readonly number[] = [0, 1];

// ts-type-warning => Index signature in type 'readonly number[]' only permits reading.
// a2[0] = 2; // error

// ts-type-warning => Property 'push' does not exist on type 'readonly number[]'.
// a2.push(2); // error

// ts-type-warning => Index signature in type 'readonly number[]' only permits reading.
// delete a2[0]; // error

let a3: number[] = [0, 1];
let a4: readonly number[] = a3; // ok

// ts-type-warning => The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
// a3 = a4; // error

function getSum(s: number[]) {

}

// ts-type-warning => Argument of type 'readonly number[]' is not assignable to parameter of type 'number[]'. The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
// getSum(a2); // error

// ts-type-warning => 'readonly' type modifier is only permitted on array and tuple literal types.
// const a5: readonly Array<number> = [0, 1]; // error

const a6: ReadonlyArray<number> = [0, 1]; // ok
const a7: Readonly<number[]> = [0, 1]; // ok

const a8 = [0, 1] as const;
// ts-type-warning => Cannot assign to '0' because it is a read-only property.
// a8[0] = 2; // error

/**
 * JavaScript 规定， const 命令声明的数组变量是可以改变成员的。
 * TypeScript 允许声明只读数组，方法是在数组类型前面加上 readonly 关键字。
 * TypeScript 将 readonly number[] 与 number[] 视为两种不一样的类型，后者是前者的子类型。
 * 子类型继承了父类型的所有特征，并加上了自己的特征，所以子类型 number[] 可以用于所有使用父类型的场合，反过来就不行。
 * 由于只读数组是数组的父类型，所以它不能代替数组。
 * readonly 关键字不能与数组的泛型写法一起使用。
 * TypeScript 提供了两个专门的泛型，用来生成只读数组的类型。
 * 
 * 泛型 ReadonlyArray<T> 和 Readonly<T[]> 都可以用来生成只读数组类型。两者尖括号里面的写法
 * 不一样， Readonly<T[]> 的尖括号里面是整个数组（ number[] ），而 ReadonlyArray<T> 的尖括号里面是数组成员（ number ）。
 * 
 * 只读数组还有一种声明方法，就是使用“const 断言”。
 */