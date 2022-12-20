
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/App.css';
import ProductosCreados from '../pages/ProductosCreados';
import Navegacion from '../layouts/Navegacion';
import CrearProducto from '../pages/CrearProducto';

function App() {
  return ( 
    <BrowserRouter>
      <Navegacion></Navegacion>
      <Routes>
        <Route path="/" element={<ProductosCreados></ProductosCreados>}></Route>
        <Route path="/crearproducto" element={<CrearProducto></CrearProducto>}></Route>
      </Routes>
    </BrowserRouter>
   );
}

export default App;