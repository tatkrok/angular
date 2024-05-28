const cat: Animal = {
  color: 'Black',
  scream: 'niaou',
  age: 2,
  legsNum: 4
}

const dog: Animal = {
  color: 'White',
  scream: 'gav',
  age: 3,
  legsNum: 4
}

const zoo: Animal[] = [
  cat, dog
];

export interface Animal {
  color: string;
  scream: string;
  age: number;
  legsNum: number;
}
