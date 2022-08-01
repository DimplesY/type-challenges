/**
 *  P in K : 获取 K 中的每一个属性名
 *
 *  K extends keyof T: 限制 K 的类型为 T 的属性名
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
