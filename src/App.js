import "./App.css";
import Hello from "./pages/components/Hello";
import MyComponent from "./pages/components/MyComponent";
import Counter from "./pages/components/Counter"

function App() {
  return (
    <div className="App">
      <MyComponent name="리액트"></MyComponent>
      <Hello></Hello>
      <Counter></Counter>
    </div>
  );
}

export default App;
