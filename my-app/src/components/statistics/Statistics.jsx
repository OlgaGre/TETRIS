import Lines from './lines/Lines';
import NextFigure from './nextFigure/NextFigure';
import styles from './Statistics.module.css'

const Statistics = (props) => {

  return (
    <div className={styles.statistics} >
<NextFigure 
nextFigure = {props.state._nextFigure}
/>
<Lines 
lines = {props.state._lines}

/>

    </div>
    )
};
export default Statistics