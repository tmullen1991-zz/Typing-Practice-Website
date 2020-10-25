import './App.css';

import Navbar from './components/Navbar'
import InputArea from './components/InputArea';
//import WordBox from './components/WordBox'
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <InputArea />
    </div>
  );
}

export default App;
