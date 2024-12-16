import { UseCart } from '../context/CartContext'

const CartItem = ({prod}) => {
     const {removeItem} = UseCart()
     return (
     <article className="cards">
          <div className="idSec">
               <p>ID:</p>
               <span>{`${prod.id}`}</span>
          </div>
          <div className="image_container">
               <img src={`${prod.imagen}`} alt="" />
          </div>
          <div className="CartItemText_container">
               <strong><p>{`${prod.nombre}`}</p></strong>
               <p>Sale el día {`${prod.desde}`}. Regresa el {`${prod.hasta}`}</p>
          </div>
          <div className="buttonsProduct">
               <button className="delete" onClick={()=> removeItem(prod.id)}>Eliminar</button>
               <button className="details" >Ver Detalles</button>
          </div>
          <div className="separator"></div>
          <div className="priceSec">
               <p className="price">Precio: ${prod.precio}</p>
               <p>Cantidad: {prod.cantidad}</p>
          </div>
     </article>
     )
}

export default CartItem
