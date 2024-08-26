// infer type => never
let nas: number & string;

let fb: { foo: string } & { bar: string };

fb = { foo: "hello", bar: "world" };

type A = {
  foo: number;
}

type B = A & {
  bar: number;
}

/**
 * 交叉类型（intersection types）指的多个类型组成的一个新类型，使用符号 & 表示。
 * 交叉类型 A&B 表示，任何一个类型必须同时属于 A 和 B ，才属于交叉类型 A&B ，即交叉类型同时满足 A 和 B 的特征。
 */

/**
 * 交叉类型的主要用途是表示对象的合成。交叉类型常常用来为对象类型添加新属性。
 */