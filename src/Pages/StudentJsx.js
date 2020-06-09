// This is the child component to parent StudentsPage. For each active (non-deleted) object in the parent state's array, this child 
// component will display JSX.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StudentJsx extends Component {
    render() {
        console.log(this.props.studentData);     // Test to ensure state was passed from parent as prop/variable studentData

        let theJsx = this.props.studentData.map((student) => {      // Iterate over the passed prop (object array)
            return (
                <div>
                    <Link to={`/user/${student.id}`}>          {/* In RR Link, must use {``} rather than "" when writing JavaScript */} 
                        <h4> {student.name} </h4>
                    </Link>
                    <button onClick={() => this.props.delete(student.id)}> Delete </button>
                </div>
            );
        }
        )     

        return (
            <div>
                {theJsx}         {/* Best practice to define variable above the top-level return statement and simply call it in the return stmt */}
            </div>
        )
    }
}

export default StudentJsx
