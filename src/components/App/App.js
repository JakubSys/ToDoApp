import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';

class App extends Component {

    componentDidMount() {

    }


  render() {
      return (
          <Router>
              <div className="app">
                  <div className="app-box">
                      <header className="app-header">
                          <span className="app-title">To(Pls Hire me)Do-App</span>
                      </header>

                  </div>
              </div>
          </Router>
      );
  }
}

export default App;
