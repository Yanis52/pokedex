import { useState } from "react";
import { Outlet } from "react-router-dom";
import "../src/style/index.scss";
import Header from "./Component/Header/Header";
const importLocalStorage = () => {
  const results = [];

  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("pokemon_id")) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      results.push(value);
    }
  }
  return results;
};

function App() {
  const [localData, setLocalData] = useState(importLocalStorage);

  const updateData = () => {
    setLocalData(importLocalStorage);
  };

  return (
    <>
      <Header />
      <Outlet context={{ localData, updateData }} />
    </>
  );
}

export default App;
