const human: Human = {
  hands: 2,
  legs: 2,
  eyes: { color: 'green', size: 'M' },
  head: 1,
};

export interface Eye {
  color: string;
  size: string;
}

//class, interface, type

export interface Human {
  hands: number;
  legs: number;
  eyes: Eye;
  head: number;
}
