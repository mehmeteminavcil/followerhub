import { useState } from "react";
import "./Card.scss";
import { BsPersonAdd, BsCheck2 } from "react-icons/bs";
import { GoEyeClosed } from "react-icons/go";
const Card = ({ card }) => {
  const [showForm, setShowForm] = useState(false);
  const [profilePicture, setProfilePicture] = useState("/img/user.png");
  const [username, setUserName] = useState("");

  console.log(username);
  return (
    <div className="center">
      <div className="featuredCard">
        <ul>
          <li className="title">
            {card.attributes.title}
            <br /> PACKAGES
          </li>
          <li className="first">
            <BsPersonAdd className="first" />
            <p>1.000 Dusmeyen Follower</p>
          </li>
          <li>
            <BsCheck2 className="icon" />
            <p>%100 Dusme Garantili</p>
          </li>
          <li>
            <BsCheck2 className="icon" />
            <p>Anlik Baslar</p>
          </li>
          <li>
            <BsCheck2 className="icon" />
            <p>Sifreniz Istenmez</p>
          </li>
          <li>
            <BsCheck2 className="icon" />
            <p>3D Secure Payment</p>
          </li>
        </ul>
        <div className="price">
          <p>19.90$</p>
          <button onClick={() => setShowForm(!showForm)}>Add to Cart</button>
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
              </div>

              <button type="button">Add to Cart</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
