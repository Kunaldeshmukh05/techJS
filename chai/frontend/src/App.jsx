import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("/api/joke")
      .then((response) => {
        const data = response.data;
        const jokeArray = Array.isArray(data) ? data : [data];
        setJokes(jokeArray);

        // Pick the next joke index on reload
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % jokeArray.length;
          return nextIndex;
        });
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  }, []);

  const currentJoke = jokes.length > 0 ? jokes[currentIndex] : null;

  return (
    <div>
      <h1>Kunal Deshmukh</h1>

      <p>Total Jokes: {jokes.length}</p>

      {currentJoke ? (
        <div key={currentJoke.id}>
          <h2>{currentJoke.author}</h2>
          <p>{currentJoke.content}</p>
        </div>
      ) : (
        <p>Loading joke...</p>
      )}
    </div>
  );
};

export default App;
