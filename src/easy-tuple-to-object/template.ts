/**
 * 元祖转对象 
 */
type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P
}

function tupleToObject(arr: any[]) {
  let temp:any = {}
  arr.forEach((item) => {
    temp[item] = item
  })
  return temp
}
