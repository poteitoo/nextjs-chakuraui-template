import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export type ProductItem = {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  currency: string;
  href?: string;
};

export type ProductItemProps = { product: ProductItem };

export const ProductItem = (props: ProductItemProps) => {
  const { imageUrl, name, price, currency, href = "#" } = props.product;
  return (
    <Box as="a" href={href} width="full">
      <Image
        fit="cover"
        width="full"
        src={imageUrl}
        alt={name}
        height={{ base: "7.5rem", lg: "12.5rem" }}
        rounded="lg"
      />
      <Box mt="2">
        <Text fontSize="sm">{name}</Text>
        <Text fontSize="sm" fontWeight="semibold">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency,
          }).format(price)}
        </Text>
      </Box>
    </Box>
  );
};
