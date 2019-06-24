import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './Components/NavBar'
import SearchPage from './Pages/SearchPage'

const Home = () => <div>Hello World!</div>
const NotFound = () => <div>404 ERROR!</div>

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/' component={ NavBar }/>
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/search' component={ SearchPage }/>
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
