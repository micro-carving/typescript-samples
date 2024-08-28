const x: symbol = Symbol();
const y: symbol = Symbol();

console.log(x === y); // false

/**
 * Symbol 是 ES2015 新引入的一种原始类型的值。它类似于字符串，但是每一个 Symbol 值都是独一无二的，与其他任何值都不相等。
 * Symbol 值通过 Symbol() 函数生成。在 TypeScript 里面，Symbol 的类型使用 symbol 表示。
 */