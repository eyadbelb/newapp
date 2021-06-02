import { DivTwo, ImageTwo } from "../styles";

const ProductItem = (props) => {
  return (
    <DivTwo>
      <ImageTwo src={props.product.image} />

      <br />
      <p>{props.product.spec}</p>
      <br />
      <p>{props.product.price}</p>
    </DivTwo>
  );
};

export default ProductItem;
