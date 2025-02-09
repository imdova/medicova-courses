export type CartFormValues = {
  payment: string;
  name: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
  saveInfo: boolean;
};

export type CartItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};
