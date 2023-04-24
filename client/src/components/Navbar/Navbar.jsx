import "./Navbar.scss";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <Link to="/">
            <img src="/img/en.png" alt="" />
            KAUFEN
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link">Hizmetlerimiz</Link>
          </div>
          <div className="item">
            <Link className="link">Araclar</Link>
          </div>
          <div className="item">
            <Link className="link">Blog</Link>
          </div>
          <div className="item">
            <Link className="link">Kurumsal</Link>
          </div>
          <div className="cart" onClick={() => setOpen(!open)}>
            <ShoppingCartOutlinedIcon className="cartIcon" />
            <span>{products.length}</span>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
