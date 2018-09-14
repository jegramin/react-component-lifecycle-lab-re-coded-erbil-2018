import React from 'react';
import TweetWall from './TweetWall';

import { getTweets }from '../lib/mockAPI';

class App extends React.Component {

  constructor() {
    super();
<<<<<<< HEAD
    
=======

>>>>>>> 8ab6490d97e1277861851267bc72589e3c15c6e8
    this.state = {
      latestTweets: []
    };
  }

<<<<<<< HEAD
  componentWillMount() {
    this.fetchTweets()
  }

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
    this.cleanUpInterval();
  }
=======
  // TODO: componentWillMount()
  // TODO: componentDidMount()
  // TODO: componentWillUnmount()
>>>>>>> 8ab6490d97e1277861851267bc72589e3c15c6e8

  startInterval = () => {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval = () => clearInterval(this.interval);

  fetchTweets = () => {
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    });
  }

  render() {
    return (
      <div>
        <TweetWall newTweets={this.state.latestTweets} />
      </div>
    )
  }
}

export default App;