import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Signup from "./components/Signup";
import LoginForm from "./components/login-form";
import { BrowserRouter } from "react-router-dom";
import Host from './Pages/Host';
import Home from './Pages/Home'
import SignUpForm from "./Pages/Sign-Up-New";
import About from './Pages/About'
import Thanks from "./Pages/Thanks";
import Logout from "./Pages/Logout";
import EmployeeSignup from "./components/Employee-signup";
import Manager from "./Pages/Manager";
import AdminLogin from "./components/AdminLogin"
import Team from "./Pages/Team";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  updateEmployee(employeeObject) {
    this.setState(employeeObject);
  }

  getUser() {
    axios.get("/user/").then((response) => {
      if (response.data.user) {;
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
        });
      }
      else {
        this.setState({
          loggedIn: false,
          username: null,
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/login"
              render={() => <LoginForm updateUser={this.updateUser} updateEmployee={this.updateEmployee} />}
            />  
            
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>

            <Route path="/about" render={() => <About />} />
            <Route path="/home" render={() => <Home />} />
            <Route path="/team" render={() => <Team />} />
            <Route path="/thanks" render={() => <Thanks />} />
            <Route path="/logout" render={() => <Logout />} />
            <Route path="/signup-new" render={() => <SignUpForm />} />
            {/* <Route path="/employee" render={() => <Employee />} /> */}
            <Route path="/signup" render={() => <Signup />} />
            <Route path="/admin/signup" render={() => <EmployeeSignup />} />
            <Route path="/Host" render={() => <Host />} />
            <Route path="/admin/home" render={() => <Manager />} />
            <Route path="/admin/login" render={() => <AdminLogin />} />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
