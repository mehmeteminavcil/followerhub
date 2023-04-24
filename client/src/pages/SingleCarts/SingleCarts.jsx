import "./SingleCarts.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Card from "../../Card/Card";

import { addToCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";

const SingleCarts = () => {
  const param = useParams();

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `/products?filters[sub_categories][title][$eq]=${param.id}`
  );
  console.log(data);

  return (
    <div className="singleCarts">
      {data?.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleAddCart={() =>
            dispatch(
              addToCart({
                id: card.id,
                title: card.attributes.title,
                price: card.attributes.price,
              })
            )
          }
        />
      ))}
    </div>
  );
};

export default SingleCarts;
