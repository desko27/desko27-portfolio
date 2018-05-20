import React from 'react';
import Link from 'next/link';

import './index.scss';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>Welcome to next.js!</div>
        <Link href="/about">
          <a>Go to about page</a>
        </Link>
      </div>
    );
  }
}

export default Home;
