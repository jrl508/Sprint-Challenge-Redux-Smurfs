import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs,addSmurf } from "../actions"
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurf: {
    name:'',
    age:'',
    height:''
    }
  }
  handleChanges = e => {
    e.preventDefault();
    e.persist();
    this.setState( prevState => (
      {
        smurf:{
          ...prevState.smurf,
          [e.target.name]: e.target.value
        } 
  }));

}

  addSmurf = (e,smurf) => {
    e.preventDefault();
    this.props.addSmurf(smurf);
  };

  fetchSmurfs = e =>{
    e.preventDefault();
    this.props.getSmurfs();
  };

  
  render() {
    return (
      <div className="App">
        <h1>Redux Smurfs</h1>
        {this.props.fetchingSmurfs && <p>Fetching Smurfs</p>}
        <button onClick={this.fetchSmurfs}>Fetch Smurfs!</button>

        <div>
          {this.props.smurfs.map(smurf => (
            <div key ={smurf.id}>
              <p>{smurf.name}</p>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </div>
          ))}
        </div>
        
        <form onSubmit={e => this.addSmurf(e, this.state.smurf)}>
          <input 
          type="text"
          name="name" 
          value={this.state.smurf.name}
          onChange= {this.handleChanges}
          placeholder="Smurf Name"
          
          />
          <input 
          type="text"
          name="age" 
          value={this.state.smurf.age}
          onChange= {this.handleChanges}
          placeholder="Smurf Age"
          
          />
          <input 
          type="text"
          name="height" 
          value={this.state.smurf.height}
          onChange= {this.handleChanges}
          placeholder="Smurf Height"
          
          />
          <button type="submit">Add Smurf!</button>
        </form>
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
