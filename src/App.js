import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import StudentsPage from './Pages/StudentsPage';
import ContactPage from './Pages/ContactPage';
import UserIdPage from './Pages/UserIdPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StudentsPage}/>
          <Route exact path="/contact/:id" component={ContactPage}/>
          <Route exact path="/user/:id" component={UserIdPage}/>   {/* /:id gives UserShowPage component access to this URL variable; its value can be anything (ex. asdf, 123) */}
          <Route path="*">        {/* This is a catch-all. The asterisk means "everything else" ... redirects to... */}
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App