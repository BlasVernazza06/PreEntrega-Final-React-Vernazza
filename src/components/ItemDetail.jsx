import ItemCount from './ItemCount'

const ItemDetail = ({producto, stock, onAdd}) => {
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
                         <div className="ItemDetailBuySec">
                              <ItemCount stock={stock} onAdd={onAdd}/>
                         </div>
                    </div>
               </div>
          </section>
     </>
  )
}

export default ItemDetail