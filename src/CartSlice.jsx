import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Check if the item already exists in the cart
      const item = action.payload;
            const existingItem = state.items.find(i => i.name === item.name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
            state.totalQuantity++; // Increment total quantity
        },
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
            state.items = state.items.filter(i => i.name !== itemToRemove.name);
            state.totalQuantity -= itemToRemove.quantity; // Subtract totalQuantity
        },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
            const item = state.items.find(i => i.name === name);
            state.totalQuantity += (quantity - item.quantity); // Adjust totalQuantity
            item.quantity = quantity;
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0; // Reset totalQuantity when cart is cleared
        },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
