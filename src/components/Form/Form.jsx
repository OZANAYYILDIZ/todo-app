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
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          id="todoForm"
          placeholder="Enter new To-Do"
          ref={todoInputRef}
        />
        <button>Add</button>
      </form>
      {todos.map((todos, index) => {
        return (
          <div key={index}>
            <div className="todos">
              <InputCheckbox />
              <span>{todos}</span>
              <DeleteTodo />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Form;
