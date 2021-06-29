import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../../../contexts/ShopContext"
import { Close } from "../../icons/close"
import { Dollar } from "../../icons/dollar"
import { Button } from "../Menu/styles"
import { Container, Header , Title, Footer, Price, CheckButton, FormInput } from "./styles"
import { CartGameFrame } from "./CartGameFrame"



export function Cart() {

  const {isCartOpen, switchCart, cartItems, price, shipping, total, status, inputValue, setInputValue} = useContext(ShopContext)


  function formatNumber(number: number) {
    const arr = `${number}`.split('.')
    const intNum = arr[0]

    if(arr.length == 1) arr.push('00');

    const decNum = arr[1].length != 2 ? (arr[1].length > 2 ? `${arr[1][0]}${arr[1][1]}` : `${arr[1]}0`) : arr[1]
    return `${intNum},${decNum}`
  }

  const fPrice = formatNumber(price)
  const fShipping = formatNumber(shipping)
  const fTotal = formatNumber(total)

  return(
    <Container active={isCartOpen ? true : false}>
      <Header>
        <Button onClick={switchCart}>
          <Close />
        </Button>
        <Title size={48}>CART</Title>
      </Header>

      {
        cartItems.map( (game, index) => {
          return(
            <CartGameFrame index={index}  key={`${game.id}-cart`}/>
          )
        })
      }
      <Footer>
        
        <Price>
          <h2>ITEMS</h2>
          <h2>R$ {fPrice}</h2>
        </Price>
        <Price>
          <h2>SHIPPING</h2>
          <h2>R$ {fShipping}</h2>
        </Price>
        <Price>
          <h2>DISCOUNT</h2>
          <h2 className="discount">R$ 0,00</h2>
        </Price>
        <Price total >
          <h2>TOTAL</h2>
          <h2>R$ {fTotal}</h2>
        </Price>

        <CheckButton>
          CHECKOUT <Dollar />
        </CheckButton>

        <FormInput status={status} onChange={ e => setInputValue(e.target.value)}/>
      </Footer>
    </Container>
  )
}
