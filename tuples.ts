// const drink = {
//   color: 'brown',
//   carbonated: true,
//   sugar: 40
// }

// Creates idea of tuple we can freely use 
type Drink = [string, boolean, number]

// annotation declares meaning of order of elements in tuple
const pepsi: [string, boolean, number] = ['brown', true, 40]
const tea: Drink = ['brown', false, 0]

// Not super useful in TS, but can be good with CSV files. Object key-values are much more explicit with what values mean.
const carSpecs: [number, number] = [400, 3354]
const carStats = {
  horsepower: 400,
  weight: 3354
}