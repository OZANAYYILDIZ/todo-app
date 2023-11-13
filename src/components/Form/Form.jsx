import { useRef, useState } from "react";
import "./Form.css";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import DeleteTodo from "../DeleteTodo/DeleteTodo";
import useTodos from "../../store/todos.store";

const Form = () => {
  const { todos, addTodo, removeTodo, updateTodoStatus } = useTodos();
  const todoInputRef = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todo = todoInputRef.current.value;
    if (todo === "") return;
    addTodo({
      id: Math.floor(Math.random() * 10000),
      title: todo,
      done: false,
    });
    todoInputRef.current.value = "";
  };

  const handleCheckChange = (id) => {
    updateTodoStatus(id);
  };

  const handleDeleteTodo = (id) => {
    removeTodo(id);
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
                      handleCheckChange(todo.id);
                    }}
                  />
                </div>
                <div className="todos-string">{todo.title}</div>
                <div className="delete-btn">
                  <DeleteTodo
                    onDelete={() => {
                      handleDeleteTodo(todo.id);
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
