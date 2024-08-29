function rpFun(arr: readonly number[]): void {
  // ts-type-warning => Index signature in type 'readonly number[]' only permits reading.
  // arr[0] = 1; // error
}

/**
 * 如果函数内部不能修改某个参数，可以在函数定义时，在参数类型前面加上 readonly 关键字，表示这是只读参数。
 * 
 * 注意， readonly 关键字目前只允许用在数组和元组类型的参数前面，如果用在其他类型的参数前面，就会报错。
 */