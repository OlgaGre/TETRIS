import styles from "./Cup.module.css";

const Cup = (props) => {
  let buildMarkupCup = props.markupCup.map((el) => (
    <div className={styles.line}>
      {el.map((el) => (
        <div>{el}</div>
      ))}
    </div>
  ));
  console.log(props.markupCup);
  return (
    <div>{buildMarkupCup}</div>)
};
export default Cup;
