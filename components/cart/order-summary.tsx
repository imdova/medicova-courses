import { CartItem } from "@/types/cart";
import { CartItemCard } from "./cart-item";

type SummaryRow = {
  label: string;
  value: string | number;
  isBold?: boolean;
};

type OrderSummaryProps = {
  items: CartItem[];
  subtotal: number;
  discount: number;
  tax: number;
};

export const OrderSummary = ({
  items,
  subtotal,
  discount,
  tax,
}: OrderSummaryProps) => {
  const summaryRows: SummaryRow[] = [
    { label: "Subtotal", value: `$${subtotal.toFixed(2)}` },
    { label: "Coupon Discount", value: `${discount}%` },
    { label: "TAX", value: tax },
    {
      label: "Total",
      value: `$${(subtotal + (subtotal * tax) / 100).toFixed(2)}`,
      isBold: true,
    },
  ];

  return (
    <div className="box-content lg:w-[650px]">
      <h2 className="text-xl font-semibold mb-5">Summary</h2>
      <div>
        {items.map((item) => (
          <CartItemCard key={item.id} item={item} />
        ))}
      </div>
      {summaryRows.map(({ label, value, isBold }) => (
        <div
          key={label}
          className={`flex justify-between items-center p-3 ${
            !isBold ? "border-b" : ""
          }`}
        >
          <span className={isBold ? "font-semibold" : "text-secondary"}>
            {label}
          </span>
          <span className={isBold ? "font-semibold" : "text-secondary"}>
            {value}
          </span>
        </div>
      ))}
    </div>
  );
};
