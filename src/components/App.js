import React, { useState, useEffect, useRef } from "react";
import Search from "./Search";
import Result from "./Result";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pagination, setPagination] = useState(0);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const prevSearchIdRef = useRef();
  useEffect(() => {
    prevSearchIdRef.current = searchTerm;
  });
  const prevSearch = prevSearchIdRef.current;

  useEffect(() => {
    //Calling API here
    const getRecipes = async () => {
      setLoading(true);
      const YOUR_APP_ID = "1edc82db";
      const YOUR_APP_KEY = "a2a4fe801290a822cef0919ebb65c68a";
      //fetch

      var currentPagination = pagination;

      if (prevSearch !== searchTerm) {
        currentPagination = 0;
        setPagination(0);
      }

      const result = await fetch(
        `https://api.edamam.com/search?q=${searchTerm}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=${currentPagination}&to=${currentPagination +
        10}`
      );
      const data = await result.json();
      console.log(data);
      if (data.hits.length > 0) {
        setLoading(false);
        setResult(data.hits);
      }

      //get data
    };

    if (searchTerm && (searchTerm !== prevSearch || pagination > 0)) {
      getRecipes();
    }
  }, [searchTerm, pagination]);

  return (
    <div>
      <Search setSearchTerm={setSearchTerm} />
      <Result
        recipes={result}
        pagination={pagination}
        setPagination={setPagination}
        loading={loading}
      />
    </div>
  );
}

export default App;