import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Form from "./Form";

import { updateMessage } from "../../Actions/todo/Actions";

class ItemEdit extends Component {
  static propTypes = {
    todoList: PropTypes.array.isRequired,
    updateMessage: PropTypes.func.isRequired
  };
  findItem() {
    return this.props.todoList.find(
      item => item.itemId === Number(this.props.match.params.id)
    );
  }

  render() {
    return (
      <Form
        item={this.findItem()}
        onClickHandle={data => {
          this.props.updateMessage(data, this.props.history);
        }}
        hText="Edit Item"
      />
    );
  }
}

const mapStateToProps = state => ({ todoList: state.todo.list });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateMessage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemEdit);
