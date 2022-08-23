function NewTodo(props) {

    return(
        <input 
            className="form-control shadow" 
            type="text" 
            placeholder="Add todo and press Enter..."
            onKeyPress={(e) => {
            if (e.key === "Enter") {
                props.addTodo(e.target.value);
                e.target.value = null;
            } 
            }}
        />
    )

}

export default NewTodo;