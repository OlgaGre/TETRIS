import NextFigure from './nextFigure/NextFigure';
import styles from './Statistics.module.css'

const Statistics = (props) => {

  return (
    <div className={styles.statistics} >
<NextFigure 
nextFigure = {props.state._nextFigure}
/>



    </div>
    )
};
export default Statistics