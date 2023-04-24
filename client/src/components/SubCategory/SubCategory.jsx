import "./SubCategory.scss";
import { Link } from "react-router-dom";
import { AiFillEye, AiOutlineRight } from "react-icons/ai";
const SubCategory = ({ item }) => {
  return (
    <Link to={item.attributes.title} className="subCategory">
      <AiFillEye />
      <h2>{item.attributes.title}</h2>
      <AiOutlineRight />
    </Link>
  );
};

export default SubCategory;
