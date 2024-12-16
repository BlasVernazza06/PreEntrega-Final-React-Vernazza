import Swal from 'sweetalert2'
import { UseCart } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const CartList = () => {
    const {cart, cartTotal, clear} = UseCart()
    
    const clearCart = () =>{
      Swal.fire({
        title: "¿Esta seguro de borrar todo el carrito?",
        showDenyButton: true,
        confirmButtonText: "Si",
        denyButtonText: `Cancelar`
      }).then((result) => {
        if (result.isConfirmed) {
          clear()
        } else if (result.isDenied) {
          Swal.fire({
               title: "El proceso ha sido cancelado",
               confirmButtonText: "Ok",
          })
        }
      });
      
    }
    console.log(cartTotal)
  return (
     <>
          <div className='purchases'>
               {cart.map((prod)=> <CartItem key={prod.id} prod={prod}/>)}
          </div>
          <div className="confirm-purchase">
               <aside className="buttons-aside">
                    <Link className="finish" to='/checkout' >Finalizar Compra</Link>
                    <button className="continue" onClick={clearCart}>Borrar Carrito</button>
               </aside>
               <span className='price-aside'>Total a pagar: ${cartTotal()}</span>
          </div>
     </>
     
  )
}

export default CartList