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

  let classTodo = "todos";

  const handleCheckChange = (index) => {
    if (todos[index].done === false) {
      todos[index].done = true;
    } else {
      todos[index].done = false;
    }

    console.log(todos[index].done);
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
        {todos.map((todos, index) => {
          return (
            <div key={index}>
              <div className={classTodo}>
                <div className="check-box">
                  <InputCheckbox
                    onCheckChange={() => {
                      handleCheckChange(index);
                    }}
                  />
                </div>
                <div className="todos-string">{todos.title}</div>
                <div className="delete-btn">
                  <DeleteTodo
                    onDelete={() => {
                      //DeleteTodo'ya onDelete diye
                      //prop verdik. O da içerdeki button
                      //tıklanınca burayı tetikliyor.
                      //bu handleDeleteTodo da index alıp
                      //o index'i silip, tekrar state set ediyor
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
