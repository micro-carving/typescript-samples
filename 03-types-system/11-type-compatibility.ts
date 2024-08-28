type T = number | string;

let na:number = 1;
let tb: T = na;

let hi:'hi' = 'hi';
let hb:string = 'hello';

hb = hi; // ok
// ts-type-warning => Type 'string' is not assignable to type '"hi"'.
// hi = hb; // error

/**
 * TypeScript 的类型存在兼容关系，某些类型可以兼容其他类型。
 * TypeScript 为这种情况定义了一个专门术语。如果类型 A 的值可以赋值给类型 B ，那么类型 A 就称为类型 B 的子类型（subtype）。
 * TypeScript 的一个规则是，凡是可以使用父类型的地方，都可以使用子类型，但是反过来不行。
 * 
 * 之所以有这样的规则，是因为子类型继承了父类型的所有特征，所以可以用在父类型的场合。但是，子类型还可能有一些父类型没有的特征，所以父类型不能用在子类型的场合。
 */