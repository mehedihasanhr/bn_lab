export type InventoryData = {
  id: number;
  name: string;
  description: string;
  price: number;
  unit: 'kg' | 'pcs' | 'box';
  variant: '';
};
