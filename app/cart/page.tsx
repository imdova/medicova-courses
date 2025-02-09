"use client";
import { OrderSummary } from "@/components/cart/order-summary";
import { PaymentForm } from "@/components/cart/PaymentForm";
import { CartFormValues, CartItem } from "@/types/cart";
import { useState } from "react";

const CartPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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

  const cartItems: CartItem[] = [
    {
      id: "1",
      title: "adipising elit, sed do eiusmod tempor",
      description: "Lorem ipsum dollar...",
      price: 24.69,
      image:
        "https://img.freepik.com/free-photo/focused-book-group-people-business-conference-modern-classroom-daytime_146671-16265.jpg?t=st=1739101586~exp=1739105186~hmac=24bd32da7f884be27d267b17e70060cd62895079067ae74431809e6fbc32aa29&w=996",
    },
    {
      id: "2",
      title: "adipising elit, sed do eiusmod tempor",
      description: "Lorem ipsum dollar...",
      price: 24.69,
      image:
        "https://img.freepik.com/free-photo/focused-book-group-people-business-conference-modern-classroom-daytime_146671-16265.jpg?t=st=1739101586~exp=1739105186~hmac=24bd32da7f884be27d267b17e70060cd62895079067ae74431809e6fbc32aa29&w=996",
    },
  ];

  return (
    <main className="mb-20">
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
            items={cartItems}
            subtotal={51.38}
            discount={0}
            tax={5}
          />
        </div>
      </div>
    </main>
  );
};

export default CartPage;
