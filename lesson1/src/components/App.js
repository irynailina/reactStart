import React from "react";
// import { Card } from "./card/Card";
import products from "../products";
import { DefaultPage } from "./defaultPage/DefaultPage";
import { CustomCard } from "./ui/CustomCard";

// console.log(products);


export const App = ({isAuth}) => (
  <>
    {products.length !== 0 ? (
      products.map(product => {
        // console.log(product);
        return (
          // <Card sale={product.sale}  key={product.id} sku={product.sku} title={product.title} isAuth={isAuth}/>
          <CustomCard key={product.id} {...product}/>
          );
      })
    ) : (
      <DefaultPage />
    )}
  </>
);
