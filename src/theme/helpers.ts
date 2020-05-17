import theme from "./theme"

export const toRem = (n: number) => `(${n} / ${theme.rem})rem`
