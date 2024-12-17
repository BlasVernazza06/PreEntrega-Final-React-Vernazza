import { UseCart } from '../context/CartContext'
import CartList from './CartList'
import EmpyCart from './EmpyCart'

const CartView = () => {
     const {cart} = UseCart()
     console.log(cart)
     return (
          <>
               {!cart.length ? 
                    <EmpyCart/> 
                    : 
                    <section className="purchasesSection">
                         <header className="title">
                              <p>Mis Compras</p>
                         </header>
                         <CartList/>
                    </section>
               }
    
          </>
     )
}

export default CartView