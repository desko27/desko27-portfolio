import React from 'react';

export default () => (
  <div className="container">
    <nav className="footer-custom layout">
      <a className="item" href="/#">
        <i className="fas fa-file-pdf" />
        <span className="item-text">Download my CV</span>
      </a>
      <a className="item" href="http://github.com/desko27" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github" />
        <span className="item-text">GitHub</span>
      </a>
      <a className="item" href="http://linkedin.com/in/desko27" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin" />
        <span className="item-text">LinkedIn</span>
      </a>
      <a className="item" href="https://twitter.com/desko27" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter" />
        <span className="item-text">Twitter</span>
      </a>
    </nav>
  </div>
);
