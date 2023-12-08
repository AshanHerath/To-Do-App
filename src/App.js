import './App.css';

function TodoList(){
    return (
        <>
            <h1>My To Do List</h1>
            <InputForm/>
            <TodoListUi/>
        </>
    );
}

const InputForm = ()=> {
    return(
        <form>
            <input type="text" className="todo-input"/>
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-circle fa-lg"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="completed">Completed</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                </div>
        </form>
    );
}

const TodoListUi = ()=>{
    return (
        <div className="todo-container">
            <ul className="todo-list"></ul>
        </div>
    );
}

export default TodoList;