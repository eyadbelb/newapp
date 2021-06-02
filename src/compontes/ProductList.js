import products from "../products";
const ProductList = () => {
  const productList = products.map((product) => (
    <div className="byebye">
      <img className="imagess" src={product.image} />

      <br />
      <p>{product.spec}</p>
      <br />
      <p>{product.price}</p>
    </div>
  ));
  return (
    <div className="theme">
      <h1 className="headTitle"> Drums Shop</h1>
      <h3>
        {" "}
        As for the lack of the drums in our classes i decided to open a drums
        shop especially for Laila{" "}
      </h3>
      <h3> If you are a Coded student there is a discount for you</h3>

      <img
        className="iamgee"
        src="https://scontent.famm7-1.fna.fbcdn.net/v/t1.6435-9/62033236_2731231410237787_6560041788445294592_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=6e5ad9&_nc_ohc=M0EmOnOWvtoAX9i0L0-&_nc_ht=scontent.famm7-1.fna&oh=a8021a34197e51d9fc203e124b1573e8&oe=60DC8A15"
      />
      <div className="hihi">{productList}</div>
    </div>
  );
};

export default ProductList;