import { useState } from 'react'
import ItemCount from './ItemCount'
import { UseCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({producto}) => {
     const [compra, setCompra] = useState(false)
     // const {addToCart, cart}= useContext(CartContext)
     const {addToCart, itemQuantity}= UseCart()
     const onAdd = (cantidad) =>{
       setCompra(true)
       // let cartItem = {
       //   name: producto.name,
       //   img: producto.img,
       //   price: producto.price,
       //   stock:producto.stock,
       //   id:producto.id
       // }
       //   addToCart(cartItem, cantidad)
       addToCart(producto, cantidad)
     }
     const stockActualizado = producto.stock - itemQuantity(producto.id)
     return (
          <>
               <section className="itemCard">
                    <div className="card">
                         <div className="img_container">
                              <img src={`${producto.imagen}`} alt="" />
                         </div>
                         <div className="text_container">
                              <span>{producto.pais}</span>
                              <h1>{producto.nombre}</h1>
                              <p>{producto.desde}</p>
                              <p>{producto.hasta}</p>
                              <div className="priceSec">
                                   <p>Precio: ${producto.precio}</p>
                              </div>
                              {compra ? 
                              <div className='postPurchaseButtons'>
                                  <Link className='continue' to='/'>Seguir comprando</Link>
                                  <Link className='cartButton' to='/cart'>Ir al carrito</Link> 
                              </div>
                                   
                              :

                              <div className="ItemDetailBuySec">
                                   <ItemCount stock={stockActualizado} onAdd={onAdd}/>
                              </div>
                              }
                         </div>
                    </div>
               </section>
          </>
     )
}

export default ItemDetail