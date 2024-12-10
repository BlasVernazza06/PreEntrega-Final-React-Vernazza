import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

const Item = ({products, stock, onAdd}) => {
  return (
    <div className={`Products ${products.numProducto}`} >
        <img className="Product-Image" src={`${products.imagen}`} alt="FotoMaldivas" />

        <div className="Product-text">
            <div className="title-card">
                <p>{products.nombre}</p>
            </div>
            <div className="subtitle-card">
                <p>Desde <strong>{products.desde}</strong> Hasta <strong>{products.hasta}</strong></p>
                <img src="/Avion-Cards.svg" alt="AvionCard" />
                <span>Vuelo desde {products.origen} <img src="/Flechas-Cards.svg" alt="FlechasDeLasCards" /> {products.destino}</span>
            </div>
            <ItemCount stock={stock} onAdd={onAdd}/>
        </div>
        <div className="footer-product">
            <div className="footer-text">
                <p className="first">Precio individual por persona</p>
                <p className="second"> $ <span>{products.precio}</span></p>
                <p className="third"> Incluye impuestos, tasas y cargos</p>
            </div>
            <div className="seeMoreButtonDiv">
                <Link to={`/item/${products.id}`} className='seeMoreButton'>Ver Mas</Link>
            </div>
        </div>
    </div>
  )
};

export default Item;