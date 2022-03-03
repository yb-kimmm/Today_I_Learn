import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('react');

  useEffect(() => {
    let completed = false;

    async function get() {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      if (!completed) setData(result.data);
    }

    get();
    return () => {
      completed = true;
    };
  }, [query]);

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {data.map((item) => {
          <li key={item.objectId}>
            <a href={item.url}>{item.title}</a>
          </li>;
        })}
      </ul>
    </>
  );
};

export default App;
