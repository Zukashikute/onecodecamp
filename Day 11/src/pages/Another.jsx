import { useState, useEffect } from "react";
// import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Async / Await with a named function and invoking it
    //  const fetchData = async () => {
    //    try {
    //      const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    //      const result = await response.json();
    //      setData(result);
    //    } catch (err) {
    //      console.log("An error occurred while fetching", err);
    //      setError(err);
    //    } finally {
    //      setLoading(false);
    //    }
    //  };

    //  fetchData();

    // IIFE (Immediately Invoked Function Expression)
    (async () => {
      try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.log("An error occurred while fetching", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    })();

    // Promise
    //  fetch("https://v2.jokeapi.dev/joke/Any")
    //    .then((response) => response.json())
    //    .then((data) => {
    //      setData(data);
    //      setLoading(false);
    //    })
    //    .catch((error) => {
    //      console.error("Error fetching user data:", error);
    //      setError(error);
    //    });
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Let&apos;s hear a joke (fetch version)</h1>
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
