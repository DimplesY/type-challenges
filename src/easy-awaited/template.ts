/**
 * infer 关键字只能够在 true 的条件里，代表获得函数返回值的类型
 */
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer P> ? (P extends Promise<unknown> ? MyAwaited<P> : P) : T
