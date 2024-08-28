function f(point: [number, number]) {
  // ts-type-warning => This comparison appears to be unintentional because the types '2' and '3' have no overlap.
  // if (point.length === 3) {}
}

function g(point: [number, number?, number?]) {
  // ts-type-warning => This comparison appears to be unintentional because the types '2 | 1 | 3' and '4' have no overlap.
  // if (point.length === 4) {}
}

// const myTuple:[...string[], boolean] = ['a', 'b', true];
const myTuple:[...string[]] = ['a', 'b'];
// ok
if (myTuple.length === 4) {}

/**
 * 如果没有可选成员和扩展运算符，TypeScript 会推断出元组的成员数量（即元组长度）。
 * 
 * 如果包含了可选成员，TypeScript 会推断出可能的成员数量。
 * 
 * 如果使用了扩展运算符，TypeScript 就无法推断出成员数量。
 * 
 * 一旦扩展运算符使得元组的成员数量无法推断，TypeScript 内部就会把该元组当成数组处理（限于单一类型的元组）。
 */