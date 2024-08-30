// string reverse function declaration
function reverse(str: string): string;

// array reverse function declaration
function reverse(arr: any[]): any[];

// string | array[] reverse function declaration and implementation
// compatible with the first two.
function reverse(strOrArr: string | any[]): string | any[] {
  if (typeof strOrArr === 'string') {
    return strOrArr.split('').reverse().join('');
  } else {
    return strOrArr.slice().reverse();
  }
}

const str = reverse('hello');
const arr = reverse([1, 2, 3]);
console.log(str, arr); // 'olleh' [ 3, 2, 1 ]


function addFun(x: number, y: number): number;
function addFun(x: any[], y: any[]): any[];
function addFun(x: number | any[], y: number | any[]): number | any[] {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else if (Array.isArray(x) && Array.isArray(y)) {
    return x.concat(y);
  }
  throw new Error('Invalid arguments');
}

// ts-type-warning => This overload signature is not compatible with its implementation signature.
// function fooFn(x: boolean): void; // error
function fooFn(x: string): void;
function fooFn(x: number | string): void {
  console.log(x);
}

function barFn(x: any): number;
function barFn(x: string): 0 | 1;
function barFn(x: any): any { }

// priority of "barFn(x: any): number" over "barFn(x: string): 0 | 1"
// ts-type-warning => Type 'number' is not assignable to type '0 | 1'.
// const a: 0 | 1 = barFn('hi'); // error

class StringBuilder {
  #data = '';

  add(num: number): this;
  add(bool: boolean): this;
  add(str: string): this;
  add(value: any): this {
    this.#data += String(value);
    return this;
  }

  toString(): string {
    return this.#data;
  }
}

const builder = new StringBuilder();
builder.add(1).add('hello').add(true).toString(); // '1hellotrue'

function createElement(tag: 'a'): HTMLAnchorElement;
function createElement(tag: 'div'): HTMLDivElement;
function createElement(tag: 'canvas'): HTMLCanvasElement;
function createElement(tag: 'table'): HTMLTableElement;
function createElement(tag: string): HTMLElement {
  return document.createElement(tag);
}

type CreateElement = {
  (tag: 'a'): HTMLAnchorElement;
  (tag: 'div'): HTMLDivElement;
  (tag: 'canvas'): HTMLCanvasElement;
  (tag: 'table'): HTMLTableElement;
  (tag: string): HTMLElement;
}

// way-1
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any): number {
  return x.length;
}

// way-2
function len1(x: any[] | string): number {
  return x.length;
}

/**
 * 有些函数可以接受不同类型或不同个数的参数，并且根据参数的不同，会有不同的函数行为。
 * 这种根据参数类型不同，执行不同逻辑的行为，称为函数重载（function overload）。
 * 
 * TypeScript 对于“函数重载”的类型声明方法是，逐一定义每一种情况的类型。
 * 
 * 有一些编程语言允许不同的函数参数，对应不同的函数实现。但是，JavaScript 函数只能有一个实现，必须在这个实现当中，处理不同的参数。
 * 因此，函数体内部就需要判断参数的类型及个数，并根据判断结果执行不同的操作。
 * 注意，重载的各个类型描述与函数的具体实现之间，不能有其他代码，否则报错。
 * 函数重载的每个类型声明之间，以及类型声明与函数实现的类型之间，不能有冲突。
 * 
 * 重载声明的排序很重要，因为 TypeScript 是按照顺序进行检查的，一旦发现符合某个类型声明，就不再往下检查了，所以类型最宽的声明应该放在最后面，防止覆盖其他类型声明。
 * 
 * 对象的方法也可以使用重载。
 * 
 * 函数重载也可以用来精确描述函数参数与返回值之间的对应关系。
 * 由于重载是一种比较复杂的类型声明方法，为了降低复杂性，一般来说，如果可以的话，应该优先使用联合类型替代函数重载，除非多个参数之间、或者某个参数与返回值之间，存在对应关系。
 */