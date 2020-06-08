import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactPage extends Component {
    render() {
        let urlVariable = this.props.match.params      // Just an ex. of how React Router gives you access to 3 props, one being match
        console.log(urlVariable);                      // that has a params prop which has a URL variable of whatever you defined in Route path in App.js

        return (
            <div>
                <h1>Contact Page</h1>
                <h3> URL variable: {this.props.match.params.id}</h3> 
                <Link to="/"> Go to the Students Page </Link>
            </div>
        )
    }
}

export default ContactPage
