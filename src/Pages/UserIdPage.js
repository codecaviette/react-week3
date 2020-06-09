import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserIdPage extends Component {
    render() {
        return (
                <div>
                   <h3> User ID: {this.props.match.params.id} </h3>      
                   <Link to="/"> Go back to Students Page </Link>               
                </div>

        )
    }
}

export default UserIdPage
