import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <div className="col">
          <div>
            <span>A:</span>
            <span>{this.props.a}</span>
          </div>
          <button onClick={() => this.props.updateA(this.props.b)}>
            Update A
          </button>
          <div>
            <span>B:</span>
            <span>{this.props.b}</span>
          </div>
          <button onClick={() => this.props.updateB(this.props.a)}>
            Update B
          </button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = store => {
  return {
    a: store.reducerA.a,
    b: store.reducerB.b
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateA: b => dispatch({ type: 'UPDATE_A', value: 1, b: b }),
    updateB: a => dispatch({ type: 'UPDATE_B', value: 1, a: a })
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(App);
