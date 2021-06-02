const ProductItem = (props) => {
  return (
    <div className="byebye">
      <img className="imagess" src={props.product.image} />

      <br />
      <p>{props.product.spec}</p>
      <br />
      <p>{props.product.price}</p>
    </div>
  );
};

export default ProductItem;
