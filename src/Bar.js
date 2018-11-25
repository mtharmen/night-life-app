import React from 'react'

import { Auth } from './httpRequest.js'

let auth = new Auth()

class Bar extends React.Component {
  displayStars(stars) {
    return stars.map((star, i) => {
      return <span key={'star' + i}><i className={star + ' fa-2x'} aria-hidden="true"></i></span>
    })
  }

  opting() {
    this.props.opting(this.props.bar.name, !this.props.bar.going)
  }

  render() {
    return (
      <div className="card mt-3 bg-dark text-white">
        <div className="card-header">
          <div className="row">
            <h2 className="col-7">{this.props.bar.name}</h2>
            <div className="col-5 mr-auto text-right">
              {this.displayStars(this.props.bar.stars)}
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              <img className="img-thumbnail img-fluid rounded float-left maxheight" src={this.props.bar.image} alt={this.props.bar.name}/>
            </div>
            <div className="col-5 text-left">
              {this.props.bar.address.map((line, i) => <span key={'line' + i}>{line}<br /></span>)}
              <br />
              {this.props.bar.phone.substr(3)}
            </div>
            <div className="col-3 text-right">
              <a href={this.props.bar.yelpUrl} target="_blank" rel="noopener noreferrer">{this.props.bar.reviewCount} Reviews</a>
            </div>
            <hr />
          </div>
        </div>
        <div className="card-footer">
          <h4>{this.props.bar.people} Going
            {auth.getUserName() ? 
              <button className="btn btn-primary float-right" onClick={this.opting.bind(this)}>
                  { this.props.bar.going ? "I Want Out" : "I Want In" }
              </button>
            :
              <button className="btn btn-info float-right" disabled>Log In to Opt In</button>
            }
          </h4>
        </div>
      </div>
    );
  }
}

export default Bar