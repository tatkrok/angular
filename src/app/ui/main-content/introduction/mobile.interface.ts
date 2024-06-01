const mobile: Mobile = {
  brand: 'Apple',
  screen: '6.1',
  ram: '4GB',
  cameraFront: '16mp',
  cameraBack: '32mp',
  cost: 800,
};

export interface Mobile {
  brand: string;
  screen: string;
  ram: string;
  cameraFront: string;
  cameraBack: string;
  cost: number;
}
