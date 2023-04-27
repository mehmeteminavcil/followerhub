import { useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import DiscountCard from "../DiscountCard/DiscountCard";
import "./PopularServicePackages.scss";
import {
  BsFillBasket2Fill,
  BsInstagram,
  BsSpotify,
  BsTiktok,
  BsTwitter,
  BsYoutube,
  BsPersonAdd,
  BsCheck2,
} from "react-icons/bs";
import { addToCart, resetCart } from "../../redux/cartReducer";

const PopularServicePackages = () => {
  const { data, loading, error } = useFetch(
    `/products?filters[type][$eq]=trending`
  );
  const dispathc = useDispatch();
  return (
    <div className="PopularServicePackages">
      <div className="wrapper">
        <div className="top">
          <div className="left" onClick={() => dispathc(resetCart())}>
            <BsFillBasket2Fill className="icon" />
            <h1>
              <b>Featured</b> Packages
            </h1>
          </div>
          {/* <div className="right">
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
          </div> */}
        </div>
        <div className="center">
          {data?.map((discountCard) => (
            <DiscountCard key={discountCard.id} discountCard={discountCard} />
          ))}
        </div>
        <div className="bottom">
          <div className="bottomWrapper">
            <div className="card">
              <span>1</span>
              <h5>Paketinizi Seçin</h5>
              <p>
                Follower kaufende yer alan paketler arasından size en uygun
                olanı seçin.
              </p>
            </div>
            <div className="card">
              <span>2</span>
              <h5>Paketinizi Seçin</h5>
              <p>
                Follower kaufende yer alan paketler arasından size en uygun
                olanı seçin.
              </p>
            </div>
            <div className="card">
              <span>3</span>
              <h5>Paketinizi Seçin</h5>
              <p>
                Follower kaufende yer alan paketler arasından size en uygun
                olanı seçin.
              </p>
            </div>
            <div className="card">
              <span>4</span>
              <h5>Paketinizi Seçin</h5>
              <p>
                Follower kaufende yer alan paketler arasından size en uygun
                olanı seçin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularServicePackages;
