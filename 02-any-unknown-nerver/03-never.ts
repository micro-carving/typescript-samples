let n:never;

function fn(x: string | number) {
  if (typeof x === 'string') {
    x.toLowerCase;
  } else if (typeof x === 'number') {
    x.toFixed();
  } else {
    x;// never
  }
}

function fn2(): never {
  throw new Error('error');
}

let n1:number = fn2(); // ok
let n2:string = fn2(); // ok
let n3:boolean = fn2(); // ok

/**
 * 为什么 never 类型可以赋值给任意其他类型呢？这也跟集合论有关，空集是任何集合的子集。TypeScript 就相应规
 * 定，任何类型都包含了 never 类型。因此， never 类型是任何其他类型所共有的，TypeScript 把这种情况称为 “底层类型”（bottom type）。
 * 总之，TypeScript 有两个“顶层类型”（ any 和 unknown ），但是“底层类型”只有 never 唯一一个。
 */
