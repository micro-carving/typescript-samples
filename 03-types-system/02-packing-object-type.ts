console.log('hello'.charAt(0)); // h

const s = new String('hello');
console.log(s); // [String 'hello']
console.log(typeof s); // object

const b = new Boolean(true);
console.log(b); // [Boolean: true]
console.log(typeof b); // object

const n = new Number(42);
console.log(n); // [Number: 42]
console.log(typeof n); // object

const s1 = 'hello'; // literal 字面量
const s2 = new String('hello'); // object 包装对象

console.log(s1 === s2); // false

const s3: String = 'hello'; // ok
const s4: String = new String('hello'); // ok
const s5: string = 'hello'; // ok
// ts-type-warning => Type 'String' is not assignable to type 'string'. 'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
// const s6: string = new String('hello'); // error

const os = Object(Symbol('foo'));
console.log(os); // [Symbol: Symbol(foo)]
console.log(typeof os); // object

const ob = Object(BigInt(42));
console.log(ob); // [BigInt: 42n]
console.log(typeof ob); // object

/**
 * JavaScript 的 8 种类型之中， undefined 和 null 其实是两个特殊值， object 属于复合类型，剩下的五种属于原始类型（primitive value），代表最基本的、不可再分的值。
 * boolean
 * string
 * number
 * bigint
 * symbol
 * 上面这五种原始类型的值，都有对应的包装对象（wrapper object）。所谓“包装对象”，指的是这些值在需要时，会自动产生的对象。
 */

/**
 * 五种包装对象之中，symbol 类型和 bigint 类型无法直接获取它们的包装对象（即 Symbol() 和 BigInt() 不能作为构造函数使用），但是剩下三种可以。
 * Boolean()
 * String()
 * Number()
 * 以上三个构造函数，执行后可以直接获取某个原始类型值的包装对象。
 */

/**
 * 为了区分这两种情况，TypeScript 对五种原始类型分别提供了大写和小写两种类型。
 * Boolean 和 boolean
 * String 和 string
 * Number 和 number
 * BigInt 和 bigint
 * Symbol 和 symbol
 * 其中，大写类型同时包含包装对象和字面量两种情况，小写类型只包含字面量，不包含包装对象。
 */

/**
 * 建议只使用小写类型，不使用大写类型。因为绝大部分使用原始类型的场合，都是使用字面量，不使用包装对象。
 * 而且，TypeScript 把很多内置方法的参数，定义成小写类型，使用大写类型会报错。
 */

/**
 * Symbol() 和 BigInt() 这两个函数不能当作构造函数使用，所以没有办法直接获得 symbol 类型和 bigint 类型的包装对象，只能通过 Object() 函数间接获得。
 * 建议始终使用小写的 symbol 和 bigint ，不使用大写的 Symbol 和 BigInt 。
 */