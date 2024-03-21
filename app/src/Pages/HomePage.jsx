import { useEffect, useState } from "react";
import { getAllPokemons } from "../api_service/fetch_api";
const HomePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllPokemons();
      setUserData(data);
    };
    getData;
  });

  console.log("HomePage ===>", userData);

  return <div></div>;
};

export default HomePage;
