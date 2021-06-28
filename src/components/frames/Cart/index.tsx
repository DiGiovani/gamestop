import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../../../contexts/ShopContext"
import { Close } from "../../icons/close"
import { Button } from "../Menu/styles"
import { Container, Header , Title, Footer, Price} from "./styles"
import { CartGameFrame } from "./CartGameFrame"



export function Cart() {

  const {isCartOpen, switchCart, cartItems, price, shipping, total} = useContext(ShopContext)

  

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
          <h2>R$ {price}</h2>
        </Price>
        <Price>
          <h2>SHIPPING</h2>
          <h2>R$ {shipping}</h2>
        </Price>
        <Price>
          <h2>DISCOUNT</h2>
          <h2 className="discount">R$ 0,00</h2>
        </Price>
        <Price total >
          <h2>TOTAL</h2>
          <h2>R$ {total}</h2>
        </Price>
      </Footer>
    </Container>
  )
}
