// import { useEffect, useState } from "react";
// import { makeRequest } from "../makeRequest";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const res = await makeRequest.get(url);

//         setData(res.data.data);
//         console.log(res.data.data);
//       } catch (err) {
//         console.log(err);
//         setError(true);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetch;

import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        if (isMounted) {
          setData(res.data.data);
        }
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
      setLoading(false);
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url, retryCount]);

  const retry = () => {
    setRetryCount(retryCount + 1);
    setError(null);
  };

  return { data, loading, error, retry };
};

export default useFetch;
