import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";




import React from 'react'
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const AppRouter = () => {
    return (
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginScreen}>
            </Route>
            <Route exact path="/calendar" component={CalendarScreen}>
            </Route>
            <Redirect to="/calendar"  />
          </Switch>
      </Router>
    )   
}
