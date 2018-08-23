import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { removeItem, toggleComplete } from '../../Actions/todo/Actions';
import './Row.css';

class Row extends Component {
    render() {
        return (
            <div>
                {
                    !this.props.item.hidden &&
                    <li className="row">
                        <button onClick={() => this.props.toggleComplete(this.props.item)} className={`button button-check ${this.props.item.isCompleted ? 'button-check--complete' : 'button-check--incomplete'}`}></button>
                        <span>{this.props.item.message}</span>
                        <div className="settings">
                            <Link to={`/edit/${this.props.item.itemId}`} className="button-button-edit">Edit me</Link>
                            <button onClick={() => this.props.removeItem(this.props.item.itemId)} className="button-button-remove">Remove me</button>
                        </div>
                    </li>
                }
            </div>
        );
    }
}

Row.propTypes = {
    item: PropTypes.object.isRequired,
    removeItem: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
    removeItem,
    toggleComplete,
}, dispatch);

export default connect(null, mapDispatchToProps)(Row);