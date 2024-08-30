// rest parameter is array
function joinNumbers(...nus: number[]) {}

// rest parameter is tuple
function joinUsers(...users: [boolean, string]) {}

// rest parameter is tuple with optional element
function rpoFun(...args: [boolean, string?]) {}

function rpMultiply(n: number, ...m: number[]) {
  return m.map((m) => m * n);
}

// rest parameter is tuple with optional element and rest element
function rpFun1(...args: [boolean, string?, ...number[]]) {}

// way-1: rest parameter is tuple
function rpRepeat1(...[str, times]: [string, number]) {
  return str.repeat(times);
}

// way-2 equivalent to way-1
function rpRepeat2(str: string, times: number) {
  return str.repeat(times);
}

/**
 * rest 参数表示函数剩余的所有参数，它可以是数组（剩余参数类型相同），也可能是元组（剩余参数类型不同）。
 * 
 * 注意，元组需要声明每一个剩余参数的类型。如果元组里面的参数是可选的，则要使用可选参数。
 * 
 * rest 参数甚至可以嵌套。
 * 
 * rest 参数可以与变量解构结合使用。
 */