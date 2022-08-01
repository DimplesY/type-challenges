/**
 * 
 * 如果 T 是 U 的子级，就永远都不可能 exclude
 * 否则直接取 T
 * 
 */
type MyExclude<T, U> = T extends U ? never : T




