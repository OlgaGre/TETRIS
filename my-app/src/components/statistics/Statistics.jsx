import BtnStartPause from './btnStartPause/BtnStartPause';
import Lines from './lines/Lines';
import NextFigure from './nextFigure/NextFigure';
import styles from './Statistics.module.css'
import Timer from './timer/Timer';

const Statistics = (props) => {

  return (
    <div className={styles.statistics} >
<NextFigure 
nextFigure = {props.state._nextFigure}
/>
<Lines 
lines = {props.state._lines}

/>
<Timer
timer = {props.state._timer}
/>
<BtnStartPause />

    </div>
    )
};
export default Statistics