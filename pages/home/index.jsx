import React from 'react';
import positionsList from './positions.list';
import { shuffle } from './helpers';

const firstPosition = 'Full-Stack Developer';
const emojiSplitter = '|';

const positionsEmoji = [];
const positionsText = [];

class Home extends React.Component {
  state = {
    currentEmoji: '',
  }

  componentDidMount() {
    // this will not be run by server

    // logo mix via canvas
    require('./logosMix');

    // init theater for positions
    const theaterJS = require('theaterjs');
    const theater = theaterJS();

    // common function to add each position
    const addPosition = (thePosition, extraTime = false) => {
      theater
        .addScene('position:')
        .addScene(700)
        .addScene(`position:${thePosition}`)
        .addScene(extraTime ? 3500 : 2000);
    };

    // mix positions list & split emojis/text
    shuffle(positionsList);
    positionsList.forEach((p) => {
      const pair = p.split(emojiSplitter);
      if (pair.length >= 2) {
        const [emoji, text] = pair;
        positionsEmoji.push(emoji.trim());
        positionsText.push(text); // includes the initial space
      } else {
        const [text] = pair;
        positionsEmoji.push('');
        positionsText.push(text);
      }
    });

    // setup theater
    theater
      .on('type:start', () => {
        const i = positionsText.indexOf(theater.getCurrentSpeech());
        this.setState({ currentEmoji: positionsEmoji[i] || '' });
      })
      .on('erase:end', () => {
        this.setState({ currentEmoji: '' });
      });
    theater.addActor('position', { accuracy: 1, speed: 1 });
    addPosition(firstPosition, true); // first one
    positionsText.forEach(p => addPosition(p));
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
              <h2 className="position">
                <span className="emoji">{this.state.currentEmoji}</span>
                <span id="position">{firstPosition}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
