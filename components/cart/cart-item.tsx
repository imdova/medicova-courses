import { CartItem } from "@/types/cart";
import Image from "next/image";

type CartItemProps = {
  item: CartItem;
};

export const CartItemCard = ({ item }: CartItemProps) => (
  <div className="flex gap-3 p-3 border-b">
    <Image
      className="w-[150px] rounded-lg"
      src={item.image}
      alt={item.title}
      width={150}
      height={100}
    />
    <div>
      <h2 className="font-semibold text-sm">{item.title}</h2>
      <p className="text-secondary text-sm">{item.description}</p>
      <span className="font-semibold">${item.price.toFixed(2)}</span>
    </div>
  </div>
);
