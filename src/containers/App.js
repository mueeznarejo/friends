import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchFiled: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots: users})});
  }

  onInputChange = (event) => {
    this.setState({searchFiled: event.target.value});
  }

  render() {
    const {robots, searchFiled} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchFiled.toLowerCase());
    });
    return !robots.length ? 
    <h1 className="heading">Loading</h1> :
    (
      <div className='tc'>
        <h1 className="heading">RoboFriends</h1>
        <SearchBox onInput={this.onInputChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
