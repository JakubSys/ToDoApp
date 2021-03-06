import _isEqual from "lodash/isEqual";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Form.css";

export default class Form extends Component {
  static defaultProps = { item: { id: null, message: "", isCompleted: false } };
  static propTypes = {
    hText: PropTypes.string.isRequired,
    item: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = { item: { itemId: null, message: "", isCompleted: false } };
    this.inputRef = React.createRef();
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.newItem = this.newItem.bind(this);
  }

  componentDidMount() {
    this.newItem(this.props.item);
    this.inputRef.current.focus();
  }
  componentDidUpdate(prevProps) {
    if (!_isEqual(this.props.item, prevProps.item)) {
      this.newItem(this.props.item);
    }
  }

  onChangeHandle(e) {
    this.setState({
      item: {
        itemId: this.state.item.itemId,
        message: e.target.value,
        isCompleted: this.state.item.isCompleted
      }
    });
  }

  newItem(item) {
    this.setState({ item });
  }

  render() {
    return (
      <form className="form-container">
        <h1>{this.props.hText}</h1>
        <input
          ref={this.inputRef}
          value={this.state.item.message}
          onChange={this.onChangeHandle}
        />
        <button
          type="submit"
          onClick={() => this.props.onClickHandle(this.state.item)}
        >
          {" "}
          Submit
        </button>
        <Link to="/" className="nav-button">
          {" "}
          ESC{" "}
        </Link>
      </form>
    );
  }
}
