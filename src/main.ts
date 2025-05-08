import './style.css'

interface User {
  name: string;
  age?: number;
}

const poly: User = {
  name: "Alise",
  age: 20,
}; 

console.log(poly);


const numbers: number[] = [1, 2, 3, 4];

 console.log(numbers);
 
const strings: Array<User> = [
  { name: "i", age: 25 },
  { name: "s", age: 6}
]

console.log(strings);


