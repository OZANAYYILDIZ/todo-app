import { FaRegTrashAlt } from "react-icons/fa";

const DeleteTodo = () => {
  const deleteTodo = () => {
    console.log("delete button clicked");
  };

  return (
    <button onClick={deleteTodo}>
      <FaRegTrashAlt />
    </button>
  );
};

export default DeleteTodo;
