import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import API from "../../utils/api";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", current: 0, list: [] };
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    const words = await API.getWords();
    const wordList = words.data.sort(() => Math.random() - 0.5);
    this.state.list = wordList;
    console.log(this.state);
  }
  changeState(){
    console.log(this.state.list)
    
  }
  /*display = this.state.list.slice(this.state.current, this.state.current + 20).map((x, i)=>{
    return (
      <span className={(i === this.state.current) ? "current-word" : "inactive"} id={i} key={i}>
        {x.name}
      </span>
    );
  })*/
  handleChange(event) {
    this.setState({ value: event.nativeEvent.data });
    event.preventDefault();
  }
  render() {
    return (
      <div className="container py-3">
        <div className="row py-3 justify-content-center">
          <Card style={{ width: "42rem" }}>
            <Card.Text>
              <span>{this.state.list}</span>
            </Card.Text>
          </Card>
        </div>

        <div className="row px-auto justify-content-center">
          <InputGroup onChange={this.handleChange} style={{ width: "24rem" }}>
            <FormControl
              defaultValue={this.state.value}
              placeholder="Type Words Here :)"
              aria-label="Type Words Here :)"
            />
            <InputGroup.Append>
              <InputGroup.Text id="timer">00</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    );
  }
}

export default Input;
