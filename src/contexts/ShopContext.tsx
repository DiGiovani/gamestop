import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
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
  shipping: number;
  total: number;
  cartItems: cartItemsProps[];
  isCartOpen: boolean;
  setPrice: Dispatch<SetStateAction<Number>>;
  setCartItems: Dispatch<SetStateAction<cartItemsProps[]>>;
  switchCart: () => void;
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
  calcPrice: () => void;
}

export const ShopContext = createContext({} as ContextProps)

export function ShopProvider({
  children
}: ProviderProps) {

  const [price, setPrice] = useState(0)
  const [shipping, setShipping] = useState(0)
  const [total, setTotal] = useState(0)
  const [cartItems, setCartItems] = useState<cartItemsProps[]>([])
  const [ isCartOpen, setIsCartOpen] = useState(false)

  

  function calcPrice() {
    const pricesArr = cartItems.map( item => {
      const costArr = [];
      for(let i = 0; i < item.amount; i++) {
        costArr.push(item.price)
      }

      const cost = costArr.reduce((a, b) => a+b)

      return cost
    }) || [0];

    const totalAmount: number = cartItems.reduce((sum, b) => {
      return sum + b.amount
    }, 0)

    const itemsPrice = pricesArr.length <= 0 ? 0 :pricesArr.reduce((a, b) => a+b) 
    const totalShipping = itemsPrice < 250 ? totalAmount * 10 : 0;
    const total = itemsPrice + totalShipping

    setPrice(itemsPrice)
    setShipping(totalShipping)
    setTotal(total)
  }

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

  useEffect(() => {
    calcPrice()
  }, [cartItems])

  return(

    <ShopContext.Provider value={{
      price,
      shipping,
      total,
      setPrice,
      cartItems,
      setCartItems,
      addItem,
      removeItem,
      isCartOpen,
      switchCart,
      calcPrice
    }}>

      {children}

    </ShopContext.Provider>
  )
}
