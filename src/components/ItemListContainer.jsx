import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../services/firebase.jsx'
import Loader from "./Loader.jsx"

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hayCat, setHayCat] = useState(""); // Cambié el nombre para mayor claridad
    const { category } = useParams();

    useEffect(() => {
        if (category && category !== "") {
            setHayCat(category);
        } else {
            setHayCat("Mundo");
        }
    }, [category]);
    useEffect(() => {
        setLoading(true)
        const collectionProd = category ? query(collection(db, "productos"), where("category", "==", category)) : collection(db, "productos");
        getDocs(collectionProd)
        .then((res) => {
            const list = res.docs.map((product) => {
                return{
                    id: product.id,
                    ...product.data()
                }
            })
            setProductos(list)
        })
        .catch((error) => console.log(error))
        .finally(()=>setLoading(false))
    },[category])


    return(
        <>
            <div className="grid-StartSection">
                <div className="StartTextSection">
                    <h1 className="title">{greeting}</h1>
                    <h1 className="Second-title"><span>{hayCat}</span></h1>
                        
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
                    <Loader/> 
                    : 
                    <ItemList productos={productos}/>}
            </div>
        </>
    )
}

export default ItemListContainer;