import React from 'react';

class Home extends React.Component {
  componentDidMount() {
    // this will not be rendered by server
    require('./logosMix'); // eslint-disable-line
  }

  render() {
    return (
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
  }
}

export default Home;
