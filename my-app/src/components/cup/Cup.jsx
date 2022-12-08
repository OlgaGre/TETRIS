import styles from "./Cup.module.css";

const Cup = (props) => {
  let buildMarkupCup = props.markupCup.map((el) => (
    <div className={styles.line}>
      {el.map((el) => (
        <div className={`${el == 1 ? styles.fullSquare: styles.square}`}></div>
      ))}
    </div>
  ));
  console.log(props.markupCup);
  return (
    <div className={styles.cup}>{buildMarkupCup}</div>)
};
export default Cup;
