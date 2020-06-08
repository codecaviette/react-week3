// This is the parent component to child component StudentsJsx, which we're passing state to. The child will display JSX depending on 
// the parent's state.

import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import StudentJsx from './StudentJsx';

// State (below) can be different at any given time depending on viewer's discretion, since viewer can delete names on child 
// component which will change parent component's state. This state is an array of objects.
const initialState = [
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

class StudentsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: initialState
        }
        this.deleteStudent = this.deleteStudent.bind(this);         // This binds the deleteStudent function to this StudentsPage class so that even tho we're calling the fxn in 
    }                                                               // child comp StudentJsx

    // Modify parent state from child component by creating function in parent and pass as prop to child. Use setState fxn and filter array method to create brand new array.
    deleteStudent(id) {         // Pass pararmeter/placeholder of id since each array item already has a unique id 
        this.setState({         // Must use React's setState fxn (cannot change state directly!)
            students: this.state.students.filter((student) => {             // We're re-rendering the same [array] variable "students" from above section and creating a new  
                return student.id != id;                                    // students array by filtering through each item in original array and creating a new array that    
            }),                                                             // only includes items with id's that DO NOT match the clicked id.    
        }); 
    }

    render() {
        return (
            <div>
                <h1>Students Page</h1>
                <Link to="/contact/:id"> Go to the Contact Page </Link>
                <StudentJsx studentData={this.state.students} delete={this.deleteStudent}/>    {/* Pass state as prop studentData (and deleteStudent fxn) to child comp StudentJsx */}
            </div>
        );
    }
}

export default StudentsPage
