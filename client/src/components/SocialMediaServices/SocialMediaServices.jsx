import "./SocialMediaServices.scss";
import { Link } from "react-router-dom";
import { BsInstagram, BsSpotify, BsTiktok, BsTwitter } from "react-icons/bs";
const SocialMediaServices = () => {
  return (
    <div className="SocialMediaServices">
      <div className="wrapper">
        <div className="top">
          <h1>SOSYAL MEDYA HİZMETLERİMİZ</h1>
          <p>Tüm sosyal medya hizmetlerimizi görüntüleyin.</p>
        </div>
        <div className="bottom">
          <div className="bottomWrapper">
            <Link to="/instagram" className="link">
              <BsInstagram className="icon " />
              <h5>Instagram</h5>
              <p>Services</p>
            </Link>
            <Link to="/spotify" className="link spotify">
              <BsSpotify className="icon " />
              <h5>Spotify</h5>
              <p>Services</p>
            </Link>
            <Link to="/tiktok" className="link tiktok">
              <BsTiktok className="icon " />
              <h5>Tiktok</h5>
              <p>Services</p>
            </Link>
            <Link to="/twitter" className="link twitter">
              <BsTwitter className="icon " />
              <h5>Twitter</h5>
              <p>Services</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaServices;
