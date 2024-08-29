// usage-1: throw error
function fail(msg: string): never {
  throw new Error(msg);
}

function failError(msg: string): Error {
  return new Error(msg);
}

// usage-2: infinite loop
function loopForever(): never {
  while (true) {
    console.log("looping");
  }
}

// return type is void type
function sing(): void {
  console.log("la la la");
}

// ts-type-warning => A function returning 'never' cannot have a reachable end point.
/* function greet(): never { // error
  console.log("hello world");
} */

function neverReturn(): never {
  throw new Error("never return");
}

// auto inference type is string type
function nrFun(x: string | undefined) {
  if (x === undefined) {
    neverReturn();
  }
  return x;
}

// omitted never type
function sometimesThrow(): number {
  if (Math.random() > 0.5) {
    return 200;
  }
  throw new Error("always throw");
}

const result = sometimesThrow();

/**
 * never 类型表示肯定不会出现的值。它用在函数的返回值，就表示某个函数肯定不会返回值，即函数不会正常执行结束。
 * 
 * （1）抛出错误的函数。注意，只有抛出错误，才是 never 类型。如果显式用 return 语句返回一个 Error 对象，返回值就不是 never 类型。
 * （2）无限执行的函数。注意， never 类型不同于 void 类型。前者表示函数没有执行结束，不可能有返回值；后者表示函数正常执行结束，但是不返回值，或者说返回 undefined 。
 * 
 * 如果一个函数抛出了异常或者陷入了死循环，那么该函数无法正常返回一个值，因此该函数的返回值类型就是 never 。
 * 如果程序中调用了一个返回值类型为 never 的函数，那么就意味着程序会在该函数的调用位置终止，永远不会继续执行后续的代码。
 * 
 * 一个函数如果某些条件下有正常返回值，另一些条件下抛出错误，这时它的返回值类型可以省略 never 。
 * 
 *  never 是 TypeScript 的唯一一个底层类型，所有其他类型都包括了 never 。
 * 从集合论的角度看， number|never 等同于 number 。这也提示我们，函数的返回值无论是什么类型，都可能包含了抛出错误的情况。
 */