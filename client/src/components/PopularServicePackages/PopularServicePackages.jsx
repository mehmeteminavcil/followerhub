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
          <div className="featuredCard">
            <ul>
              <li className="title">
                INSTAGRAM
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
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="featuredCard">
            <ul>
              <li className="title">
                INSTAGRAM
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
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="featuredCard">
            <ul>
              <li className="title">
                INSTAGRAM
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
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="featuredCard">
            <ul>
              <li className="title">
                INSTAGRAM
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
              <button>Add to Cart</button>
            </div>
          </div>
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
