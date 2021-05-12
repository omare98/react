import "./App.css";
import Hello from "./pages/components/Hello";
import MyComponent from "./pages/components/MyComponent";
import Counter from "./pages/components/Counter";
import Animals from "./pages/components/Animals";
import ExpensiveComponent from "./pages/components/ExpensiveComponent";
import AsyncCounter from "./pages/components/AsyncCounter";
import User from "./pages/components/User";

function App() {
  return (
    <div className="App">
      {/* <MyComponent name="리액트"></MyComponent>
      <Hello></Hello>
      <Counter></Counter>
      <Animals></Animals>
      <ExpensiveComponent></ExpensiveComponent> */}
      <AsyncCounter></AsyncCounter>
      <User></User>
    </div>
  );
}

export default App;
