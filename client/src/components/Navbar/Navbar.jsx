import "./Navbar.scss";

import { Link, useParams } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import SocialMediaServices from "../SocialMediaServices/SocialMediaServices";
import useFetch from "../../hooks/useFetch";

function Navbar() {
  const products = useSelector((state) => state.cart.products);

  const { data, loading, error } = useFetch("/categories");
  console.log(data);

  const [navOpen, setNavOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="wrapper">
        <Link to="/" className="link">
          <div className="logo">LOGO</div>
        </Link>
        <ul className="links">
          <li>
            <Link className="link">Hizmetlerimiz</Link>
          </li>
          <li>
            <Link className="link">Araclar</Link>
          </li>
          <li>
            <Link className="link">Blog</Link>
          </li>
          <li>
            <Link className="link">Kurumsal</Link>
          </li>
          <li className="cartContainer">
            <div className="cart" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon className="cartIcon" />
              <span>{products.length}</span>
            </div>
            {open && <Cart />}
          </li>
        </ul>
        <div className="toggleBtn" onClick={() => setNavOpen(!navOpen)}>
          <RxHamburgerMenu />
        </div>
      </div>
      <div className={"dropdownWrapper" + (navOpen ? "  open" : "")}>
        <li>
          <Link className="link" onClick={() => setServicesOpen(!servicesOpen)}>
            Hizmetlerimiz
          </Link>
          <ul className={"dropdownServices " + (servicesOpen ? "  open" : "")}>
            {data?.map((item) => (
              <li key={item.id} onClick={() => setNavOpen(!navOpen)}>
                <Link to={item.attributes.title}>{item.attributes.title}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link className="link">Araclar</Link>
        </li>
        <li>
          <Link className="link">Blog</Link>
        </li>
        <li>
          <Link className="link">Kurumsal</Link>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
