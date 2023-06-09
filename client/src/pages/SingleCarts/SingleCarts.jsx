import "./SingleCarts.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card/Card";

const SingleCarts = () => {
  const param = useParams();

  const { data } = useFetch(
    `/products?filters[sub_categories][title][$eq]=${param.id}`
  );

  return (
    <div className="singleCarts">
      {data?.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default SingleCarts;
