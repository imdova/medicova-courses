"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import paymentType1 from "@/assets/images/Paypal.jpg";
import paymentType2 from "@/assets/images/am_amex_06 1.jpg";
import paymentType3 from "@/assets/images/visa.jpg";
import paymentType4 from "@/assets/images/Mastercard_logo.webp";
import imageCourse from "@/assets/images/image-2.jpg";
type FormValues = {
  payment: string;
  name: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
  saveInfo: boolean;
};

const CartPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted:", data);
  };

  return (
    <main className="mb-20">
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <h1 className="text-4xl md:text-5xl font-bold my-20 md:text-start text-center">
          Courses Cart
        </h1>
        <div className="flex gap-6 flex-col lg:flex-row">
          <div className="box-content w-full">
            <h2 className="font-semibold text-xl mb-6">Checkout</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Payment Method Selection */}
              <div className="mb-3">
                <h3 className="text-secondary text-sm">Cart Type</h3>
                <div className="flex gap-2 p-2">
                  {[
                    { id: "Paypal", src: paymentType1 },
                    { id: "amricanexpress", src: paymentType2 },
                    { id: "visa", src: paymentType3 },
                    { id: "mistercard", src: paymentType4 },
                  ].map(({ id, src }) => (
                    <label key={id} className="cursor-pointer">
                      <input
                        type="radio"
                        value={id}
                        {...register("payment", { required: true })}
                        className="peer hidden"
                      />
                      <div className="flex h-14 w-24 items-center overflow-hidden justify-center rounded-xl border-2 border-gray-300 bg-gray-50 transition-transform duration-150 hover:border-primary active:scale-95 peer-checked:border-primary peer-checked:shadow-md">
                        <Image src={src} alt={id} />
                      </div>
                    </label>
                  ))}
                </div>
                {errors.payment && (
                  <p className="text-red-500 text-sm">
                    Please select a payment method.
                  </p>
                )}
              </div>

              {/* Name on Card */}
              <div className="flex flex-col gap-2 w-full mb-3">
                <label className="text-secondary text-sm" htmlFor="name">
                  Name On Card
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="bg-white px-4 py-3 outline-none w-full rounded-lg border-2 transition-colors duration-100 border-[#eee] focus:border-primary"
                  placeholder="Enter name on card"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Card Number */}
              <div className="flex flex-col gap-2 w-full mb-3">
                <label className="text-secondary text-sm" htmlFor="cardNumber">
                  Card Number
                </label>
                <input
                  {...register("cardNumber", {
                    required: "Card number is required",
                  })}
                  className="bg-white px-4 py-3 outline-none w-full rounded-lg border-2 transition-colors duration-100 border-[#eee] focus:border-primary"
                  placeholder="Enter card number"
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.cardNumber.message}
                  </p>
                )}
              </div>

              {/* Expiration Date & CVC */}
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 w-full mb-3">
                  <label
                    className="text-secondary text-sm"
                    htmlFor="expirationDate">
                    Expiration Date (MM/YY)
                  </label>
                  <input
                    {...register("expirationDate", {
                      required: "Expiration date is required",
                    })}
                    className="bg-white px-4 py-3 outline-none w-full rounded-lg border-2 transition-colors duration-100 border-[#eee] focus:border-primary"
                    placeholder="MM/YY"
                  />
                  {errors.expirationDate && (
                    <p className="text-red-500 text-sm">
                      {errors.expirationDate.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2 w-full mb-3">
                  <label className="text-secondary text-sm" htmlFor="cvc">
                    CVC
                  </label>
                  <input
                    {...register("cvc", { required: "CVC is required" })}
                    className="bg-white px-4 py-3 outline-none w-full rounded-lg border-2 transition-colors duration-100 border-[#eee] focus:border-primary"
                    placeholder="CVC"
                  />
                  {errors.cvc && (
                    <p className="text-red-500 text-sm">{errors.cvc.message}</p>
                  )}
                </div>
              </div>

              {/* Save Information */}
              <label
                htmlFor="saveInfo"
                className="flex items-center gap-2.5 text-sm mb-5 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("saveInfo")}
                  className="peer hidden"
                  id="saveInfo"
                />
                <div className="h-5 w-5 flex rounded-md border border-gray-300 bg-white peer-checked:bg-primary transition">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 stroke-white"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"></path>
                  </svg>
                </div>
                Save my information for faster checkout
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-black transition">
                Confirm Payment
              </button>
            </form>
          </div>
          <div className="box-content lg:w-[650px]">
            <h2 className="text-xl font-semibold mb-5">Summary</h2>
            {/* List Of Item In Card  */}
            <div>
              <div className="flex gap-3 p-3 border-b">
                <Image
                  className="w-[150px] rounded-lg"
                  src={imageCourse}
                  alt="imageCourse"
                />
                <div>
                  <h2 className="font-semibold text-sm">
                    adipising elit, sed do eiusmod tempor
                  </h2>
                  <p className="text-secondary text-sm">
                    Lorem ipsum dollar...
                  </p>
                  <span className="font-semibold">$24.69</span>
                </div>
              </div>
              <div className="flex gap-3 p-3 border-b">
                <Image
                  className="w-[150px] rounded-lg"
                  src={imageCourse}
                  alt=""
                />
                <div>
                  <h2 className="font-semibold text-sm">
                    adipising elit, sed do eiusmod tempor
                  </h2>
                  <p className="text-secondary text-sm">
                    Lorem ipsum dollar...
                  </p>
                  <span className="font-semibold">$24.69</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 border-b">
              <span className="text-secondary">Subtotal</span>
              <span className="text-secondary">$51.38</span>
            </div>
            <div className="flex justify-between items-center p-3 border-b">
              <span className="text-secondary">Coupon Discount</span>
              <span className="text-secondary">0 %</span>
            </div>
            <div className="flex justify-between items-center p-3 border-b">
              <span className="text-secondary">TAX</span>
              <span className="text-secondary">5</span>
            </div>
            <div className="flex justify-between items-center p-3 ">
              <span className="font-semibold">Subtotal</span>
              <span className="font-semibold">$51.38</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
