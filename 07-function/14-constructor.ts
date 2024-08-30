const d = new Date();

class Animal {
  numLegs: number = 4;
}

// Animal class constructor
type AnimalConstructor = new () => Animal;

// createInstance function
function createInstance(animalConstructor: AnimalConstructor): Animal {
  return new animalConstructor();
}

// in JavaScript, a class is essentially a constructor.
const dog = createInstance(Animal);


// Example of a class with a constructor
class MyClass {
  constructor(public name: string) { }
}

function cAdd(n?: number): number {
  return n !== undefined ? n + 1 : 0;
}

// union type F is specific constructor and function type
type F = {
  // constructor
  new(s: string): MyClass;
  // function
  (n?: number): number;
}

// implement F as a class with both constructor and call signature
const MyFunc: F = function (this: MyClass | void, arg?: string | number): MyClass | number {
  if (typeof arg === 'string') {
    // constructor behavior
    return new MyClass(arg);
  } else {
    // function behavior
    return cAdd(arg);
  }
} as any;

// example usage as a constructor
const instance = new MyFunc('Hello World');
console.log(instance.name); // Hello World

// example usage as a function
const result1 = MyFunc(10);
console.log(result1); // 11

const result2 = MyFunc(); 
console.log(result2); // 0

/**
 * JavaScript 语言使用构造函数，生成对象的实例。构造函数的最大特点，就是必须使用 new 命令调用。
 * 
 * 构造函数的类型写法，就是在参数列表前面加上 new 命令。
 * 
 * 构造函数还有另一种类型写法，就是采用对象形式。
 * 
 * 某些函数既是构造函数，又可以当作普通函数使用，比如 Date() 。
 */