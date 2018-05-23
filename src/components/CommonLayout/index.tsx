import * as React from 'react';
import { injectGlobal } from 'styled-components';

import { Props } from './types';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    paddin: 0;
  }
`;

export const CommonLayout = ({children}: Props) => {
  return (
    <>
      {children}
    </>
  );
}
