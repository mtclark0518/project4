import React, { Component } from 'react';
import './_styles/main.css';

class App extends Component {
  
  goTo(route) {this.props.history.replace( `/${route}`)}

  login() {this.props.auth.login(); }
 
  logout() { this.props.auth.logout(); }
 
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="App">
        <div className="App-header">
          <button onClick={this.goTo.bind(this, 'home')}>home</button>
          {!isAuthenticated() && (<button onClick={this.login.bind(this)}>log in</button>)}
          {isAuthenticated() && (<button onClick={this.logout.bind(this)}>log out</button>)}
        </div>
      </div>
    );
  }
}

export default App;
