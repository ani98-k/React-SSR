import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserListPage extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        const data = this.props.users;
        return data ? data.map(user => {
            return <li key={user.id}>{user.name}</li>
        }) : null;
    }

    render() {
        return (
            <div>
                Users List
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
    component: connect(mapStateToProps, { fetchUsers })(UserListPage),
    loadData
};