import React, { createContext, ReactNode, useContext, useState } from "react";
import traditionalCoffe from "/img/traditional-coffee.png";
import americano from "/img/american-coffee.png";
import cremoso from "/img/cremoso-coffee.png";
import gelado from "/img/gelado-coffee.png";
import comLeite from "/img/tradicional-com-leite.png";
import latte from "/img/late-coffee.png";
import capuccino from "/img/capuccino.png";
import macchiato from "/img/macchiato.png";
import mocaccino from "/img/mocaccino.png";
import chocolate from "/img/chocolate.png";
import cubano from "/img/cubano.png";
import havaiano from "/img/havaiano.png";
import arabe from "/img/árabe.png";
import irlandes from "/img/irlandês.png";

interface CartProviderProps {
  children: ReactNode;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  information: string;
}

interface ICartItem {
  id: number;
  quantity: number;
}

interface ICartContext {
  items: ICartItem[];
  products: IProduct[];
  addToCart: (productId: number, quantity: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  getTotalQuantity: () => number;
  removeFromCart: (productId: number) => void;
  resetCart: () => void;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<ICartItem[]>([]);
  const [products] = useState<IProduct[]>([
    {
      id: 1,
      name: "Tradicional",
      description: "Expresso Tradicional",
      information: "O tradicional café feito com água quente e grãos moídos",
      price: 8.0,
      image: traditionalCoffe,
    },
    {
      id: 2,
      name: "Tradicional",
      description: "Expresso Americano",
      information: "Expresso diluído, menos intenso que o tradicional",
      price: 8.5,
      image: americano,
    },
    {
      id: 3,
      name: "Tradicional",
      description: "Expresso Cremoso",
      information: "Café expresso tradicional com espuma cremosa",
      price: 12.0,
      image: cremoso,
    },
    {
      id: 4,
      name: "Tradicional Gelado",
      description: "Expresso Gelado",
      information: "Bebida preparada com café expresso e cubos de gelo",
      price: 14.0,
      image: gelado,
    },
    {
      id: 5,
      name: "Tradicional Com Leite",
      description: "Café com leite",
      information: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 10.5,
      image: comLeite,
    },
    {
      id: 6,
      name: "Tradicional Com Leite",
      description: "Latte",
      information:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 14.5,
      image: latte,
    },
    {
      id: 7,
      name: "Tradicional Com Leite",
      description: "Capuccino",
      information:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 14.9,
      image: capuccino,
    },
    {
      id: 8,
      name: "Tradicional Com Leite",
      description: "Macchiato",
      information:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: 11.9,
      image: macchiato,
    },
    {
      id: 9,
      name: "Tradicional Com Leite",
      description: "Mocaccino",
      information: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 16.0,
      image: mocaccino,
    },
    {
      id: 10,
      name: "Especial Com Leite",
      description: "Chocolate Quente",
      information:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.5,
      image: chocolate,
    },
    {
      id: 11,
      name: "Especial alcoólico gelado",
      description: "Cubano",
      information:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 18.0,
      image: cubano,
    },
    {
      id: 12,
      name: "Especial",
      description: "Havaiano",
      information: "Bebida adocicada preparada com café e leite de coco",
      price: 14.0,
      image: havaiano,
    },
    {
      id: 13,
      name: "Especial",
      description: "Árabe",
      information: "Bebida preparada com grãos de café árabe e especiarias",
      price: 14.5,
      image: arabe,
    },
    {
      id: 14,
      name: "Especial Alcoólico",
      description: "Irlandês",
      information: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 25.0,
      image: irlandes,
    },
  ]);

  const addToCart = (productId: number, quantity: number) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { id: productId, quantity }];
      }
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const getTotalQuantity = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const removeFromCart = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const resetCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        products,
        addToCart,
        updateQuantity,
        getTotalQuantity,
        removeFromCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): ICartContext => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
