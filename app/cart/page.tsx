"use client";
import { OrderSummary } from "@/components/cart/order-summary";
import { PaymentForm } from "@/components/cart/PaymentForm";
import { useAppSelector } from "@/store/hooks";
import { CartFormValues } from "@/types/cart";
import { useState } from "react";

const CartPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { courses, totalPrice } = useAppSelector((state) => state.cart);
  console.log(totalPrice);
  const handleSubmit = async (data: CartFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form Submitted:", data);
      // Handle successful submission (e.g., show success toast, redirect)
    } catch (error) {
      setSubmitError(
        "An error occurred while processing your payment. Please try again."
      );
      console.error("Payment error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative mb-20">
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <h1 className="text-4xl md:text-5xl font-bold my-20 md:text-start text-center">
          Courses Cart
        </h1>
        {submitError && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
            {submitError}
          </div>
        )}
        <div className="flex gap-6 flex-col lg:flex-row">
          <div className="box-content w-full">
            <h2 className="font-semibold text-xl mb-6">Checkout</h2>
            <PaymentForm onSubmit={handleSubmit} loading={isSubmitting} />
          </div>
          <OrderSummary
            items={courses}
            subtotal={totalPrice}
            discount={0}
            tax={5}
          />
        </div>
      </div>
    </main>
  );
};

export default CartPage;
