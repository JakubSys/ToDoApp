import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';

import ItemAdd from '../Forms/ItemAdd';
import ItemEdit from '../Forms/ItemEdit';
import { setItems } from '../../actions/todo';

class App extends Component {

    componentDidMount() {
        this.props.setItems();
    }


  render() {
      return (
          <Router>
              <div className="app">
                  <div className="app-box">
                      <header className="app-header">
                          <span className="app-title">To(Pls Hire me)Do-App</span>
                      </header>
                      <Route exact path="/add" component={ItemAdd} />
                      <Route exact path="/edit/:id" component={ItemEdit} />

                  </div>
              </div>
          </Router>
      );
  }
}


App.propTypes = {
    setItems: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
    setItems
}, dispatch);

export default connect(null, mapDispatchToProps)(App);