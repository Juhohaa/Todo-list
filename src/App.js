import { useState } from "react";

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
      <input 
            className="form-control shadow" 
            type="text" 
            placeholder="Add todo..."
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                addTodo(e.target.value);
                e.target.value = null;
              } 
            }}
      />
      <ul className="list-group mt-3 shadow">

        {todos.map((todo, idx) => {
        
        return (
                <li className="list-group-item" key={idx} onClick={() => { todoDone(idx) }}>
                  {
                  (todo.done === true)
                    ? <del>{todo.task}</del>
                    : todo.task
                  }
                </li>
              )

        })}
      
      </ul>

    </div>
  );
}

export default App;
