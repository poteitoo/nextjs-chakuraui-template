import { IndexTemplate } from "../components/templates/Index";
import { data } from "../../public/data_sample/products";

const Index = () => {
  const { products } = data;
  return <IndexTemplate products={products} />;
};

export default Index;
