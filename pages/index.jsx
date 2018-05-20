import React from 'react';
import Link from 'next/link';

import './index.scss';

const Home = () => (
  <div>
    <div>Welcome to next.js!</div>
    <Link href="/about">
      Go to about page
    </Link>
  </div>
);

export default Home;
