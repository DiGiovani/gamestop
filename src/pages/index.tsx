import Head from 'next/head'
import Image from 'next/image'
import Menu from '../components/frames/Menu'
import { GameFrame } from '../components/frames/GameCard'
import styles from '../styles/Pages/Home.module.css'

import games from '../database/products.json'
import { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import { Cart } from '../components/frames/Cart'

export default function Home() {

  const {isCartOpen} = useContext(ShopContext)

  return (
    <div className={styles.container}>
      <Menu /> 
      <div className={styles.title}>
        <h1>Library</h1>
      </div>
      <div className={styles.gamesContainer}>
        {
          games.map(game => {
            return(
              <GameFrame game={game} key={game.id} />
            )
          })
        }
      </div>
      <div style={isCartOpen ? {display: 'flex'} : {display: 'none'}} className={styles.cartBackground} />
      <Cart />
      
    </div>
  )
}
