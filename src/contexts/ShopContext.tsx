import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import games from '../database/products.json'

interface Game {
  id: number,
  name: string,
  price: number,
  score: number,
  image: string,
}

interface ProviderProps {
  children: ReactNode
}

interface ContextProps {
  price: number;
  cartItems: Game[];
  setPrice: Dispatch<SetStateAction<Number>>;
  setCartItems: Dispatch<SetStateAction<Game[]>>;
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
}


export const ShopContext = createContext({} as ContextProps)

export function ShopProvider({
  children
}: ProviderProps) {

  const [price, setPrice] = useState(0)
  const [cartItems, setCartItems] = useState<Game[]>([])

  function addItem(id: number) {
    const game = games.filter(game => game.id == id)
    setCartItems(cartItems.concat(game))
  }

  function removeItem(id: number) {
    const games = cartItems.filter(game => {
      game.id == id ? false : true;
    })
    setCartItems(games)
  }

  
  return(

    <ShopContext.Provider value={{
      price,
      setPrice,
      cartItems,
      setCartItems,
      addItem,
      removeItem
    }}>

      {children}

    </ShopContext.Provider>


  )

}