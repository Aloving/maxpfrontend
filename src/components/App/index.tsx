import * as React from 'react';

import { CommonLayout } from '../CommonLayout';
import { Footer } from '../Footer';
import { Header } from '../Header';

export class App extends React.Component {
  public render() {
    return (
      <CommonLayout>
        <Header />
        <Footer />
      </CommonLayout>
    );
  }
}
