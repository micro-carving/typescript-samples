let x: number;
// ts-type-warning => Variable 'x' is used before being assigned.
// console.log('x => ', x); // x =>  undefined

let foo: string = 'hello world';
console.log('typeof foo => ', typeof foo);

// ts-type-warning => Type 'number' is not assignable to type 'string'.
// foo = 1; 

function toString(num: number): string {
  return String(num);
}

console.log('toString(123) => ', toString(123));

