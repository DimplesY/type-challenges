type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T1>() => T1 extends Y ? 1 : 2) ? true : false;

type Includes<T extends readonly any[], U> = T extends [infer K, ...infer J] ? Equals<K, U> extends true ? true : Includes<J, U> : false;
