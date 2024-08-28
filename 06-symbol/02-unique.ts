const s1: unique symbol = Symbol();

// ts-type-warning => A variable whose type is a 'unique symbol' type must be 'const'.
// let s2: unique symbol = Symbol(); // error

// s1 variable type is equivalent to s3 variable type, 
// s3 variable type is shorthand form of s1 variable type
const s3 = Symbol();

const a: unique symbol = Symbol();
const b: unique symbol = Symbol();

// ts-type-warning => This comparison appears to be unintentional because the types 'typeof a' and 'typeof b' have no overlap.
// console.log(a === b); // error

// a vs b ===> hello vs world
const hello: 'hello' = 'hello';
const world: 'world' = 'world';

// ts-type-warning => This comparison appears to be unintentional because the types 'hello' and 'world' have no overlap.
// console.log(hello === world); // error

// ts-type-warning => Type 'typeof a' is not assignable to type 'typeof c'.
// const c: unique symbol = a; // error

const d: typeof a = a; // ok

const e: symbol = a; // ok

// ts-type-warning => Type 'symbol' is not assignable to type 'unique symbol'.
// const f: unique symbol = e; // error

const foo1: unique symbol = Symbol.for('foo');
const foo2: unique symbol = Symbol.for('foo');

// ts-type-warning => This comparison appears to be unintentional because the types 'typeof foo1' and 'typeof foo2' have no overlap.
// console.log(foo1 === foo2);

const fooX: unique symbol = Symbol();
const fooY: symbol = Symbol();

interface Foo {
  [fooX]: string;
  // ts-type-warning => A computed property name in an interface must refer to an expression whose type is a literal type or a 'unique symbol' type.
  // [fooY]: string; // error
}

class C {
  static readonly foo: unique symbol = Symbol();
  // ts-type-warning => A property of a class whose type is a 'unique symbol' type must be both 'static' and 'readonly'.
  // static name: unique symbol = Symbol(); // error
  private static bar: symbol = Symbol('bar');

  public print() {
    console.log(C.bar.toString());
  }
}

new C().print();

/**
 * symbol 类型包含所有的 Symbol 值，但是无法表示某一个具体的 Symbol 值。
 * 
 * Symbol 值不存在字面量，必须通过变量来引用，所以写不出只包含单个 Symbol 值的那种值类型。比如， 5 是一个具体的数值，就用 5 这个字面量来表示，这也是它的值类型。
 * 
 * 为了解决这个问题，TypeScript 设计了 symbol 的一个子类型 unique symbol ，它表示单个的、某个具体的 Symbol 值。
 * 
 * 因为 unique symbol 表示单个值，所以这个类型的变量是不能修改值的，只能用 const 命令声明，不能用 let 声明。
 * const 命令为变量赋值 Symbol 值时，变量类型默认就是 unique symbol ，所以类型可以省略不写。
 * 
 * 相同参数的 Symbol.for() 方法会返回相同的 Symbol 值。TypeScript 目前无法识别这种情况，所以可能出现多个 unique symbol 类型的变量，等于同一个 Symbol 值的情况。
 * 
 * unique symbol 类型是 symbol 类型的子类型，所以可以将前者赋值给后者，但是反过来就不行。
 * 
 * unique symbol 类型的一个作用，就是用作属性名，这可以保证不会跟其他属性名冲突。如果要把某一个特定的 Symbol 值当作属性名，那么它的类型只能是 unique symbol，不能是 symbol。
 * 
 * unique symbol 类型也可以用作类（class）的属性值，但只能赋值给类的 readonly static 属性。
 * 
 * 某静态只读属性的类型是 unique symbol 时，static 和 readonly 两个限定符缺一不可，这是为了保证这个属性是固定不变的。
 */