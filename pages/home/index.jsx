import React from 'react';
import Link from 'next/link';

import './index.scss';

const Home = () => (
  <div className="container">
    <div className="columns">
      <div className="column">
        <Link href="/about">
          Go to about page
        </Link>
      </div>
      <div className="column">
        <span className="icon">
          <i className="fas fa-home" />
        </span>
        The second column
      </div>
    </div>
  </div>
);

export default Home;
