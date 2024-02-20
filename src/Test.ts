type C<T> = {
  [K in keyof T]: T[K];
}[keyof T];

type B = C<{ name: string, age: number }>;

type G = Pick<{ name: string }, "name">;
