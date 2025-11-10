import { MdDelete } from "react-icons/md";

const DeleteBtn = ({ onClick }) => {
  return (
    <button
      className="text-lg cursor-pointer hover:text-gray-700"
      onClick={onClick}
    >
      <MdDelete />
    </button>
  );
};
export default DeleteBtn;
