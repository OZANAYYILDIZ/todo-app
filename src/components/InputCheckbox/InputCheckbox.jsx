import "./InputCheckbox.css";

const InputCheckbox = ({ onCheckChange }) => {
  return (
    <>
      <input onChange={onCheckChange} type="checkbox" name="todoCheck" />
    </>
  );
};

export default InputCheckbox;
