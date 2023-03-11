import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarritoLink from "./Components/CarritoLink/CarritoLink";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/Navbar Folder/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar Folder/Navbar";
import RutaNoValida from "./Components/RutaNoValida/RutaNoValida";
import Soporte from "./Components/Soporte/Soporte";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/carrito" element={<CarritoLink />} />
          <Route path="/soporte" element={<Soporte />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<RutaNoValida />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
