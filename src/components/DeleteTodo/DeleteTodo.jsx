import { FaRegTrashAlt } from "react-icons/fa";

const DeleteTodo = ({ onDelete }) => {
  return (
    <button onClick={onDelete}>
      <FaRegTrashAlt />
    </button>
  );
};

export default DeleteTodo;
