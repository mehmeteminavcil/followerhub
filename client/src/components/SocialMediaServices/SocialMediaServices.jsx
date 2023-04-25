import "./SocialMediaServices.scss";
import { Link } from "react-router-dom";
import { BsInstagram, BsSpotify, BsTiktok, BsTwitter } from "react-icons/bs";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
const SocialMediaServices = () => {
  const products = useSelector((state) => state.cart.products);

  const { data, loading, error } = useFetch("/categories");

  return (
    <div className="SocialMediaServices">
      <div className="wrapper">
        <div className="top">
          <h1>SOSYAL MEDYA HİZMETLERİMİZ</h1>
          <p>Tüm sosyal medya hizmetlerimizi görüntüleyin.</p>
        </div>
        <div className="bottom">
          <div className="bottomWrapper">
            {data?.map((category) => (
              <Link
                key={category.id}
                to={category.attributes.title}
                className="link"
                style={{
                  background: category.attributes.color,
                }}
              >
                <i className={category.attributes.icon + " icon"}></i>
                <h5>{category.attributes.title}</h5>
                {/* <p>Services</p> */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaServices;
