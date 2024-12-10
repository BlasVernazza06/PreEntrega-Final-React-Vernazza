import { useState } from "react"

const ItemCount = ({stock , onAdd}) => {
     const [count, setCount] = useState(1)

     const sumar = () =>{
          if(count < stock){
               setCount(count + 1)
          }
     }

     const restar = () =>{
          if(count > 1 ){
               setCount(count - 1)
          }
     }

     const onAddHandle = () => {
          onAdd(count)
          setCount(1)
     }



     return (
          <>
               <div className="cantProducts">
                    <button onClick={restar}>-</button>
                    <p>{count}</p>
                    <button onClick={sumar}>+</button>
               </div>
               <div className="button-section"> 
                    <button className="Buy-Button" onClick={onAddHandle}>Comprar</button>
               </div>
          </>
     )

     
}

export default ItemCount;