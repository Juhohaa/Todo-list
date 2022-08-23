import TodoItem from "./TodoItem"

function TodoList(props) {

    return(

        <ul className="list-group mt-3 shadow">

            {props.todos.map((todo, idx) => {

            return (
                    <TodoItem key={idx} index={idx} todo={todo} todoDone={props.todoDone}/>
                    )

            })}

        </ul>

    )

}

export default TodoList;