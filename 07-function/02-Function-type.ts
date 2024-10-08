function doSomething(fn: Function) {
  fn(1, 2);
}

// doSomething((a, b) => a + b);

/**
 * TypeScript 提供 Function 类型表示函数，任何函数都属于这个类型。
 * Function 类型的值都可以直接执行。
 * 
 * Function 类型的函数可以接受任意数量的参数，每个参数的类型都是 any ，
 * 返回值的类型也是 any ，代表没有任何约束，所以不建议使用这个类型，给出函数详细的类型声明会更好。
 */