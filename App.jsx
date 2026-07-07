import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import MyOrders from "./pages/MyOrders"; 
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Humne temporary '/' par hi MyOrders ko daal diya taaki direct check ho sake */}
          <Route path="/" element={<Home />} /> 
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<MyOrders />} /> 
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;