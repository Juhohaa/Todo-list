import { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo"

function App() {


  // Add some example items to list
  const [todos, setTodos] = useState([
                                      {
                                        task: "Clean",
                                        done: false
                                      },
                                      {
                                        task: "Exercise",
                                        done: true
                                      },
                                      {
                                        task: "Buy groceries",
                                        done: false
                                      }
                                    ]);


  // Add new user todos to list
  const addTodo = (newTodo) => {

    let tempTodo = {
                      task: newTodo,
                      done: false
                    }

    setTodos([...todos, tempTodo])

  }

  // Set todo items done or undone
  const todoDone = (index) => {

    todos[index].done = !todos[index].done;

    setTodos([...todos]);

  }

  return (
    <div className="container">
      <br/>
      <h2 className="text-center">Todo List</h2>
      <br/>

      <NewTodo addTodo={addTodo}/>

      
      <TodoList todos={todos} todoDone={todoDone} />
      <br/>
      <p className="small">Click the todo item to make it done!</p>

    </div>
  );
}

export default App;
