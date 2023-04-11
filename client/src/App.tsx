import "./App.css";
import { useEffect, useMemo } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "@/scenes/home";
import ItemDetails from "@/scenes/itemDetails";
import Checkout from "@/scenes/checkout";
import Confirmation from "@/scenes/confirmation";
import Navbar from "./scenes/global/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { themeSettings } from "./theme";
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item/:itemId" element={<ItemDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/success" element={<Confirmation />} />
          </Routes>
          <CartMenu />
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
