import React from 'react';
import styles from './arrow.css';

const Arrow = ({direction, modal, clickHandler}) => {
  let classname;
  if (direction === 'right' && modal) {
    classname = styles.arrowrightmodal;
	} else if (direction === 'left' && modal) {
    classname = styles.arrowleftmodal;
	} else if (direction === 'right') {
    classname = styles.arrowright;
	} else if (direction === 'left') {
    classname = styles.arrowleft;
  }
	return(
	  <span
		  className={classname}
		  onClick={() => clickHandler()}>
		</span>
	);
};

export default Arrow;
  