import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import API from "../../utils/api";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./style.css";

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [num, setNum] = useState(0);
  const [value, setValue] = useState("");

  // API call made to sever to grab random words from DB and store response in words array
  useEffect(() => {
    async function loadWords() {
      const response = await API.getWords();
      const data = await response.data;
      // suffle words from alphabetical
      data.sort(() => Math.random() - 0.5);
      data.forEach((element) => {
        element.class = "word";
        element.status = "inactive";
      });
      setWords(data);
      setNum(0);
    }
    loadWords();
    setLoading(false);
  }, []);

  // display X amount of words at a given time and assign highlight to current word to be typed by user
  const display = words.slice(num, num + 20).map((x, i) => {
    if (i === num) {
      x.class = "current-word";
    }
    x.updateId = i
    return (
      <span className={x.class} status={x.status} id={i} key={i}>
        {x.name}{" "} 
      </span>
    );
  });

  const testInput = (event) => {
    var current = words.find((obj) => {
      return obj.class === "current-word";
    });
    console.log(current.updateId)
    setValue(event.target.value);
    var userInput = event.target.value;
    var test = current.name.slice(0, userInput.length);
    
    if (test === userInput) {
      words[current.updateId].status="active"
    } else{
      words[current.updateId].status="wrong"
    }
  };
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
        <div className="container py-3">
          <div className="row px-auto justify-content-center">
            <InputGroup onChange={testInput} style={{ width: "24rem" }}>
              <FormControl
                defaultValue={value}
                placeholder="Type Words Here :)"
                aria-label="Type Words Here :)"
              />
              <InputGroup.Append>
                <InputGroup.Text id="timer">00</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
