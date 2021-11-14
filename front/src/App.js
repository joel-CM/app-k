import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [state, setState] = useState([]);

  const getProducts = async () => {
    axios.get("http://localhost:3001/api/products").then((res) => {
      setState(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleRemove = async (e) => {
    await axios.delete(`http://localhost:3001/api/products/${e.target.id}`);
    getProducts();
  };

  return (
    <div>
      <h1>...</h1>
      <ul>
        {state?.map((p) => (
          <li key={p.id} id={p.id} onClick={handleRemove}>
            {p.name} {"$" + p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
