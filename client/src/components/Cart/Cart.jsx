import "./Cart.scss";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsInstagram, BsSpotify, BsTiktok, BsTwitter } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";

const Cart = () => {
  return (
    <div className="cartPopup">
      <h1>Products in your cart</h1>
      <div className="item">
        <BsInstagram className="icon" />

        <h2 className="title">1.000 Dusmeyen Follower</h2>
        <div className="price">
          1 <b>x</b> $19.90
        </div>
        <RiDeleteBinLine className="delete" />
      </div>
      <div className="item">
        <BsInstagram className="icon" />

        <h2 className="title">1.000 Follower</h2>
        <div className="price">
          1 <b>x</b> $19.90
        </div>
        <RiDeleteBinLine className="delete" />
      </div>

      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123.20</span>
      </div>
      <button>
        <CiWallet className="wallet" />
        PROCEED TO CHECKOUT
      </button>
      <p className="reset">Reset Cart</p>
    </div>
  );
};

export default Cart;
