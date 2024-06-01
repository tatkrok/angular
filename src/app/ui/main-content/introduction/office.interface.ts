const office: Office = {
  monitors: [
    { size: '24px', brand: 'Dell', microphoneAvailable: true },
    { size: '32px', brand: 'Samsung', microphoneAvailable: false },
  ],
  mouse: { brand: 'Logitech', isAnatomic: true },
  keyboard: { brand: 'Logitech', isMechanic: false },
  hasCamera: true,
};

export interface Office {
  monitors: Monitors[];
  mouse: Mouse;
  keyboard: Keyboard;
  hasCamera: boolean;
}

export interface Monitors {
  size: string;
  brand: string;
  microphoneAvailable: boolean;
}

export interface Mouse {
  brand: string;
  isAnatomic: boolean;
}

export interface Keyboard {
  brand: string;
  isMechanic: boolean;
}

// Thelw stis parapanw 2 metavlites na pas kai na moy ftiaxeis Interface.
// An se voleuei na tis exeis se xexwristo arxeio ftiaxe allo ena kai metefere ekei to mobile. Alliws mporeis edw kai gia ta 2.
// Good luck :P
