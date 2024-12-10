import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../mock/data"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting, span}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {category}= useParams()
    
    useEffect(() =>{
        setLoading(true)
        getProducts()
        .then((res) =>{
            if (category) {
                setProductos(res.filter((prod)=> prod.category === category))
            } else {
                setProductos(res)
            }
        
        })
        .catch((error) => new Error(error))
        .finally(() => setLoading(false))
    },[category])

    console.log(productos)

    const onAdd = (cantidad) => {
        console.log(`Agregaste al carrito ${cantidad} productos`)
    }

    return(
        <>
            <div className="grid-StartSection">
                <div className="StartTextSection">
                    <h1 className="title">{greeting} <span>{span}</span></h1>
                        
                    <h2 className="sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Fugiat porro dolore enim corrupti, non rem similique veniam, officia alias 
                            repellat officiis ducimus eos perferendis id eum quos sed, nisi temporibus.</h2>
                            
                    <div className="Startbuttons">
                        <button className="Start"><a href="#shop-sec">Empezar</a></button>
                        <button className="More">Mas</button>
                    </div>
                </div>
            </div> 

            <div id="shop-sec">
                {loading ? 
                    <div className="loadMessage">
                         <p>Cargando...</p>
                    </div> 
                    : 
                    <ItemList productos={productos} stock={12} onAdd={onAdd}/>}
            </div>
        </>
    )
}

export default ItemListContainer;