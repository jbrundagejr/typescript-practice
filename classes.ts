class Vehicle {
  // initializing vehicle with property color = red OR use constructor
  // color: string = 'red'
  constructor(public color: string){}
  protected honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)

// extends tells TS to use all the properties already defined in parent class, in this case Vehicle
// can overwrite parent properties
// default is public
// private restricts use to inside that class. DOES NOT INCREASE SECURITY
// cannot modify in child though. If public in parent, can't make the property private in child
// protected allows child to call property, but nowhere else
class Car extends Vehicle {
  constructor(public wheels: number, color: string){
    // super() references parent class constructor
    super(color)
  }
  private drive(): void {
    console.log('vroom')
  }
  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const car = new Car(4, 'green')
car.startDrivingProcess()
