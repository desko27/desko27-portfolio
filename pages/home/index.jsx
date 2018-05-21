import React from 'react';

const Home = () => (
  <div className="home page container">
    <div className="columns">
      <div className="column">
        <figure className="avatar-container">
          <img
            className="avatar"
            src="/static/profile.jpg"
            alt="Desko27's avatar"
          />
        </figure>
      </div>
      <div className="column">
        <div className="headline">
          <h1 className="fullname">Ismael Ramon</h1>
          <h2 className="position">Full-Stack Developer</h2>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
