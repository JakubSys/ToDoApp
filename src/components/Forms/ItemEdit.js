import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Form from './Form';

class ItemEdit extends Component {
    findItem() {
        return this.props.todoList.find(item => item.itemId === Number(this.props.match.params.itemId));
    }

    render() {
        return (
            <Form
                item={this.getItem()}
                onClickHandle={(data) => this.props.updateMessage(data, this.props.history)}
                hText="Edit Item"
            />
        );
    }
}

ItemEdit.propTypes = {
    todoList: PropTypes.array.isRequired,
    updateMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({todoList: state.todo.list,});

const mapDispatchToProps = dispatch => bindActionCreators({updateMessage}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemEdit);