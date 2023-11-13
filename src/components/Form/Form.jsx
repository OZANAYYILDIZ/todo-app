import { useRef, useState } from "react";
import "./Form.css";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import DeleteTodo from "../DeleteTodo/DeleteTodo";

const Form = () => {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        title: todoInputRef.current.value,
        done: false,
      },
    ]);
    todoInputRef.current.value = "";
  };

  const handleCheckChange = (index) => {
    const tempTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          title: todo.title,
          done: !todo.done,
        };
      }
      return todo;
    });
    setTodos(tempTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
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
        {todos.map((todo, index) => {
          return (
            <div key={index}>
              <div
                className={
                  todo.done ? "todo-done todo-generic" : "todo todo-generic"
                }
              >
                <div className="check-box">
                  <InputCheckbox
                    onCheckChange={() => {
                      handleCheckChange(index);
                    }}
                  />
                </div>
                <div className="todos-string">{todo.title}</div>
                <div className="delete-btn">
                  <DeleteTodo
                    onDelete={() => {
                      handleDeleteTodo(index);
                    }}
                  />
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
