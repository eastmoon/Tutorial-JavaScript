'use strict';

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './textField.css';

class TextField extends React.Component {
  // Constructor
  constructor() {
    super();
  }

  // Static method

  // Method
  render() {
    return (
      <div>
        {/* Single-class, using styleName property. */}
        <div styleName='text1'>
          This is text field test.................................
        </div>
        {/* Single-class, using className property. */}
        <div className={styles.text1}>
          This is text field test.................................
        </div>

        {/* Multi-class, merge in css file, using composes command. */}
        <div styleName='text2'>
          This is text field test.................................
        </div>
      </div>
    );
  }
  // Accessor
}

export default CSSModules(TextField, styles);
