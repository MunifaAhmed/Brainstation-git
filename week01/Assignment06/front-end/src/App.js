import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './component/Home';
import Shops from './component/Shops';


class App extends Component {
  state = {
    name: '',
    temporaryName: ''
  }

  getName = temporaryName => {
    this.setState({
      temporaryName
    })
  }

  saveName = () => {
    this.setState({
      name: this.state.temporaryName
    }, () => {
      localStorage.setItem('name', JSON.stringify(this.state.name))
    })
  }

  componentDidMount() {
    const name = JSON.parse(localStorage.getItem('name'))
    if (name) {
      this.setState({
        name
      })
    }
  }
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shops'>Shops</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact render={() => <Home name={this.state.name} updateName={this.getName} saveName={this.saveName} />} />
          <Route path='/shops' render={() => <Shops hats={this.props.Hats} shoes={this.props.Shoes} name={this.state.name} />} />
        </Switch>
      </div>
    );
  }
}


export default App;
