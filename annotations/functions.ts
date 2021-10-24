// ': number' after the arguments is telling TS that this function returns a number
// Always annotate type for arguments and return value
const add = (a: number, b: number): number => {
  return a + b
}

const subtract = (a: number, b: number): number => {
  return a - b
}

function divide(a: number, b: number): number{
  return a / b
}

const multiply = function(a: number, b: number): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): never => {
  throw new Error(message)
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)