import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    done: false,
  },
];

const useTodosStore = create(
  persist(
    (set) => ({
      todos: initialTodos,
      addTodo: (todo) =>
        set((state) => ({
          todos: [...state.todos, todo],
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      updateTodoStatus: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                done: !todo.done,
              };
            }
            return todo;
          }),
        })),
    }),
    {
      name: "todos-storage",
    }
  )
);

const useTodos = () => {
  const todos = useTodosStore((state) => state.todos);
  const addTodo = useTodosStore((state) => state.addTodo);
  const removeTodo = useTodosStore((state) => state.removeTodo);
  const updateTodoStatus = useTodosStore((state) => state.updateTodoStatus);

  return { todos, addTodo, removeTodo, updateTodoStatus };
};

export default useTodos;
