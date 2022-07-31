type First<T extends any[]> = T['length'] extends 0 ? never : T[0]


function first(arr: any[]) {
  return arr.length === 0 ? undefined : arr[0]
}
