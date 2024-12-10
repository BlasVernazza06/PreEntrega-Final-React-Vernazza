import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase.jsx'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

     useEffect(() => {
          setLoading(true)
          const collectionProd = collection(db, "productos")
          const docRef = doc(collectionProd, id)
          getDoc(docRef)
          .then((res) => setProducto({
               id: res.id,
               ...res.data()
          }))
          .catch((error) => console.log(error))
          .finally(() => setLoading(false))
     },[]) 

//   useEffect(()=> {
//      setLoading(true)
//      getOneProduct(id)
//      .then((res)=> setProducto(res))
//      .catch((error) => console.log(error))
//      .finally(() => setLoading(false))
//   },[id])


  
  

     return (
          <>
               <div className="cardContainer">
                    {loading ? 
                    <div className="loadMessage">
                         <p>Cargando...</p>
                    </div> :
                    <ItemDetail producto={producto} stock={producto.stock}/>}
               </div> 
          </>
     )
}

export default ItemDetailContainer