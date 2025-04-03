import { CartItem } from "@/types/cart";
import { CartItemCard } from "./cart-item";
import { ShoppingBag } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { removeItem } from "@/store/slices/cartSlice";
import CustomAlert from "../UI/CustomAlert";
import { useState } from "react";

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
  const dispatch = useAppDispatch();
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  // Show Alert Function
  const showAlert = (message: string, type: "success" | "error") => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000); // Hide after 3 seconds
  };

  // Add to Cart Function
  const removeFromCart = (id: string) => {
    dispatch(removeItem(id));
    showAlert("Removed from cart!", "error");
  };

  return (
    <div className="box-content lg:w-[650px]">
      {alert && (
        <CustomAlert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      <h2 className="text-xl font-semibold mb-5">Summary</h2>
      <div>
        {items.length > 0 ? (
          items.map((item) => (
            <CartItemCard
              key={item.id}
              item={item}
              handeleDelete={() => removeFromCart(item.id)}
            />
          ))
        ) : (
          <div className="flex justify-center items-center h-[300px] text-center text-gray-500 mt-5">
            <div>
              <ShoppingBag className="m-auto mb-2 text-[#eee]" size={70} />
              <span className="block mb-2">The cart is empty.</span>
            </div>
          </div>
        )}
      </div>
      {summaryRows.map(({ label, value, isBold }) => (
        <div
          key={label}
          className={`flex justify-between items-center p-3 ${
            !isBold ? "border-b" : ""
          }`}>
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
