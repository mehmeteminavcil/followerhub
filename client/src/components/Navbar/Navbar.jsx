import "./Navbar.scss";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <img src="/img/en.png" alt="" />
          KAUFEN
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
          <div className="cart">
            <ShoppingCartOutlinedIcon className="cartIcon" />
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
