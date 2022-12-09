import styles from './NextFigure.module.css'

const NextFigure = (props) => {

  // console.log(props.nextFigure)
    
 let buildNextFigute = props.nextFigure.map((el) => (
    <div className={styles.line}>
      {el.map((el) => (
        <div className={`${el == 1 ? styles.fullSquare : styles.square}`}></div>
      ))}
    </div>
  ));
  // console.log(props.nextFigure);
  return <div className={styles.cup}>{buildNextFigute}</div>;


   
    
};
export default NextFigure