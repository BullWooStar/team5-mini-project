import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import Home from "./pages/HomePage";
import Login from "./pages/auth/LoginPage";
import SignUp from "./pages/auth/SignUpPage";
import UserEdit from "./pages/auth/UserEditPage";
import Cart from "./pages/product/Cart";
import Curation from "./pages/product/CurationPage";
import AllProduct from "./pages/product/AllProductPage";
import Promotion from "./pages/product/PromotionPage";
import PaymentCompleted from "./pages/product/PaymentCompletedPage";
import NotFound from "./pages/NotFound";
import LoginLayout from "./components/LoginLayout";
import StyleLayout from "./components/UI/StyleLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<StyleLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<LoginLayout />}>
              <Route path="/useredit" element={<UserEdit />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/curation" element={<Curation />} />
              <Route path="/allproduct" element={<AllProduct />} />
              <Route path="/promotion" element={<Promotion />} />
              <Route path="/paymentcomplted" element={<PaymentCompleted />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
