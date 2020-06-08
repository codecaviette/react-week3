import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserIdPage extends Component {
    render() {
        return (
            <Link>
                <div>
                   <h3> User ID: {this.props.match.params.id} </h3>                     
                </div>
            </Link>
        )
    }
}

export default UserIdPage
