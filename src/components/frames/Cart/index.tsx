import { useContext } from "react"
import { ShopContext } from "../../../contexts/ShopContext"
import { Close } from "../../icons/close"
import { Button } from "../Menu/styles"
import { Container, Header , Title} from "./styles"
import { CartGameFrame } from "./CartGameFrame"



export function Cart() {
  const {isCartOpen, switchCart, cartItems} = useContext(ShopContext)

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
    </Container>
  )
}
