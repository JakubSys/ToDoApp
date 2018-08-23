import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from './Form';

class ItemAdd extends Component{
    render(){
        return (
            <Form onClickHandle={(data) => this.props.addItem(data, this.props.history)} hText="Add Item" />
        );
    }
}

ItemAdd.propTypes = {
    todoList: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({todoList: state.todo.list, });

const mapDispatchToProps = dispatch => bindActionCreators({addItem}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemAdd);