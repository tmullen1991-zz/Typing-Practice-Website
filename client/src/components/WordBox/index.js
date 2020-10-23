import React from "react";
import API from "../../utils/api";

class WordBox extends React.Component {

    state={
        
    }
      componentDidMount() {
        this.loadWords();
      }

  loadWords = () => {
    API.getWords().then((res) => {
        this.setState({ words: res.data });
      console.log(res.data);
    });
  };
  render() {
    return <div></div>;
  }
}

export default WordBox;
