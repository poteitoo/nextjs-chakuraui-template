import { ProductItem } from "../molecules/ProductItem";
import {
  SimpleGrid,
  SimpleGridProps,
  useColorModeValue as mode,
} from "@chakra-ui/react";

export type ProductItemListProps = SimpleGridProps & {
  products: ProductItem[];
};

export const ProductItemList: React.FC<ProductItemListProps> = ({
  products,
  ...gridProps
}) => (
  <SimpleGrid
    width="full"
    alignContent="flex-start"
    spacing={{ base: 5, lg: 6 }}
    bg={mode("white", "gray.800")}
    columns={{ base: 2, md: 3, lg: 4 }}
    px={{ base: "4", md: "8", lg: "12" }}
    {...gridProps}
  >
    {products.map((product) => (
      <ProductItem key={product.id} product={{ ...product }} />
    ))}
  </SimpleGrid>
);
