import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarritoLink from "./Components/CarritoLinkGeneral/CarritoLink";
import ItemDetailContainer from "./Components/ItemDetailGeneral/ItemDetailContainer";

import ItemListContainer from "./Components/ItemListGeneral/ItemListContainer";
import Navbar from "./Components/Navbar Folder/Navbar";
import RutaNoValida from "./Components/RutaNoValida/RutaNoValida";
import Soporte from "./Components/Soporte/Soporte";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/carrito" element={<CarritoLink />} />
          <Route path="/soporte" element={<Soporte />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<RutaNoValida />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
