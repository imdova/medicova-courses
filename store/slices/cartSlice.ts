import { CartItem } from "@/types/cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  courses: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  courses: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        image: string;
        description: string;
        price: number;
      }>
    ) => {
      const { id, title, price, image, description } = action.payload;
      const existingItem = state.courses.find((item) => item.id === id);

      if (existingItem) {
        existingItem.totalPrice += price;
      } else {
        state.courses.push({
          id,
          title,
          price,
          image,
          description,
          totalPrice: price,
        });
      }

      state.totalPrice = state.courses.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
    },

    removeItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.courses.find((item) => item.id === id);

      if (existingItem) {
        state.totalPrice -= existingItem.totalPrice;
        state.courses = state.courses.filter((item) => item.id !== id);
      }
    },

    clearCart: (state) => {
      state.courses = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
