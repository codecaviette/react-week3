import React, { Component } from 'react'

const USERS = [
    {
        id: 0,
        name: "Jenny"
    },
    {
        id: 1,
        name: "Emily"
    },
    {
        id: 2,
        name: "Aaron"
    }
]

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: USERS
        }
    }

    render() {
        return (
            <div>
                <UserComponent users={this.state.users} />
            </div>
        )
    }
}

export default Users;


