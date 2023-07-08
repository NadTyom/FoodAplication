import "./App.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList"
// import { DUMMY_PRODUCTS } from "./DummyProducts";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
       <ProductList/>
      </main>
    </div>
  );
}

export default App;
