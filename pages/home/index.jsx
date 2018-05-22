import React from 'react';
import positionsList from './positions.list';
import { shuffle } from './helpers';

const firstPosition = 'Full-Stack Developer';

class Home extends React.Component {
  componentDidMount() {
    // this will not be run by server

    // logo mix via canvas
    require('./logosMix');

    // theater positions
    const theaterJS = require('theaterjs');
    const theater = theaterJS();

    const addPosition = (thePosition, extraTime = false) => {
      theater
        .addScene('position:')
        .addScene(700)
        .addScene(`position:${thePosition}`)
        .addScene(extraTime ? 3500 : 2000);
    };

    theater.addActor('position', { accuracy: 1, speed: 0.9 });
    addPosition(firstPosition, true); // first one
    shuffle(positionsList);
    positionsList.forEach(p => addPosition(p));
    theater.addScene(theater.replay);
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
              <h2 className="position" id="position">{firstPosition}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
