"use client";
import { OrderSummary } from "@/components/cart/order-summary";
import { PaymentForm } from "@/components/cart/PaymentForm";
import { CartFormValues, CartItem } from "@/types/cart";
import { useState } from "react";

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

const transaction_data = {
  merchantCode: "1tSa6uxz2nTwlaAmt38enA==",
  customerName: "example",
  customerMobile: "01234567891",
  customerEmail: "example@gmail.com",
  customerProfileId: "777777",
  cardNumber: "4242424242424242",
  cardExpiryYear: "25",
  cardExpiryMonth: "05",
  cvv: "123",
  merchantRefNum: "2312465464",
  amount: 580.55,
  currencyCode: "EGP",
  language: "en-gb",
  chargeItems: [
    {
      itemId: "897fa8e81be26df25db592e81c31c",
      description: "Item Descriptoin",
      price: 580.55,
      quantity: "1",
    },
  ],
  enable3DS: true,
  authCaptureModePayment: false,
  returnUrl: "https://developer.fawrystaging.com",
  signature: "2ca4c078ab0d4c50ba90e31b3b0339d4d4ae5b32f97092dd9e9c07888c7eef36",
  paymentMethod: "CARD",
  description: "Example Description",
};

const CartPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = async (data: CartFormValues) => {
    const PaymentData = {
      merchantCode: transaction_data.merchantCode,
      customerName: transaction_data.customerName,
      customerMobile: transaction_data.customerMobile,
      customerEmail: transaction_data.customerEmail,
      customerProfileId: transaction_data.customerProfileId,
      cardNumber: transaction_data.cardNumber,
      cardExpiryYear: transaction_data.cardExpiryYear,
      cardExpiryMonth: transaction_data.cardExpiryMonth,
      cvv: transaction_data.cvv,
      merchantRefNum: transaction_data.merchantRefNum,
      amount: transaction_data.amount,
      currencyCode: transaction_data.currencyCode,
      language: transaction_data.language,
      chargeItems: transaction_data.chargeItems,
      enable3DS: true,
      authCaptureModePayment: false,
      returnUrl: "https://developer.fawrystaging.com",
      signature: transaction_data.signature,
      paymentMethod: "PayUsingCC",
      description: "transaction description",
    };

    try {
      const response = await fetch(
        "https://atfawry.fawrystaging.com/ECommerceWeb/Fawry/payments/charge",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(PaymentData),
        }
      );

      const result = await response.json();
      console.log("Form Submitted:", result);
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
