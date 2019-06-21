import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from "../actions"
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  fetchSmurfs = e =>{
    e.preventDefault();
    this.props.getSmurfs();
  }

  
  render() {
    return (
      <div className="App">
        <h1>Redux Smurfs</h1>
        {this.props.fetchingSmurfs && <p>Fetching Smurfs</p>}

        <div>
          {this.props.smurfs.map(smurf => (
            <h4 key ={smurf.id}>{smurf.name}</h4>
          ))}
        </div>

        {this.props.error && <p className="error">{this.props.error}</p>}
        <button onClick={this.fetchSmurfs}>Fetch Smurfs!</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error,
  fetchingSmurfs: state.fetchingSmurfs
})

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
