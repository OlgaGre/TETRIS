import styles from "./BtnStartPause.module.css";
import React, { useState } from 'react';
const BtnStartPause = (props) => {
  const [checked, setChecked] = useState(true);
	
	return <div>
<button className={styles.btn} onClick={() => setChecked(!checked)}>{checked ? 'start' : 'pause'}</button>

	</div>;
};
export default BtnStartPause;
