import React from 'react';

import './App.css';

import Header from './Header.js'
import Home from './Home.js'
import Footer from './Footer.js'

import { Auth } from './httpRequest.js'

const auth = new Auth()

var location = localStorage.location || ''

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    if (localStorage.getItem('callback')) {
      this.callback()
    } else {
      auth.tokenCheck()
    }
  }

  callback() {
    localStorage.removeItem('callback')
    this.setState({ loading: true })
    auth.callbackToken()
      .then(res => {
        auth.updateUser(res.data)
        let username = auth.getUserName()
        this.setState({ loading: false })
      })
      .catch(err => {
        this.setState({ loading: false })
        console.error(err)
      })
  }

  render() {
    return (
      <div>
        { !this.state.loading && 
          <span>
            <Header />
            <Home />
            <Footer />
          </span>
        }
        { this.state.loading && <h1>Loaading...</h1> }
      </div>
    );
  }
}

export default App;
