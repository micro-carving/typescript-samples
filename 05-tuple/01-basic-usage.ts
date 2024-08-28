// tuple
const s: [string, string, boolean] = ['hello', 'world', true];

// array
let num: number[] = [1];
// tuple
let t: [number] = [1];

// union type => (number | boolean)[]
let a = [1, true];

let x: [string, string] = ['hello', 'world'];
// ts-type-warning => Tuple type '[string, string]' of length '2' has no element at index '2'.
// x[2] = 'ts'; // error

// optional tuple, ? means the second element is optional
let b: [number, boolean?] = [1];

// rest tuple, ... means the rest of the elements are optional
let c: [number, ...boolean[]] = [1, true, true];

// tuple type with rest element
type NamedNum = [
  string,
  ...number[],
];

const nn1: NamedNum = ['1', 1, 2, 3];
const nn2: NamedNum = ['2', 1, 2, 3, 4];

// tuple type with rest element
type T1 = [string, number, ...boolean[]];
type T2 = [string, ...boolean[], number];
type T3 = [...[...boolean[], string], string, number];

const t1: T1 = ['1', 1, true, true];
const t2: T2 = ['2', true, true, 1];
const t3: T3 = [true, true, '3', '5', 1];

// tuple type with named element
type Color = [
  red: number,
  green: number,
  blue: number,
];
const color: Color = [255, 255, 255];

type Tuple = [string, number, Date];
// number type
type Age = Tuple[1]; 

// union type => string | number | Date
// Tuple[number] represents the member types of all numerical indexes of Tuple.
type TupleEl = Tuple[number];

/**
 * 元组（tuple）是 TypeScript 特有的数据类型，JavaScript 没有单独区分这种类型。它表示成员类型可以自由设置的数组，即数组的各个成员的类型可以不同。
 * 
 * 数组的成员类型写在方括号外面（ number[] ），元组的成员类型是写在方括号里面（ [number] ）。
 * TypeScript 的区分方法就是，成员类型写在方括号里面的就是元组，写在外面的就是数组。
 * 
 * 使用元组时，必须明确给出类型声明，不能省略，否则 TypeScript 会把一个值自动推断为（联合类型）数组。
 * 
 * 元组成员的类型可以添加问号后缀（ ? ），表示该成员是可选的。问号只能用于元组的尾部成员，也就是说，所有可选成员必须在必选成员之后。
 * 
 * 大多数情况下，元组的成员数量是有限的，从类型声明就可以明确知道，元组包含多少个成员，越界的成员会报错。
 * 
 * 使用扩展运算符（ ... ），可以表示不限成员数量的元组。扩展运算符（ ... ）用在元组的任意位置都可以，它的后面只能是一个数组或元组。
 * 
 * 元组的成员可以添加成员名，这个成员名是说明性的，可以任意取名，没有实际作用。每个成员都有一个名字，写在具体类型的前面，使用冒号分隔。名字可以随便取，没有实际作用，只是用来说明每个成员的含义。
 * 
 * 元组可以通过方括号，读取成员类型。由于元组的成员都是数值索引，即索引类型都是 number，Tuple[number] 表示元组 Tuple 的所有数值索引的成员类型，最终形成联合类型。
 */