import logo from './logo.svg';
import './App.css';
import Cup from './components/cup/Cup'
import Statistics from './components/statistics/Statistics'

function App(props) {
  return (
    <div className='game'>
 <Cup
 markupCup = {props.state._cup}
 />
 <Statistics 
 dispatch = {props.dispatch}
 state = {props.state}
 />
 </div>
  );
}

export default App;
