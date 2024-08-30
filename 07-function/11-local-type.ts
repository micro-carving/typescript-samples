function ltFun(txt: string) {
  // local type
  type message = string;
  let newTxt: message = `hello ${txt}`;
  return newTxt;
}

// Cannot find name 'message'.
// const newTxt:message = ltFun('world'); // error

/**
 * 函数内部允许声明其他类型，该类型只在函数内部有效，称为局部类型。
 * 在函数内部定义的局部类型，只能在函数内部使用。在函数外部使用，就会报错。
 */