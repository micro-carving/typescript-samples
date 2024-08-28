type Age = number;

let ag: Age = 25;

type Color = 'red';
// ts-type-warning => Duplicate identifier 'Color'.
// type Color = 'blue'; // error

if (Math.random() > 0.5) {
    type Color = 'blue'; // ok
}

type World = 'world';
type Greeting = `Hello ${World}`; // Hello world

/**
 * type 命令用来定义一个类型的别名。
 * 别名可以让类型的名字变得更有意义，也能增加代码的可读性，还可以使复杂类型用起来更方便，便于以后修改变量的类型。
 * 别名不允许重名。
 * 别名的作用域是块级作用域。这意味着，代码块内部定义的别名，影响不到外部。
 * type 命令属于类型相关的代码，编译成 JavaScript 的时候，会被全部删除。
 */