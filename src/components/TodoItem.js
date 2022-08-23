function TodoItem(props) {


    const updateTodo = () => {
        
        props.todoDone(props.index);
    
    }

    return(
        <li className="list-group-item" onClick={updateTodo}>
                  {
                  (props.todo.done === true)
                    ? <del>{props.todo.task}</del>
                    : props.todo.task
                  }
        </li>
    )

}

export default TodoItem;