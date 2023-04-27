import { useCallback, useMemo, useState } from "react";
import "./Card.scss";
import { BsPersonAdd, BsCheck2 } from "react-icons/bs";
import { GoEyeClosed } from "react-icons/go";
import { FaCartPlus } from "react-icons/fa";
import { addToCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";

const Card = ({ card }) => {
  const [showForm, setShowForm] = useState(false);
  const [profilePicture, setProfilePicture] = useState("/img/user.png");
  const [username, setUserName] = useState("");
  const [buttonType, setButtonType] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = useCallback(() => {
    dispatch(
      addToCart({
        id: card.id,
        title: card.attributes.title,
        desc_1: card.attributes.desc_1,
        price: card.attributes.price,
        icon: card.attributes.icon,
        quantity: 1,
        username: username,
      })
    );
  }, [
    card.id,
    card.attributes.title,
    card.attributes.desc_1,
    card.attributes.price,
    card.attributes.icon,
    username,
    dispatch,
  ]);

  const cardStyle = useMemo(() => {
    return {
      background: card.attributes.color,
    };
  }, [card.attributes.color]);

  return (
    <div className="cardContainer">
      <div className="featuredCard">
        <ul>
          <li className="title" style={cardStyle}>
            <h3>
              {card?.attributes.title}
              <br /> PACKAGES
            </h3>

            <i className={`${card.attributes.icon} logo`} style={cardStyle}></i>
          </li>
          <li className="first">
            <BsPersonAdd className="first" />
            <p>{card.attributes.desc_1}</p>
          </li>
          <li>
            <BsCheck2 className="icon" />
            <p>{card.attributes.desc_2}</p>
          </li>
          <li>
            <BsCheck2 className="icon" />
            <p>{card.attributes.desc_3}</p>
          </li>
          <li>
            <BsCheck2 className="icon" />
            <p>{card.attributes.desc_4}</p>
          </li>
          <li>
            <BsCheck2 className="icon" />
            <p>{card.attributes.desc_5}</p>
          </li>
        </ul>
        <div className="price">
          <p>{card.attributes.price}</p>
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
                <button type="button" onClick={handleAddToCart}>
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

export default Card;
