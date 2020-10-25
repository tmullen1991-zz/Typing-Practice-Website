import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import API from "../../utils/api";

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWords() {
      const response = await API.getWords();
      const data = await response.data;
      // suffle from alphabetical
      data.sort(() => Math.random() - 0.5)
      setWords(data);
    }
    loadWords();
    setLoading(false);
  }, []);

  return (
    <div className="row justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Text>
          {loading ? (
        <span>...loading words :)</span>
      ) : (
        <div>
          {words.map((word,i) => (
            <span id={i} key={word.id}>{word.name} </span>
          ))}
          </div>
          )}
          </Card.Text>
        </Card>
      
        </div>
      

  );
}
