import { useRef, useState } from "react";
import "./Form.css";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import DeleteTodo from "../DeleteTodo/DeleteTodo";

const Form = () => {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, todoInputRef.current.value]);
    todoInputRef.current.value = "";
  };
  return (
    <>
      <div className="container">
        <form className="todo-form" onSubmit={handleAddTodo}>
          <input
            className="input-todo"
            type="text"
            id="todoForm"
            placeholder="Enter new To-Do"
            ref={todoInputRef}
          />
          <button className="add-btn">Add</button>
        </form>
        {todos.map((todos, index) => {
          return (
            <div key={index}>
              <div className="todos">
                <div className="check-box">
                  <InputCheckbox />
                </div>
                <div className="todos-string">{todos}</div>
                <div className="delete-btn">
                  <DeleteTodo />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Form;
