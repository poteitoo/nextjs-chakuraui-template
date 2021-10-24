import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { data } from "../../public/data_sample/products";
import { ProductItemList } from "../components/organisms/ProductItemList";

export default {
  title: "Product/ItemList",
  component: ProductItemList,
} as ComponentMeta<typeof ProductItemList>;

const Template: ComponentStory<typeof ProductItemList> = (args) => (
  <ProductItemList {...args} />
);

export const ProductList = Template.bind({});
ProductList.args = {
  products: data.products,
};
