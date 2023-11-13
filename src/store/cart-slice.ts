import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
    id: string,
    title: string, 
    price: number
}

type CartState = {
    items: CartItem[]
}

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
   name: 'cart', 
   initialState,
   reducers: {
        addToCart(state, action: PayloadAction<{ id: string, title: string, price: number }>) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.items[itemIndex]
            } else {
                state.items.push({ ...action.payload })
            }

        },
        removeFromCart(state, action: PayloadAction<string>) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload)
            state.items.splice(itemIndex, 1)
        }
   } 
})

export const { addToCart, removeFromCart } = cartSlice.actions