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

  handleChanges = e => {
    this.setState({ newMember: e.target.value });
  };

  addMember = e => {
    e.preventDefault();
    this.props.addSmurf(this.props.newSmurf);
  };

  fetchSmurfs = e =>{
    e.preventDefault();
    this.props.getSmurfs();
  }

  
  render() {
    return (
      <div className="App">
        <h1>Redux Smurfs</h1>
        {this.props.fetchingSmurfs && <p>Fetching Smurfs</p>}
        <button onClick={this.fetchSmurfs}>Fetch Smurfs!</button>

        <div>
          {this.props.smurfs.map(smurf => (
            <h4 key ={smurf.id}>{smurf.name}</h4>
          ))}
        </div>
        
        <form>
          <input 
          type="text" 
          value={this.props.newSmurf.name}
          onChange= {this.handleChanges}
          placeholder="Smurf Name"
          
          />
          <input 
          type="text" 
          value={this.props.newSmurf.age}
          onChange= {this.handleChanges}
          placeholder="Smurf Age"
          
          />
          <input 
          type="text" 
          value={this.props.newSmurf.height}
          onChange= {this.handleChanges}
          placeholder="Smurf Height"
          
          />
        </form>
        <button onClick={this.addMember}>Add Smurf!</button>
        {this.props.error && <p className="error">{this.props.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  newSmurf: state.newSmurf,
  error: state.error,
  addingSmurf: state.addingSmurf,
  fetchingSmurfs: state.fetchingSmurfs
})

export default connect(
  mapStateToProps,
  { getSmurfs,
    addSmurf }
)(App);
