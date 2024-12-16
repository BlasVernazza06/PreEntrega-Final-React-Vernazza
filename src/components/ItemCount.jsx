import { useState } from "react"

const ItemCount = ({stock , onAdd}) => {
     const [count, setCount] = useState(1)

     const sumar = () =>{
          if(count < stock){
               setCount(count + 1)
          }
     }

     const restar = () =>{
          if(count > 0 ){
               setCount(count - 1)
          }
     }

     const onAddHandler = () => {
          onAdd(count)
     }



     return (
          <>
               <div className="cantProducts">
                    <button onClick={restar}>-</button>
                    <p>{count}</p>
                    <button onClick={sumar}>+</button>
               </div>
               <div className="button-section"> 
                    <button className="Buy-Button" onClick={onAddHandler}>Comprar</button>
               </div>
          </>
     )

     
}

export default ItemCount;