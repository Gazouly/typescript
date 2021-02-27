interface Vehicle {
  name: string
  year: number
  color: string
  drive(): void
  honk(): void
}

class Car implements Vehicle {
  constructor(public name: string, public year: number, public color: string) { }
  drive(): void {
    console.log('Car is accelerating...')
  }
  honk(): void {
    console.log('Beeep ...')
  }
}

class Skoda extends Car {
  constructor(public model: string, name: string, year: number, color: string) {
    super(name, year, color)
  }
  alert(): void {
    this.honk()
  }
}

const newCar = new Car('Ford', 2021, 'Pepsi Blue')
console.log(newCar)
// newCar.drive()
// newCar.honk()

const skodaCar = new Skoda('German', 'SKODA-2020', 2020, 'Red')
console.log(skodaCar)
// skodaCar.honk()
skodaCar.alert()