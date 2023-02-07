type Identity<T> = { [P in keyof T]: T[P] };
type Replace<T, K extends keyof T, TReplace> = Identity<
  Pick<T, Exclude<keyof T, K>> &
    {
      [P in K]: TReplace;
    }
>;

type Nullify<T, K extends keyof T> = Identity<
  Pick<T, Exclude<keyof T, K>> &
    {
      [P in K]?: never;
    }
>;
