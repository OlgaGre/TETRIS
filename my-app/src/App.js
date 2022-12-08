import logo from './logo.svg';
import './App.css';
import Cup from './components/cup/Cup'

function App(props) {
  return (
 <Cup
 markupCup = {props.state._cup}
 />
  );
}

export default App;
