import { useMemo, useState } from "react";
import "./DiscountCard.scss";

import { BsPersonAdd, BsCheck2, BsCartPlus } from "react-icons/bs";
import { GoEyeClosed } from "react-icons/go";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
const DiscountCard = ({ discountCard }) => {
  const [showForm, setShowForm] = useState(false);
  const [profilePicture, setProfilePicture] = useState("/img/user.png");
  const [username, setUserName] = useState(null);
  const [buttonType, setButtonType] = useState(false);

  const dispatch = useDispatch();

  const handleAddCart = () => {
    if (username) {
      dispatch(
        addToCart({
          id: discountCard.id,
          title: discountCard.attributes.title,
          desc_1: discountCard.attributes.desc_1,
          price: discountCard.attributes.price,
          icon: discountCard.attributes.icon,
          quantity: 1,
          username: username,
        })
      );
    }
    console.log("username is empty");
  };

  const cardStyle = useMemo(() => {
    return {
      background: discountCard.attributes.color,
    };
  }, [discountCard.attributes.color]);

  return (
    <div className="discountCardContainer">
      <div className="discountCard">
        <ul>
          <li className="title" style={cardStyle}>
            <h3>
              {discountCard.attributes.title}
              <br /> PACKAGES
            </h3>

            <i className={discountCard.attributes.icon + " logo"}></i>
          </li>
          <li className="first">
            <BsPersonAdd className="first" />
            <p>{discountCard.attributes.desc_1}</p>
          </li>
          <li>
            <BsCheck2 className="icon" />
            <p>{discountCard.attributes.desc_2} </p>
          </li>
          <li>
            <BsCheck2 className="icon" />
            <p>{discountCard.attributes.desc_3}</p>
          </li>
          <li>
            <BsCheck2 className="icon" />
            <p>{discountCard.attributes.desc_4}</p>
          </li>

          <li>
            <BsCheck2 className="icon" />
            <p>{discountCard.attributes.desc_5}</p>
          </li>
        </ul>
        <div className="price">
          <p>${discountCard.attributes.price}</p>
          <button
            onClick={() => {
              setButtonType(true);
              setShowForm(!showForm);
            }}
          >
            <FaCartPlus className="icon" />
          </button>
          <button
            className="buyNow"
            onClick={() => {
              setButtonType(false);
              setShowForm(!showForm);
            }}
            style={cardStyle}
          >
            Buy Now
          </button>
        </div>
      </div>
      {showForm && (
        <div className="cardForm">
          <GoEyeClosed
            className="close"
            onClick={() => setShowForm(!showForm)}
          />
          <form>
            <div className="checkAccount">
              <img src={profilePicture} alt="ss" />

              <input
                type="text"
                placeholder="write your username.."
                onChange={(e) => setUserName(e.target.value)}
              />

              {buttonType ? (
                <button type="button" onClick={handleAddCart}>
                  Add to cart
                </button>
              ) : (
                <button type="button" style={cardStyle}>
                  Buy Now
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DiscountCard;
