import React, { Component } from 'react';
import './App.scss';
import KanbanBoard from '../KanbanBoard';
import { loadStart } from '../../actions';
import { connect } from 'react-redux';


class App extends Component {

  componentDidMount() {
    return this.props.loadStart();
  }

  render() {
    return (
      <div className="App">

        <KanbanBoard showCard={this.toggleDetail} />

      </div>
    );
  };
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadStart: () => {
      return dispatch(loadStart())
    }
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
