import React, {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
  type Dispatch,
} from "react";

/* Types */
export type CartItem = {
  id: string;
  title: string;
  price: number;
  image?: string;
  rating:number;
  qty: number;
};

type CartState = {
  cart: CartItem[];
};

type CartAction =
  | {
      type: "ADD_TO_CART";
      payload: {
        id: string;
        title: string;
        price: number;
        image: string;
        rating: number;
      };
    }
  | {
      type: "REMOVE_FROM_CART";
      payload: string;
    }
  |
     {
      type: "DECREASE_QTY";
      payload: string;
    }


type CartContextType = {
  cart: CartItem[];
  dispatch: Dispatch<CartAction>;
};

/* Initial State */
const initialState: CartState = {
  cart: [],
};

/* Reducer */
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = action.payload;

      const existing = state.cart.find((x) => x.id === item.id);

      if (existing) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id === item.id ? { ...x, qty: x.qty + 1 } : x
          ),
        };
      }

      return { ...state, cart: [...state.cart, { ...item, qty: 1 }] };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload),
      };
      case "DECREASE_QTY": {
      const id = action.payload;
      const existing = state.cart.find((x) => x.id === id);
      if (!existing) return state;
      if (existing.qty > 1) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id === id ? { ...x, qty: x.qty - 1 } : x
          ),
        };
      }
      // remove item when qty would go to 0
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== id),
      };
    }
 

    default:
      return state;
  }
}

/* Context */
const CartContext = createContext<CartContextType | null>(null);

/* Provider */
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

/* Hook */
export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
