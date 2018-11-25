import axios from 'axios'

const base_url = window.location.protocol + '//' + window.location.host

const Api = function() {
  const _getToken = function() {
    let token = localStorage.getItem('token') || ''
    return token
  }
  
  this.search = function(location) {
    let headers = { 'Authorization': 'Bearer ' + _getToken() }
    let url = base_url + '/api/search/?location=' + location
    return axios.get(url, { headers })
  }

  this.going = function(barName) {
    let headers = { 'Authorization': 'Bearer ' + _getToken() }
    return axios.post(base_url + '/api/going/', { barName, going: true }, { headers })
  }

  this.notGoing = function(barName) {
    let headers = { 'Authorization': 'Bearer ' + _getToken() }
    return axios.post(base_url + '/api/going/', { barName, going: false }, { headers })
  }
}

const Auth = function() {
  const _getToken = function() {
    let token = localStorage.getItem('token') || ''
    return token
  }

  this.login = function() {
    localStorage.setItem('callback', true)
    window.location.href = base_url + '/auth/twitter'
  }

  this.logout = function() {
    localStorage.removeItem('user')
    localStorage.removeItem('location')
    localStorage.removeItem('token')
  }

  this.unlink = function() {
    let headers = { 'Authorization': 'Bearer ' + _getToken() }
    return axios.post(base_url + '/auth/unlink', {}, { headers, withCredentials: true })
  }

  this.callbackToken = function() {
    return axios.get(base_url + '/auth/get-user', { withCredentials: true })
  }

  this.tokenCheck = function() {
    let user = localStorage.getItem('user')
    let exp = user ? JSON.parse(user).exp : ''
    if (exp < Date.now() / 1000) {
      this.logout()
    }
  }

  this.updateUser = function(newUser) {
    newUser.twitter = JSON.parse(newUser.twitter)
    localStorage.setItem('user', JSON.stringify(newUser))
    localStorage.setItem('token', newUser.token)
  }

  this.getUserName = function() {
    let user = localStorage.getItem('user')
    return user ? JSON.parse(user).username : ''
    // return User ? User.name || ''
  }
}

export { Api, Auth }