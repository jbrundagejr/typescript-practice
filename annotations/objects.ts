const profile = {
  name: 'jon',
  age: 35,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age
  }
}

// Using destructuring to call on key values of profile
const {age, name}: {age: number; name: string} = profile
const {
  coords: {lat, lng}
}: {coords: {lat: number, lng: number}} = profile