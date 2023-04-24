import { useState } from "react";
import "./Card.scss";
import { BsPersonAdd, BsCheck2 } from "react-icons/bs";
import { GoEyeClosed } from "react-icons/go";
import { FaCartPlus } from "react-icons/fa";

const Card = ({ card, handleAddCart }) => {
  const [showForm, setShowForm] = useState(false);
  const [profilePicture, setProfilePicture] = useState("/img/user.png");
  const [username, setUserName] = useState("");
  const [buttonType, setButtonType] = useState(false);

  console.log(username);
  return (
    <div className="cardContainer">
      <div className="featuredCard">
        <ul>
          <li className="title" style={{ background: card.attributes.color }}>
            <h3>
              {card?.attributes.title}
              <br /> PACKAGES
            </h3>

            <i
              className={card.attributes.icon + " logo"}
              style={{ background: card.attributes.color }}
            ></i>
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
            style={{ background: card.attributes.color }}
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
                <button
                  type="button"
                  style={{ background: card.attributes.color }}
                >
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
