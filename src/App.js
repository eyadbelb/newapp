import ProductList from "./compontes/ProductList";
import products from "./products";
import "./App.css";
import { FullBody, HeadTitle } from "./styles";

function App() {
  return (
    <FullBody>
      <HeadTitle> Drums Shop</HeadTitle>
      <ProductList />
    </FullBody>
  );
}

export default App;
