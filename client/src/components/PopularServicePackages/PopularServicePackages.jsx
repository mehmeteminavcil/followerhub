import "./PopularServicePackages.scss";
import {
  BsFillBasket2Fill,
  BsInstagram,
  BsSpotify,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const PopularServicePackages = () => {
  return (
    <div className="PopularServicePackages">
      <div className="wrapper">
        <div className="top">
          <div className="left">
            <BsFillBasket2Fill className="icon" />
            <h1>
              <b>Featured</b> Packages
            </h1>
          </div>
          <div className="right">
            <span>SOSYAL MEDYA FİLTRELEYİNn:</span>
            <div className="item active">
              <BsInstagram className="icon" />
            </div>
            <div className="item">
              <BsTiktok className="icon" />
            </div>
            <div className="item">
              <BsTwitter className="icon" />
            </div>
            <div className="item">
              <BsYoutube className="icon" />
            </div>
            <div className="item">
              <BsSpotify className="icon" />
            </div>
          </div>
        </div>
        <div className="center">
          <div className="featuredCard"></div>
        </div>
        <div className="bottom">bottom</div>
      </div>
    </div>
  );
};

export default PopularServicePackages;
