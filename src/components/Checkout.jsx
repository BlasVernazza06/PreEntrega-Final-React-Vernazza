import { useContext } from "react"
import {useState} from 'react'
import { CartContext } from "../context/CartContext"
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore"
import { db } from "../services/firebase"
import { Link } from "react-router-dom"
import 'animate.css';

const Checkout = () => {
     const [user, setUser] = useState({})
     const [validate, setValidate] = useState("")
     const [orderId, setOrderId] = useState("")
     const {cart, cartTotal, clear} = useContext(CartContext)

     const userData = (e)=>{
          setUser(
              {
                  ...user,
                  [e.target.name]:e.target.value 
              }
          )
     }
     
     
     

    const finalizarCompra = (e)=>{
        e.preventDefault()
        if(!user.name || !user.lastname || !user.email || !user.address){
            alert('Los campos son obligatorios')
        }else if(user.email !== validate){
            alert('Los mails deben ser iguales')
        }else{
            //objeto de la orden
            let order = {
                buyer: user,
                carrito:cart,
                total:cartTotal(),
                date: serverTimestamp()
            }
            //traer nuestra coleccion
            const ventas = collection(db, "orders")
            //agregamos un doc
            addDoc(ventas,order)
            .then((res) => {
                cart.forEach((item)=>{
                    const docRef = doc(db, "productos", item.id)
                    getDoc(docRef)
                    .then((dbDoc)=>{
                        updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
                    })
                })
                  setOrderId(res.id)
                  clear()
              })
              .catch((error)=> console.log(error))
          }
    }
    return (
        <div>
            {orderId !== "" ?  
            <div>
                <h4>Generaste bien tu orden</h4>
                <h5>El id es: {orderId}</h5>
                <Link to='/'>Volver a Home</Link>
            </div>
               
            :
            <section className="Form-Help-Section">
                <form className="Card-Form" onSubmit={finalizarCompra}>
                    <label className="form-label">Nombre</label>
                    <input type="text" name='name' placeholder='Ingrese su nombre' onChange={userData}/>

                    <label className="form-label">Apellido</label>
                    <input type="text" name='lastname' placeholder='Ingrese su apellido' onChange={userData}/> 

                    <label className="form-label">Direccion</label>
                    <input type="text" name='address' placeholder='Ingrese su dirección' onChange={userData}/>

                    <label className="form-label">Correo Electronico</label>
                    <input type="email" name='email' placeholder='Ingrese su correo' onChange={userData}/> 

                    <label className="form-label">Confirmar Email</label>
                    <input type="email" name='second-email' placeholder='Repita su correo' onChange={(e)=> setValidate(e.target.value)} />

                    <button className="button-submit btn btn-primary wd" type="submit">Enviar</button>
                </form>
            </section>} 
        </div>
    )
}
   
export default Checkout