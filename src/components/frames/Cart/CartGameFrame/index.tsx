import { Container, GameTitle, CounterContainer, InfoContainer, CoverContainer, Control, Counter } from "./styles"
import Image from 'next/image'

import games from '../../../../database/products.json'
import { Minus } from "../../../icons/minus"
import { Plus } from "../../../icons/plus"
import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../../../../contexts/ShopContext"

interface cartItemsProps {
  id: number,
  price: number,
  amount: number
}

export function CartGameFrame({index}: {index: number }) {
  const { cartItems, setCartItems, removeItem } = useContext(ShopContext)
  
  const [ amount, setAmount ] = useState(cartItems[index].amount) //this part was created to update the number asap

  const game = cartItems[index]
  const product = (games.filter(product => product.id == game.id ))[0]
  const image = `/assets/${product.image}`

  const priceArr = `${product.price}`.split('.')
  priceArr[1] = priceArr[1].length == 1 ? `${priceArr[1]}0` : priceArr[1];
  const price = priceArr.join(',')

  function increaseAmount(index: number) {
    let editableCart = cartItems
    editableCart[index].amount += cartItems[index].amount < 10 ? 1 : 0;
    setAmount(editableCart[index].amount)
    return setCartItems(editableCart)
  }

  function decreaseAmount(index: number) {
    if(amount == 1) {
      return removeItem(game.id)
    }

    let editableCart = cartItems
    editableCart[index].amount -=  1 ;
    setAmount(editableCart[index].amount)
    return setCartItems(editableCart)
  }

  

  return(
    <Container>
      <CounterContainer>
        <Control onClick={() => decreaseAmount(index)}>
          <Minus />
        </Control>
          <Counter>
            {amount}
          </Counter>
        <Control onClick={() => increaseAmount(index)} >
          <Plus />
        </Control>
      </CounterContainer>

      <InfoContainer>
        <GameTitle size={24} color="#000">{product.name}</GameTitle>
        <GameTitle price size={14} color="#2F80ED">R${price}</GameTitle>
      </InfoContainer>

      <CoverContainer>
        <Image src={image} width="100" height="100"/>
      </CoverContainer>
    </Container>
  )
}
