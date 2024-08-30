interface MyInterface {
  readonly name: string;
}

const person: {
  readonly age: number;
} = {
  age: 30,
}

// ts-type-warning => Cannot assign to 'age' because it is a read-only property.
// person.age = 20; // error

type Point = {
  readonly x: number;
  readonly y: number;
}

const p: Point = {
  x: 10,
  y: 20,
}

// ts-type-warning => Cannot assign to 'x' because it is a read-only property.
// p.x = 30; // error

interface Home {
  readonly resident: {
    name: string;
    age: number;
  }
}

const home: Home = {
  resident: {
    name: "John",
    age: 30,
  }
}

home.resident.age = 40; // ok
// ts-type-warning => Cannot assign to 'resident' because it is a read-only property.
// home.resident = { name: "Jane", age: 25 }; // error

interface People {
  name: string;
  age: number;
}

interface ReadonlyPeople {
  readonly name: string;
  readonly age: number;
}
let people: People = {
  name: "John",
  age: 30,
}
let readonlyPeople: ReadonlyPeople = people;
people.age += 1;
readonlyPeople.age // 31

const readonlyMyUser = {
  name: "John",
} as const;
// ts-type-warning => Cannot assign to 'name' because it is a read-only property.
// readonlyMyUser.name = "Jane"; // error

const MyUser: { name: string } = {
  name: "John",
} as const

// although used "as const", subject to the declared type.
MyUser.name = "Jane"; // ok

/**
 * 属性名前面加上 readonly 关键字，表示这个属性是只读属性，不能修改。
 * 
 * 只读属性只能在对象初始化期间赋值，此后就不能修改该属性。
 * 
 * 注意，如果属性值是一个对象， readonly 修饰符并不禁止修改该对象的属性，只是禁止完全替换掉该对象。
 * 另一个需要注意的地方是，如果一个对象有两个引用，即两个变量对应同一个对象，其中一个变量是可写的，另一个变量是只读的，那么从可写变量修改属性，会影响到只读变量。
 * 
 * 如果希望属性值是只读的，除了声明时加上 readonly 关键字，还有一种方法，就是在赋值时，在对象后面加上只读断言 as const 。
 * 注意，上面的 as const 属于 TypeScript 的类型推断，如果变量明确地声明了类型，那么 TypeScript 会以声明的类型为准。
 * 
 * 根据变量类型声明，如果某个属性不是只读属性，但是赋值时又使用只读断言 as const 。这时会以声明的类型为准，因为该属性可以修改。
 */