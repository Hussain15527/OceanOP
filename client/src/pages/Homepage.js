import { useState, useEffect } from "react";
import axios from "axios";
const backend_api = process.env.REACT_APP_BACKEND_URL;

function HomePage() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(backend_api);
        console.log(data.data);

        setPageData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return <>{pageData ? pageData : "loading....."}</>;
}

export default HomePage;
