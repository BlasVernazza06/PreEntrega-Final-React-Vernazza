import { Link } from "react-router-dom";

const EmpyCart = () => {
     return (
          <div className="cart">
               <h2>Tu carrito esta vacio!</h2>
               <h4>Te invitamos a ver nuestros productos</h4>
               <Link className='HomeButton' to='/'>Seguir Comprando</Link>
          </div>
     )
}

export default EmpyCart