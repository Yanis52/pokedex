import { useEffect, useState } from "react";
import { getAllPokemons } from "../api_service/fetch_api";
const HomePage = async () => {
  const [userData, setUserData] = useState(null);
  const data = await getAllPokemons();

  useEffect(() => {
    setUserData(data);
  }, [data]);

  console.log("HomePage ===>", userData);

  return <div></div>;
};

export default HomePage;
