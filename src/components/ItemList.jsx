import Item from "../components/Item"

const ItemList = ({productos}) => {
  return (
    <section className="Shop-Section">
      <div className="title-Shop" id="shop">
          <p>Shop</p>
      </div>
      
      <div className="first-shop-section">
          <p>Paquetes Turísticos</p>
      </div>

      <section className="grid-Products">
          {productos.map((products) => <Item products={products} key={products.id}/>)}
      </section>
    </section>
  )
}

export default ItemList