import React from 'react';

import LoginModal  from './LoginModal.js';

import { Auth } from './httpRequest.js'

let auth = new Auth()

class Header extends React.Component {
  constructor(props) {
    super(props)
     
    this.state = {
      loading: '',
      username: ''
    }
    
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.unlink = this.unlink.bind(this)
  }

  login() {
    auth.login()
  }

  logout() {
    auth.logout()
    this.setState({ username: '' })
    window.location.reload()
  }

  unlink() {
    auth.unlink()
      .then(res => {
        this.logout()
      })
      .catch(err => {
        console.error(err)
        // this.logout()
      })
    
  }

  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container">
          <span className="navbar-brand" href="#">Night Life App</span>
          {auth.getUserName() &&
            <ul className="nav navbar-nav">
              <span className="navbar-text">
                Welcome {auth.getUserName()}
              </span>
              <li className="nav-item">
                <LoginModal confirm={this.logout} confirmText="Logout" unlink={this.unlink} text="Click Unlink to remove your account from the site"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</LoginModal>
                {/* <a className="nav-link" href="#" onClick={this.logout}><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</a> */}
              </li>
            </ul>
          }
          {!auth.getUserName() &&
            <ul className="navbar-nav">
              <li className="nav-item">
                <LoginModal confirm={this.login} confirmText="Login" text="Logging in will require using cookies"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</LoginModal>
              </li>
            </ul>
          }
        </div>
      </nav>
    );
  }
}

export default Header
