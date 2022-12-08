import logo from './logo.svg';
import './App.css';
import Cup from './components/cup/Cup'
import Statistics from './components/statistics/Statistics'

function App(props) {
  return (
    <div>
 {/* <Cup
 markupCup = {props.state._cup}
 /> */}
 <Statistics 
 state = {props.state}
 />
 </div>
  );
}

export default App;
