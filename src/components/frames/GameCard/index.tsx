import Image from 'next/image'
import { useContext } from 'react'
import { ShopContext } from '../../../contexts/ShopContext'
import { Cart } from '../../icons/cart'
import { Container, ImageFrame, TitleFrame, CartButton } from "./styles"

interface Game {
  id: number,
  name: string,
  price: number,
  score: number,
  image: string,
}

export function GameFrame({game}: {game: Game}) {
  const {addItem} = useContext(ShopContext)

  return(
    <Container>
      <ImageFrame>
        <Image src={`/assets/${game.image}`} width={180} height={180} />
      </ImageFrame>

      <TitleFrame>
        <h2>{ game.name }</h2>
        <h3>{`R$ ${game.price}`}</h3>
        <CartButton onClick={() => addItem(game.id)}>
          <Cart />
        </CartButton>
        
      </TitleFrame>
    </Container>
  )
}