import "./SingleCarts.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card/Card";

import { addToCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";

const SingleCarts = () => {
  const param = useParams();

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `/products?filters[sub_categories][title][$eq]=${param.id}`
  );

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
                desc_1: card.attributes.desc_1,
                price: card.attributes.price,
                icon: card.attributes.icon,
                quantity: 1,
              })
            )
          }
        />
      ))}
    </div>
  );
};

export default SingleCarts;
