import '../styles/globals.css'
import { ShopProvider } from '../contexts/ShopContext'


function MyApp({ Component, pageProps }) {
  return (
    <ShopProvider>
      <Component {...pageProps} />
    </ShopProvider>
  )
}

export default MyApp
