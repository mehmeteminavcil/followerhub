import "./SubCategory.scss";
import { Link } from "react-router-dom";
// import { AiFillEye, AiOutlineRight } from "react-icons/ai";
const SubCategory = ({ item }) => {
  // let text = item.attributes.title;
  // let url = encodeURI(text.toLowerCase().replace(/\s/g, "-"));

  // style={{ background: item.attributes.color }}
  return (
    <Link to={item.attributes.title} className="subCategory">
      <i
        className={item.attributes.icon + " logo"}
        style={{ background: item.attributes.color }}
      ></i>
      <h2>{item.attributes.title}</h2>
      <i
        className="fa-solid fa-angle-right arrow"
        style={{ background: item.attributes.color }}
      ></i>
    </Link>
  );
};

export default SubCategory;
