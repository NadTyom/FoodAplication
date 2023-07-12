import "./App.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Card from "./Components/Card";
import { DUMMY_PRODUCTS } from "./DummyProducts";
import { useMemo, useState } from "react";

function App() {
  const [filterText, setFilterText] = useState("All");
  const [card, setCard] = useState([]);
  const moveToCard = (product) => {
    if (!card.includes(product)) {
      card.push(product);
      product.counter = 1;
    } else {
      product.counter++;
    }
    setCard([...card]);
  };
  const filterProducts = (category) => {
    if (category === "All") {
      return DUMMY_PRODUCTS;
    }
    return DUMMY_PRODUCTS.filter((elm) => elm.category === category);
  };
  const products = useMemo(() => filterProducts(filterText), [filterText]);
  return (
    <div className="App">
      <Header
        onFilter={(text) => {
          setFilterText(text);
        }}
      />
      <main>
        <ProductList moveToCard={moveToCard} products={products} />
        <Card  items={card} />
      </main>
    </div>
  );
}

export default App;
