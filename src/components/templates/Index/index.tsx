import { Box } from "@chakra-ui/react";
import React from "react";
import {
  ProductItemList,
  ProductItemListProps,
} from "../../organisms/ProductItemList";

export type IndexTemplateProps = ProductItemListProps & {};

export const IndexTemplate: React.FC<IndexTemplateProps> = ({ products }) => (
  <>
    <Box display={{ base: "none", lg: "block" }}>
      <ProductItemList products={products} />
    </Box>
    <Box display={{ base: "block", lg: "none" }}>
      <ProductItemList products={products} />
    </Box>
  </>
);
