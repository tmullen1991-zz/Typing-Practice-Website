import React from "react";
import Card from "react-bootstrap/Card";
import API from "../../utils/api";

class WordBox extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      words: [],
    };
  }
  componentDidMount() {
    this.loadWords();
  }

  loadWords = () => {
    API.getWords().then((res) => {
      this.setState({ words: res.data });
    });
  };
  

  render() {
    return (
      <div className="row justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Text>
            {this.state.words.map((word) => (
              <span key={word.id}>{word.name} </span>
            ))}
          </Card.Text>
        </Card>
      </div>
    );
  }
}

export default WordBox;
