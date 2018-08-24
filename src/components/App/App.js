import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import List from "../List/List";
import ItemAdd from "../Forms/ItemAdd";
import ItemEdit from "../Forms/ItemEdit";
import { setItems } from "../../Actions/todo/Actions";

class App extends Component {
  static propTypes = {
    setItems: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.setItems();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <div className="app-box">
            <header className="app-header">
              <span className="app-title">My Todo App</span>
            </header>
            <Route exact path="/" component={List} />
            <Route exact path="/add" component={ItemAdd} />
            <Route exact path="/edit/:id" component={ItemEdit} />
          </div>
        </div>
      </Router>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setItems
    },
    dispatch
  );
export default connect(
  null,
  mapDispatchToProps
)(App);
