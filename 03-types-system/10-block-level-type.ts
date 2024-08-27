function blockLevelType() {
  if (true) {
    type T = number; // block level type
    let t: T = 10;
  } else {
    type T = string; // block level type
    let t: T = "hello";
  }
}

/**
 * TypeScript 支持块级类型声明，即类型可以声明在代码块（用大括号表示）里面，并且只在当前代码块有效。
 * 这两个声明都只在自己的代码块内部有效，在代码块外部无效。
 */