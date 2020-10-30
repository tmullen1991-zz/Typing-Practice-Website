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
  const [strokes, setStrokes] = useState(0);
  const [misstrokes, setMisstrokes] = useState(0);
  const [timeState, setTimeState] = useState(true);
  const [time, setTime] = useState(60);
  const [timesUp, setTimesUp] = useState(true);
  // API call made to sever to grab random words from DB and store response in words array
  useEffect(() => {
    async function loadWords() {
      const response = await API.getWords();
      const data = await response.data;
      // suffle words from alphabetical
      data.sort(() => Math.random() - 0.5);
      data.map((x, i) => (x.updateId = i));
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
  const display = words.slice(num, num + 7).map((x, i) => {
    return (
      <span className={x.class} status={x.status} id={i} key={i}>
        {x.name}
      </span>
    );
  });
  // function used in test input once word is completed to reset user input area and assign next word as current
  var update = (e) => {
    var status = num + 1;
    setNum(status);
    e.target.value = "";
  };
  // function called every correct keystroke to log correct keystrokes in state variable strokes and highlight current word green
  var right = (c) => {
    words[c.updateId].status = "active";
    var status = strokes + 1;
    return setStrokes(status);
  };
  // function called every incorrect keystroke to log incorrect keystrokes in misstroke state variable and highlight word red
  var wrong = (e, c) => {
    words[c.updateId].status = "wrong";
    var status = misstrokes + 1;
    return e.nativeEvent.inputType === "insertText"
      ? setMisstrokes(status)
      : false;
  };

  // event triggered by input are value change that tests keystrokes against the current word
  const testInput = (event) => {
    //start timer function on first user input
    timer();
    // assign first word listed in word box as current
    var current = words.find((obj) => {
      return obj.updateId === num;
    });
    // take userinput and test against current word
    setValue(event.target.value);
    var userInput = event.target.value;
    var test = current.name.slice(0, userInput.length);
    test === userInput ? right(current) : wrong(event, current);
    // if word is completed corretly after space is hit call next word to be current
    return current.name + " " === userInput ? update(event) : false;
  };
  // function called every second in setinterval function below to stop clock at zero seconds and change wordbox/input area to display results
  const checkTime = (newTime, interval) => {
    return newTime === 0 ? (setTimesUp(false), clearInterval(interval)) : false;
  };

  // timer function called on first input keystroke
  const timer = () => {
    var newTime = time;
    var interval = setInterval(() => {
      checkTime(newTime, interval);
      newTime = newTime - 1;
      setTime(newTime);
    }, 1000);
    return timeState ? (setTimeState(false), interval) : false;
  };
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="container py-3">
      {timesUp ? (
        <div>
          <div className="row py-3 justify-content-center">
            <Card style={{ width: "30rem" }}>
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
                <InputGroup onChange={testInput} style={{ width: "30rem" }}>
                  <FormControl
                    defaultValue={value}
                    placeholder="Type Words Here :)"
                    aria-label="Type Words Here :)"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="timer">{time}</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row py-3 justify-content-center">
          <Card style={{ width: "42rem" }}>
          <div className="justify-content-center py-3">
              <h3>{strokes / 5} WPM</h3>
              <h6>Keystrokes: {strokes + misstrokes}</h6>
              <h6>
                accuracy: {Math.floor((strokes / (strokes + misstrokes)) * 100)}{" "}
                %
              </h6>
              
              <button style={{ width: "5rem" }}onClick={reload}>⟳</button>
              </div>
          </Card>
        </div>
      )}
    </div>
  );
}
