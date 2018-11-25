import React from 'react';

import Places from './Places.js'

import { Api, Auth } from './httpRequest.js'

const api = new Api()
const auth = new Auth()

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      bars: [],
      loading: false,
      error: ''
    }

    this.search = this.search.bind(this)
    this.submitSearch = this.submitSearch.bind(this)
    this.opting = this.opting.bind(this)
  }

  componentDidMount() {
    let location = localStorage.getItem('location')
    if (location && auth.getUserName()) {
      this.searchRequest(location)
      this.setState({ search: location })
    }
  }

  updateGoing(barName, change) {
    let i = 0
    let found = false
    let bars = JSON.parse(JSON.stringify(this.state.bars))
    while (i < bars.length || !found) {
      if (bars[i].name === barName) {
        bars[i].going = change
        bars[i].people += change ? 1 : -1
        found = true
      }
      i++
    }
    this.setState({ bars })
  }

  opting(barName, change) {
    this.setState({ error: '' })
    let changeGoingCall = change ? api.going(barName) : api.notGoing(barName)
    changeGoingCall
      .then(res => {
        this.updateGoing(barName, change)
      })
      .catch(err => {
        console.error(err)
        this.setState({ error: 'Error updating going status' })
      })
  }

  search(e) {
    e.preventDefault()
    this.setState({ search: e.target.value })
  }

  submitSearch(e) {
    e.preventDefault()
    if (this.state.search) {
      this.searchRequest(this.state.search)
    } else {
      this.setState({ bars : [] })
    }
    
  }

  searchRequest(location) {
    this.setState({ loading: true, bars: [], error: '' })
    api.search(location)
      .then(res => {
        let bars = res.data.bars || []
        localStorage.setItem('location', res.data.location)
        this.setState({ bars: bars, loading: false })
      })
      .catch(err => {
        console.error(err)
        localStorage.removeItem('location')
        this.setState({ error: 'Error Searching' })
      })
  }

  render() {
    return (
      <div className="container content">
        <br />
        <div className="row justify-content-center">
          <form className="input-group col-lg-6">
            <input className="form-control bg-dark text-white" placeholder="search" value={this.state.search} onChange={this.search} />
            <div className="input-group-append" role="group"> 
              <button type="submit" className="btn btn-primary" id="submit-search" onClick={this.submitSearch}>Search</button>
            </div>
          </form>
        </div>
        { this.state.loading && <h1>Loading...</h1>}
        { !!this.state.bars.length && <Places bars={this.state.bars} opting={this.opting} /> }
      </div>
    );
  }
}

export default Home
