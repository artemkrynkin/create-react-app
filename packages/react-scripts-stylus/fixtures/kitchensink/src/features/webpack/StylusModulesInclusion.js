/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import styles from './assets/stylus-styles.module.styl';
import indexStyles from './assets/index.module.styl';

export default () => (
  <div>
    <p className={styles.stylusModulesInclusion}>STYLUS Modules are working!</p>
    <p className={indexStyles.stylusModulesIndexInclusion}>
      STYLUS Modules with index are working!
    </p>
  </div>
);
