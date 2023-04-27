import "./SubCategory.scss";
import { Link } from "react-router-dom";

const SubCategory = ({ item }) => {
  const style = { background: item.attributes.color };
  return (
    <Link to={item.attributes.title} className="subCategory">
      <i className={item.attributes.icon + " logo"} style={style}></i>
      <h2>{item.attributes.title}</h2>
      <i className="fa-solid fa-angle-right arrow" style={style}></i>
    </Link>
  );
};

export default SubCategory;
