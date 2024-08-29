// array parameter deconstruction
function pdFun([x, y]: [number, number]) { }

// object parameter deconstruction
function pdSum1({a, b}:{a: number, b: number}) { 
  return a + b;
}

// type alias
type AB = {
  a: number,
  b: number
}

// type alias + parameter deconstruction
function pdSum2({a, b}: AB) { 
  return a + b;
}

/**
 * 可以对函数参数进行解构（数组和对象解构），从而简化函数调用
 * 
 * 注意：解构的参数名必须和对象属性名一致
 * 
 * 参数解构可以结合类型别名（type 命令）一起使用，代码会看起来简洁一些。
 */