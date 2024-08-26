let sn: string | number;

sn = 10; // ok
sn = "hello"; // ok
// sn = true; // error

let gender: "male" | "female" | "other";

let rainbowColor: '赤' | '橙' | '黄' | '緑' | '青' | '藍' | '紫';

let su: string | undefined | null;
su = "hello"; // ok
su = undefined; // ok
su = null; // ok

let ns:
  | 'one'
  | 'two'
  | 'three';

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // error
  } else {
    console.log(id);
  }
};

function getPort(scheme: "http" | "https") {
  switch (scheme) {
    case "http":
      return 80;
    case "https":
      return 443;
  }
}

/**
 * 联合类型（union types）指的是多个类型组成的一个新类型，使用符号 | 表示。
 * 联合类型 A|B 表示，任何一个类型只要属于 A 或 B ，就属于联合类型 A|B 。
 */

/**
 * “类型缩小”是 TypeScript 处理联合类型的标准方法，凡是遇到可能为多种类型的场合，都需要先缩小类型，再进
 * 行处理。实际上，联合类型本身可以看成是一种“类型放大”（type widening），处理时就需要“类型缩小”（type narrowing）。
 */