type MyEquals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false

type GetReadonlyKeys<T> = {
  [P in keyof T]-?: MyEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }> extends true ? never : P
}[keyof T]
