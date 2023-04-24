import "./Instagram.scss";
import SubCategory from "../../components/SubCategory/SubCategory";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Instagram = () => {
  const param = useParams().id;

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][title][$eq]=${param}`
  );

  console.log();
  return (
    <div className="instagram">
      <div className="subContainer">
        {data?.map((item) => (
          <SubCategory key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Instagram;
