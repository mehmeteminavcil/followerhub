import "./Cart.scss";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsInstagram, BsSpotify, BsTiktok, BsTwitter } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.price));
    return total.toFixed(2);
  };

  return (
    <div className="cartPopup">
      <h1>Products in your cart</h1>

      {products?.map((item) => (
        <div className="item" key={item.id}>
          <BsInstagram className="icon" />

          <h2 className="title">{item.id}</h2>
          <div className="price">
            1 <b>x</b> {item.price}
          </div>
          <RiDeleteBinLine
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>
        <CiWallet className="wallet" />
        PROCEED TO CHECKOUT
      </button>
      <p className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </p>
    </div>
  );
};

export default Cart;
