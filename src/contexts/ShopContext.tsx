import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import games from '../database/products.json'

interface Game {
  id: number,
  name: string,
  price: number,
  score: number,
  image: string,
}

interface cartItemsProps {
  id: number,
  price: number,
  amount: number
}

interface ProviderProps {
  children: ReactNode
}

interface ContextProps {
  price: number;
  cartItems: cartItemsProps[];
  isCartOpen: boolean;
  setPrice: Dispatch<SetStateAction<Number>>;
  setCartItems: Dispatch<SetStateAction<cartItemsProps[]>>;
  switchCart: () => void;
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
}

export const ShopContext = createContext({} as ContextProps)

export function ShopProvider({
  children
}: ProviderProps) {

  const [price, setPrice] = useState(0)
  const [cartItems, setCartItems] = useState<cartItemsProps[]>([])
  const [ isCartOpen, setIsCartOpen] = useState(false)

  function addItem(id: number) {
    const mask = cartItems.map( game => game.id == id ? 1 : 0)
    if(mask.indexOf(1) != -1) {
      return;
    }


    
    const game = games.filter(game => game.id == id)

    const product = {
      id: game[0].id,
      price: game[0].price,
      amount: 1
    } as cartItemsProps

    setCartItems(cartItems.concat(product))
  }

  function removeItem(id: number) {
    const games = cartItems.filter(game => {
      return game.id == id ? false : true;
    })
    setCartItems(games)
  }

  

  function switchCart() {
    setIsCartOpen(!isCartOpen)
  }

  return(

    <ShopContext.Provider value={{
      price,
      setPrice,
      cartItems,
      setCartItems,
      addItem,
      removeItem,
      isCartOpen,
      switchCart,
    }}>

      {children}

    </ShopContext.Provider>
  )
}
