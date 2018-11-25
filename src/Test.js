import React from 'react';
import axios from 'axios';

const base_url = 'http://localhost:8080'
// localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsImlhdCI6MTU0MjkzNTE1OH0.eeDoh9PvHdf4VNakUv4TfsF95E3_3nOpurH2pXEOZII')
// localStorage.removeItem('token')
let token = localStorage.getItem('token') || ''
axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

class App extends React.Component {
  constructor(props) {
    super(props)

    let user = localStorage.getItem('user')
    user = user ? JSON.parse(user).twitter.username : ''

    this.state = {
      user: user
    }

    this.checkToken = this.checkToken.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    this.callbackCheck()
  }

  callbackCheck() {
    if (localStorage.getItem('callback')) {
      this.callback()
    }
  }

  login(e) {
    e.preventDefault()
    localStorage.setItem('callback', true)
    // window.location = base_url + '/test/login'
    window.location.href = base_url + '/auth/twitter'
  }

  logout(e) {
    e.preventDefault()
    localStorage.removeItem('user')
    this.setState({ user: '' })
  }

  callback() {
    localStorage.removeItem('callback')
    // callback
    // axios.get(base_url + '/test/callback', { withCredentials: true })
    axios.get(base_url + '/auth/get-user', { withCredentials: true })
      .then(res => {
        this.setUser(res.data)
        // this.setState({ token: res.token })
      })
      .catch(err => {
        console.error(err)
      })
  }

  setUser(user) {
    user.twitter = JSON.parse(user.twitter)
    localStorage.setItem('user', JSON.stringify(user))
    this.setState({ user: user.twitter.username })
  }

  checkToken(e) {
    e.preventDefault()

    axios.get(base_url + '/test/token')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  search(e) {
    e.preventDefault()

    axios.get(base_url + '/api/search/Toronto')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <div>
        <p>User: {this.state.user}</p>
        { this.state.user && <p>Hello {this.state.user}</p> }
        { !this.state.user && <button className="btn btn-primary" onClick={this.login}>Login</button> }
        { this.state.user && <button className="btn btn-primary" onClick={this.logout}>Logout</button> }
        <button className="btn btn-primary" onClick={this.checkToken}>Token</button>
        <button className="btn btn-primary" onClick={this.search}>Search</button>
      </div>
    );
  }
}

export default App;
