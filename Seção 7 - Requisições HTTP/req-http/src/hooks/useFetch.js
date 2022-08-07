import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [itemID, setItemID] = useState(null);

  const httpConfig = (data, method) => {
    if (method === 'POST') {
      setConfig({
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    } else if (method === 'DELETE') {
      setConfig({
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setMethod(method);
      setItemID(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const jsonData = await res.json();

        setData(jsonData);
      } catch (e) {
        console.log(e.message);

        setError('Houve algum erro ao carregar os dados!');
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // useEffect(() => {
  //   const httpReq = async () => {
  //     if (method === 'POST') {
  //       let fetchOptions = [url, config];

  //       const res = await fetch(...fetchOptions);
  //       const json = await res.json();

  //       setCallFetch(json);
  //     }
  //   };
  //   httpReq();
  // }, [config, method, url]);

  useEffect(() => {
    const httpReq = async () => {
      let json;

      if (method === 'POST') {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);
        json = await res.json();
      } else if (method === 'DELETE') {
        const deleteUrl = `${url}/${itemID}`;

        const res = await fetch(deleteUrl, config);

        json = await res.json();
      }
      setCallFetch(json);
    };
    httpReq();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};
