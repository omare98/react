import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Hello from "./pages/components/Hello";
import MyComponent from "./pages/components/MyComponent";
import Counter from "./pages/components/Counter";
import Animals from "./pages/components/Animals";
import ExpensiveComponent from "./pages/components/ExpensiveComponent";
import AsyncCounter from "./pages/components/AsyncCounter";
import User from "./pages/components/User";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/hello">Hello</Link>
          </li>
          <li>
            <Link to="/mycomponent">MyComponent</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/animals">Animals</Link>
          </li>
          <li>
            <Link to="/expensivecomponent">ExpensiveComponent</Link>
          </li>
          <li>
            <Link to="/asynccounter">AsyncCounter</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/hello">
            <Hello />
          </Route>
          <Route exact path="/mycomponent">
            <MyComponent name="리액트"></MyComponent>
          </Route>
          <Route exact path="/counter">
            <Counter />
          </Route>
          <Route exact path="/animals">
            <Animals />
          </Route>
          <Route exact path="/expensivecomponent">
            <ExpensiveComponent />
          </Route>
          <Route exact path="/asynccounter">
            <AsyncCounter />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
