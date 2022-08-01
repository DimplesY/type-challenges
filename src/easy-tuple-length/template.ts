type Length<T extends readonly any[]> = T['length']


/**
 * 获取长度
 * 
 * @param arr 数组
 * @returns arr的长度
 */
function length(arr: any[]): number {
  return arr.length
}
