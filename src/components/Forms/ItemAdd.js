import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "./Form";
import { addItem } from "../../Actions/todo/Actions";

class ItemAdd extends Component {
  static propTypes = {
    todoList: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired
  };

  render() {
    return (
      <Form
        onClickHandle={data => this.props.addItem(data, this.props.history)}
        hText="Add Item"
      />
    );
  }
}

const mapStateToProps = state => ({ todoList: state.todo.list });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addItem }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemAdd);
