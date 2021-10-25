// const oldCivic = {
//   name: 'civic',
//   year: 2000,
//   broken: true
// }

// const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void  => {
//   console.log(`Name: ${vehicle.name}`)
//   console.log(`Year: ${vehicle.year}`)
//   console.log(`Broken? ${vehicle.broken}`)
// }

// printVehicle(oldCivic)

// BECOMES

// interfaces are generic, not specific. Not limited to primitive values
// interface Vehicle {
//   name: string,
//   year: number,
//   broken: boolean,
//   // function that returns a string
//   summary(): string
// }

// const oldCivic = {
//   name: 'civic',
//   year: 2000,
//   broken: true,
//   summary(): string {
//     return `Name: ${this.name}, year: ${this.year}, broken? ${this.broken}`
//   }
// }

// const printVehicle = (vehicle: Vehicle): void  => {
//   console.log(vehicle.summary())
// }

// printVehicle(oldCivic)

// Refactor to make more generic so it's much more reuseable

interface Reportable {
  // function that returns a string
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}, year: ${this.year}, broken? ${this.broken}`
  }
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar, is ${this.color}`
  }
}

const printSummary = (item: Reportable): void  => {
  console.log(item.summary())
}

printSummary(oldCivic)
printSummary(drink)