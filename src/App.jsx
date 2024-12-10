import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Checkout from './components/Checkout';
import Error from './components/Error';
import {CartProvider} from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Planifica tu proximo viaje alrededor del "} span={"MUNDO"}/>}/>
            <Route path="/products/:category" element={<ItemListContainer greeting={"Bienvenidos a la categoria "} span={"MUNDO"}/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path='./components/Checkout.jsx' element={<Checkout/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
      </BrowserRouter>
    </CartProvider>
      
  )
}

export default App
