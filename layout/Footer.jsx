import React from 'react';

export default () => (
  <div className="container">
    <nav className="footer-custom layout">
      <a className="item" href="/#">
        <span className="icon">
          <i className="fas fa-file-pdf" />
        </span>
        <span className="item-text">Download my CV</span>
      </a>
      <a className="item" href="http://github.com/desko27" target="_blank" rel="noopener noreferrer">
        <span className="icon">
          <i className="fab fa-github" />
        </span>
        <span className="item-text">GitHub</span>
      </a>
      <a className="item" href="http://linkedin.com/in/desko27" target="_blank" rel="noopener noreferrer">
        <span className="icon">
          <i className="fab fa-linkedin" />
        </span>
        <span className="item-text">LinkedIn</span>
      </a>
      <a className="item" href="https://twitter.com/desko27" target="_blank" rel="noopener noreferrer">
        <span className="icon">
          <i className="fab fa-twitter" />
        </span>
        <span className="item-text">Twitter</span>
      </a>
    </nav>
  </div>
);
