// parameter default value
function createPoint(x: number = 0, y: number = 0): [number, number] {
  return [x, y];
}

createPoint(); // [0, 0]

// parameter default value can be inferred from the return type
function createPoint2(x = 0, y = 0) {
  return [x, y];
}

// ts-type-warning => Parameter cannot have question mark and initializer.
// function f1(x?: number = 0) { } // error

function f2(x = 123) {
  return x;
}
// explicitly pass undefined to use default value
f2(undefined); // 123

function f3(x: number = 0, y: number) {
  return x + y;
}

// ts-type-warning => Expected 2 arguments, but got 1.
// f3(1); // error
f3(undefined, 1);

/**
 * TypeScript 函数的参数默认值写法，与 JavaScript 一致。
 * 
 * 设置了默认值的参数，就是可选的。如果不传入该参数，它就会等于默认值。
 * 
 * 可选参数与默认值不能同时使用。
 * 
 * 设有默认值的参数，如果传入 undefined ，也会触发默认值。
 * 
 * 具有默认值的参数如果不位于参数列表的末尾，调用时不能省略，如果要触发默认值，必须显式传入 undefined 。
 */