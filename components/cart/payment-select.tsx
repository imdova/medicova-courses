import { CartFormValues } from "@/types/cart";
import Image from "next/image";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type PaymentMethod = {
  id: string;
  src: string;
};

const PAYMENT_METHODS: PaymentMethod[] = [
  { id: "Paypal", src: "/images/Paypal.jpg" },
  { id: "amricanexpress", src: "/images/am_amex_06 1.jpg" },
  { id: "visa", src: "/images/visa.jpg" },
  { id: "mistercard", src: "/images/Mastercard_logo.webp" },
];

type Props = {
  register: UseFormRegister<CartFormValues>;
  errors: FieldErrors<CartFormValues>;
};

export const PaymentMethodSelect = ({ register, errors }: Props) => (
  <div className="mb-3">
    <h3 className="text-secondary text-sm">Cart Type</h3>
    <div className="flex gap-2 p-2">
      {PAYMENT_METHODS.map(({ id, src }) => (
        <label key={id} className="cursor-pointer">
          <input
            type="radio"
            value={id}
            {...register("payment", { required: true })}
            className="peer hidden"
          />
          <div className="flex h-14 w-24 items-center overflow-hidden justify-center rounded-xl border-2 border-gray-300 bg-gray-50 transition-transform duration-150 hover:border-primary active:scale-95 peer-checked:border-primary peer-checked:shadow-md">
            <Image src={src} alt={id} width={96} height={56} />
          </div>
        </label>
      ))}
    </div>
    {errors.payment && (
      <p className="text-red-500 text-sm">Please select a payment method.</p>
    )}
  </div>
);
