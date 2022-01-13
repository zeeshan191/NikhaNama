import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './LoginPage';
function Routes() {
    return (
        <>
            <Router>
     
        <Route exact path="/" component={LoginPage}/>
            
         
        </Router>
        </>
    )
}

export default Routes;
