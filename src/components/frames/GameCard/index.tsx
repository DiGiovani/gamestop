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

  const priceArr = `${game.price}`.split('.')
  priceArr[1] = priceArr[1].length == 1 ? `${priceArr[1]}0` : priceArr[1];
  const price = priceArr.join(',')

  return(
    <Container>
      <ImageFrame>
        <Image src={`/assets/${game.image}`} width={180} height={180} alt=""/>
      </ImageFrame>

      <TitleFrame>
        <h2>{ game.name }</h2>
        <h3>{`R$ ${price}`}</h3>
        <CartButton onClick={() => addItem(game.id)}>
          <Cart />
        </CartButton>
        
      </TitleFrame>
    </Container>
  )
}