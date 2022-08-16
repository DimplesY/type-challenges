type Equal<T, R> = (<X>() => X extends T ? 1 : 2) extends 
                   (<X>() => X extends R ? 1 : 2 ) ? true : false

type HaveIt<T extends unknown[], U> = T extends [infer F, ...infer R] ? (Equal<F, U> extends true ? true : HaveIt<R, U>) : false
type Unique<T extends unknown[], L extends unknown[] = []> = T extends [infer F, ...infer R] ? (HaveIt<L, F> extends true ? Unique<R, L> : Unique<R, [...L, F]>) : L
