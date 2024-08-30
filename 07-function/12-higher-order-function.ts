const hof = (someValue: number) => (multiplier: number) => someValue * multiplier;

hof(10)(2); // 20

/**
 * 一个函数的返回值还是一个函数，那么前一个函数就称为高阶函数（higher-order function）。
 */