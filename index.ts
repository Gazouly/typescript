const msg: string = 'hi' 
const person: { name: string;  age: number} = {
  name: 'ahmed',
  age: 20
}

const fn = ({ name, age }: { name: string; age: number }): void => { }
const arr: string[] = ['s1', 's2']

const arr2: (string | Date)[] = ['str', new Date()]
