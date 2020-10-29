import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import API from "../../utils/api";
import Input from "../Input";
import "./style.css"

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [num, setNum] = useState(0);
  const [value, setValue] = useState("")

  useEffect(() => {
    async function loadWords() {
      const response = await API.getWords();
      const data = await response.data;
      // suffle from alphabetical
      data.sort(() => Math.random() - 0.5);
      setWords(data);
      setNum(0);
    }
    loadWords();
    setLoading(false);
  }, []);

  // limit the number of words displayed
  const display = words.slice(num, num + 20).map((x, i) => {
    return (
      <span className={(i === num) ? "current-word" : "inactive"} id={i} key={i}>
        {x.name}
      </span>
    );
  });

  
  return (
    <div className="container py-3">
      <div className="row py-3 justify-content-center">
        <Card style={{ width: "42rem" }}>
          <Card.Text>
            {loading ? (
              <span>...loading words :)</span>
            ) : (
              <span>{display}</span>
            )}
          </Card.Text>
        </Card>
      </div>
      <div className="row justify-content-center">
        <Input />
      </div>
    </div>
  );
}
