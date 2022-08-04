/**
 * 通过 extends 使泛型变为数组，即可使用拓展运算符
 */
type Concat<T extends Array<any>, U extends Array<any>> = [...T, ...U]

/**
 * 使用js实现
 */
function MyConcat(arr1: any[], arr2: any[]) {
  return [...arr1, ...arr2]
}
