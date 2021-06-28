import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import { ShopContext } from "../../../contexts/ShopContext";
import { Cart } from "../../icons/cart";
import { LogoExtended } from "../../icons/logo-extended";
import { Button, Container } from "./styles";

export default function Menu() {
  const { cartItems, switchCart } = useContext(ShopContext)

  const router = useRouter()

  return(
    <Container>
      <Button logo onClick={() => router.push('#')}>
        <LogoExtended />
      </Button>

      <Button onClick={switchCart} number={cartItems.length}>
        <Cart />
      </Button>
    </Container>
  )
}