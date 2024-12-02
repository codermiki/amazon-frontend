import { ACTION } from "./action.type";

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD_TO_BASKET:
      // return {
      //   ...state, // Spread the current state
      //   basket: [...state.basket, action.item], // Update the basket array
      // };
      const existingItem = state.basket.find((item) => {
        return item.id === action.item.id;
      });

      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updatedItem = state.basket.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
        return {
          ...state,
          basket: updatedItem,
        };
      }
    case ACTION.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1);
        }
      }

      return {
        ...state,
        basket: newBasket,
      };
    case ACTION.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
