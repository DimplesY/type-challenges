
type Arr = [1, 2, 3, 4]

type Reverse<T extends any[]> = T extends [infer first, ...infer others] ? [...Reverse<others>, first] : T



type newArr = Reverse<Arr>

