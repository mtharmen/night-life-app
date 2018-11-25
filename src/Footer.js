import React from 'react';

class Footer extends React.Component {
  render() {
    return (
        <footer className="navbar footer">
          <div className="container">
              <small className="mx-auto">
                <a href="https://www.freecodecamp.com/challenges/build-a-nightlife-coordination-app" target="_blank" rel="noopener noreferrer">FCC Night Life App</a> | 
                <a href="https://github.com/mtharmen/night-life-app" target="_blank" rel="noopener noreferrer">GitHub Repo <i className="fa fa-github" aria-hidden="true"></i></a> | 
                <a href="http://fontawesome.io/" target="_blank" rel="noopener noreferrer">Font Awesome <i className="fa fa-font-awesome" aria-hidden="true"></i></a> | 
                <a href="https://www.yelp.com/" target="_blank" rel="noopener noreferrer">Search Results from Yelp <i className="fa fa-yelp" aria-hidden="true"></i></a>
              </small>
          </div>
        </footer>
    );
  }
}

export default Footer;
