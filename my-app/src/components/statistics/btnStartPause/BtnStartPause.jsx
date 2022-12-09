import styles from "./BtnStartPause.module.css";
import React, { useState } from 'react';

const BtnStartPause = (props) => {
  // const [checked, setChecked] = useState(true);
// let StartPause = () => {setChecked(!checked)}



function StartPause (){
  // debugger

  // setChecked()

 
  if (props.checkedTimer == false) {
    props.dispatch({type:'TIMER-START' })
    console.log(props.checkedTimer)
  } else {
  props.dispatch({type:"TIMER-PAUSE" }) 
  console.log(props.checkedTimer)
  }

}
	return <div>
<button className={styles.btn} onClick={StartPause}>
  {props.checkedTimer ? 'pause' : 'start'}
  </button>

	</div>;
}
export default BtnStartPause
