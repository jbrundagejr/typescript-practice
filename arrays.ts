// : string[] is optional since we initialize array with strings. TS will figure that out
const carMakers: string[] = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

// Hover over 'carsByMake' and TS will know it's a 2-D array- : string[][]
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camar']
]

// TS can infer that car/myCar will be a string return value
const car = carMakers[0]
const myCar = carMakers.pop()

// Prevents incompatible values
carMakers.push(100)

// Help with 'map'
carMakers.map((car:string): string => {
  return car
})

// Flexible types- only have to annotate if you aren't initializing
const importantDates: (Date | string)[] = [new Date(), '2030-10-10']