import { Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import ReduxTodo from "./pages/ReduxTodo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Todo />}></Route>
      <Route path="/reduxtodo" element={<ReduxTodo />}></Route>
    </Routes>
  );
}

export default App;
