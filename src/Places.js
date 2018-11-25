import React from 'react';

import Bar from './Bar.js'

class Places extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filterText: '',
      filterType: ''
    }

    this.onChange = this.onChange.bind(this)
    this.sort = this.sort.bind(this)
  }

  onChange(e) {
    e.preventDefault()
    this.setState({ filterText: e.target.value.toLowerCase() })
  }

  generateBars(bars) {
    let barsFilter = JSON.parse(JSON.stringify(bars))

    switch(this.state.filterType) {
      case 'name':
        barsFilter = barsFilter.sort((a, b) => a.name > b.name)
        break
      case 'rating':
        barsFilter = barsFilter.sort((a, b) => a.rating < b.rating)
        break
      case 'going':
        barsFilter = barsFilter.filter(bar => bar.going)
        break;
      default:
        break;
    }

    barsFilter =  barsFilter.filter(bar => {
      return bar.name.toLowerCase().indexOf(this.state.filterText) > -1
    })
 
    if (barsFilter.length) {
      return barsFilter.map((bar, i) => <Bar key={'bar' + i} bar={bar} opting={this.props.opting}/>)
    } else {
      return <h2>No Bars</h2>
    }
  }

  sort(e) {
    e.preventDefault()
    // TODO: do this in react?
    let add = ' active'
    if (e.target.className.indexOf('active') > -1) {
      add = ''
    }
    document.getElementById('name').className = 'btn btn-outline-primary'
    document.getElementById('rating').className = 'btn btn-outline-primary'
    document.getElementById('going').className = 'btn btn-outline-primary'

    e.target.className += add
    if (add) {
      this.setState({ filterType: e.target.id })
    } else {
      this.setState({ filterType: '', bars: this.props.bars })
    }
    
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div id="filter-input" className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon2">Filter</span>
              </div>
              <input className="form-control bg-dark text-white" name="filter" type="text" onChange={this.onChange} placeholder="filter" />
              <div className="input-group-append" role="group"> 
                  <button type="button" className="btn btn-outline-primary" id="name" onClick={this.sort}>Name</button>
                  <button type="button" className="btn btn-outline-primary" id="rating" onClick={this.sort}>Rating</button>
                  <button type="button" className="btn btn-outline-primary" id="going" onClick={this.sort}>Going</button>
              </div>
            </div>
          </div>
        </div>
        <div>{this.generateBars(this.props.bars)}</div>
      </div>
    )
  }
}

export default Places;
