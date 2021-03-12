import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
/*import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";*/
import Signup from "./components/Signup";
import LoginForm from "./components/login-form";
import { BrowserRouter } from "react-router-dom";
import Employee from "./Pages/employees";
import Host from './Pages/Host';
import Home from './Pages/Home'

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
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then((response) => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
        });
      } else {
        console.log("Get user: no user");
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
              render={() => <LoginForm updateUser={this.updateUser} />}
            />  
            
            <Route path="/" render={() => <Home />} />
            <Route path="/employee" render={() => <Employee />} />
            <Route path="/signup" render={() => <Signup />} />
            <Route path="/Host" render={() => <Host />} />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
