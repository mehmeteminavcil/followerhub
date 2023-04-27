import "./Cart.scss";
import { RiDeleteBinLine } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51Mz7ggHlxNfkUvkRIMWgEeqsGwXXAt1iDwfv8CtEqDYYA4I5sduZnJqDxf8FpcpLgqVRwh0nti0rvdBIqLiH7EZ700Qtl4XFxu"
  );
  console.log(products);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });

      stripe
        .redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        })
        .then((result) => {
          if (result.error) {
            console.log(result.error.message);
          } else {
            console.log("Payment succeeded");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cartPopup">
      <h1>Products in your cart</h1>

      {products?.map((item) => (
        <div className="item" key={item.id}>
          <i className={item.icon + " icon"}></i>

          <h2 className="title">{item.username}</h2>
          <div className="price">
            {item.quantity} <b>x</b> {item.price}
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
      <button onClick={handlePayment}>
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
