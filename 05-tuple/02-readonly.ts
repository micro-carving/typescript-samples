// way-1：readonly tuple type
type RT1 = readonly [number, string];

// way-2：readonly tuple type
type RT2 = Readonly<[number, string]>;

type NT = [number, string];

let nt: NT = [1, 'a'];

let rt1: RT1 = nt; // ok

// ts-type-warning => The type 'RT1' is 'readonly' and cannot be assigned to the mutable type 'NT'.
// nt = rt1; // error

function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

let point = [3, 4] as const;

// ts-type-warning => The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]'.
// distanceFromOrigin(point); // error

// convert the original readonly type to a normal type
const newPoint = point as [number, number];
distanceFromOrigin(newPoint); // ok

/**
 * 元组也可以是只读的，不允许修改。有 readonly 和 Readonly<T> 两种方式。
 * 
 * 跟数组一样，只读元组是元组的父类型。所以，元组可以替代只读元组，而只读元组不能替代元组。
 */