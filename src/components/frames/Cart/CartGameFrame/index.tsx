import Image from 'next/image'
import { useContext, useState } from "react"
import { ShopContext } from "../../../../contexts/ShopContext"
import games from '../../../../database/products.json'
import { Minus } from "../../../icons/minus"
import { Plus } from "../../../icons/plus"
import { Container, Control, Counter, CounterContainer, CoverContainer, GameTitle, InfoContainer } from "./styles"


interface cartItemsProps {
  id: number,
  price: number,
  amount: number
}

export function CartGameFrame({index}: {index: number }) {
  const { cartItems, setCartItems, removeItem, calcPrice } = useContext(ShopContext)
  
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
    calcPrice()
    return setCartItems(editableCart)
  }

  function decreaseAmount(index: number) {
    if(amount == 1) {
      return removeItem(game.id)
    }

    let editableCart = cartItems
    editableCart[index].amount -=  1 ;
    setAmount(editableCart[index].amount)
    calcPrice()
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
        <Image src={image} width="100" height="100" alt=""/>
      </CoverContainer>
    </Container>
  )
}
