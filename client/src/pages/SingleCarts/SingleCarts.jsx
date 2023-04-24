import "./SingleCarts.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Card from "../../Card/Card";

const SingleCarts = () => {
  const param = useParams();
  console.log(param);

  const { data, loading, error } = useFetch(
    `/products?filters[sub_categories][title][$eq]=${param.id}`
  );
  console.log(data);

  return (
    <div className="singleCarts">
      {data?.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default SingleCarts;
