import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: (event.nativeEvent.data) });
    event.preventDefault();
  }

  render() {
    return (
      <div className="container py-3">
        <div className="row px-auto justify-content-center">
          <InputGroup /*onChange={this.handleChange}*/ style={{ width: "24rem" }}>
            <FormControl
              //defaultValue={this.state.value}
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
