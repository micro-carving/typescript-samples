let x: any;

x = 1; // ok
x = "hello"; // ok
x = [1, 2, 3]; // ok
x(1); // ok
x.foo = 100; // ok

// any skips type checking, so it is not recommended to use it
// tsconfig: noImplicitAny = true, then any will be treated as error
// parameter 'x' implicitly has an 'any' type.
/* function add(x, y) {
  return x + y;
} */

// add(1, [1,2,3]); // ok

// variables contamination（变量污染）
let y: number;
y = x; // ok
y * 123; // ok
y.toFixed(); // ok

/**
 * 实际开发中， any 类型主要适用以下两个场合。
 * （1）出于特殊原因，需要关闭某些变量的类型检查，就可以把该变量的类型设为 any 。
 * （2）为了适配以前老的 JavaScript 项目，让代码快速迁移到 TypeScript，可以把变量类型设为 any 。
 * 有些年代很久的大型 JavaScript 项目，尤其是别人的代码，很难为每一行适配正确的类型，这时你为那些类型复杂的变量加上 any ，TypeScript 编译时就不会报错。
 */

/**
 * any 类型会关闭 TypeScript 的类型检查，所以使用 any 类型时，TypeScript 就会退化为 JavaScript，失去了类型检查的优势。
 * 从集合论的角度看， any 类型可以看成是所有其他类型的全集，包含了一切可能的类型。
 * TypeScript 将这种类型称为“顶层类型”（top type），意为涵盖了所有下层。
 * 任何类型都可以赋值给 any 类型， any 类型也可以赋值给任何其他类型。
 */