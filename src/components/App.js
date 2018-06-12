import { assignNotes, assignCodes } from '../actions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientForm from './ClientForm';
import NoteList from './NoteList';
import axios from 'axios';
import View from './Pages/View';
import { BrowserRouter as Router, Route, BrowserRouter } from  'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class AppComponent extends Component {
  componentDidMount() {
    const { assignNotes, assignCodes } = this.props;

    // request
    axios.get('http://ehrwebtest.naiacorp.net/api/Notes/GetAllNoteTypes')
      .then(({data}) => assignNotes(data));

    axios.get('http://ehrwebtest.naiacorp.net/api/Notes/GetAllReasonCodes')
      .then(({data}) => assignCodes(data));
  }

  render() {
    return (
      <Router>
        <div className="container">
          <ClientForm />
          <Route path="/view" component={View}>Pandesal</Route>
          <Route path="/notes" component={NoteList}></Route>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  assignNotes: notes => dispatch(assignNotes(notes)),
  assignCodes: codes => dispatch(assignCodes(codes)),
});

const App = connect(null, mapDispatchToProps)(AppComponent);
export default App;
