import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
        const result = response.data;
        setData(result);
      } catch (err) {
        console.log("An error occurred while fetching", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Let&apos;s hear a joke (axios version)</h1>
      {!loading && !error && (
        <>
          {data?.setup && data?.delivery ? (
            <>
              <p>Category: {data.category}</p>
              <p>{data?.setup}</p>
              <p>{data?.delivery}</p>
            </>
          ) : (
            <>
              <p>Category: {data.category}</p>
              <p>{data?.joke}</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
