import React from "react";
import Product from "./Product";
import Products from "./vschoolProducts";
import "./styles.css";

function App() {
  const productsList = Products.map((item) => (
    <Product
      product={item}
      key={item.id}
      name={item.name}
      description={item.description}
    />
  ));

  return <div>{productsList}</div>;
}

export default App;
