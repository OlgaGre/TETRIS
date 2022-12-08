import styles from "./BtnStartPause.module.css";
import React, { useState } from 'react';
const BtnStartPause = (props) => {
  const [checked, setChecked] = useState(true);
// let StartPause = () => {setChecked(!checked)}

function StartPause (){
  setChecked(!checked)
  if (checked) {
    props.dispatch({type:'TIMER-START' })
  }

}
	return <div>
<button className={styles.btn} onClick={StartPause}>
  {checked ? 'start' : 'pause'}
  </button>

	</div>;
}
export default BtnStartPause
