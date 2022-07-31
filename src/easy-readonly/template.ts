/**
 * readonly 关键字可以实现只读
 * 
 * K in keyof T 可以将 T 当中的属性取出来并进行遍历 
 * 
 * T[K] 取得原来的属性的值
 */

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}


