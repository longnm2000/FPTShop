import { Routes, Route, useNavigate } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SmartphonePage from "./pages/SmartphonePage/SmartphonePage";
import { useEffect } from "react";
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";
import UsersManager from "./pages/Admin/UsersManager/UsersManager";
import OrdersManager from "./pages/Admin/OrdersManager/OrdersManager";
import PrivateAdminRoutes from "./components/PrivateRoutes/PrivateAdminRoutes";
import SmartphonesManager from "./pages/Admin/SmartphonesManager/SmartphoneManager";
import AddSmartphone from "./pages/Admin/AddSmartphone/AddSmartphone";

function App() {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, [navigate]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/smartphone/:id" element={<DetailPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/smartphone" element={<SmartphonePage />}></Route>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route element={<PrivateAdminRoutes />}>
          <Route path="/admin/users" element={<UsersManager />}></Route>
          <Route path="/admin/orders" element={<OrdersManager />}></Route>
          <Route
            path="/admin/smartphones"
            element={<SmartphonesManager />}
          ></Route>
          <Route
            path="/admin/smartphones/add"
            element={<AddSmartphone />}
          ></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
