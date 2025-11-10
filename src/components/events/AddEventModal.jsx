import EventForm from "./EventForm";
import useScrollLock from "../../hooks/useScrollLock";
import { FaXmark } from "react-icons/fa6";
const AddEventModal = ({ day, onClose }) => {
  useScrollLock(true);

  return (
    <div className="overlay px-8" onClick={onClose}>
      <div
        className="bg-white dark:bg-black w-80 md:w-140 md:h-auto border border-transparent dark:border-white z-100 p-8 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-medium text-lg">Event erstellen</h2>
          <button className="cursor-pointer" onClick={onClose}>
            <FaXmark className="size-5" />
          </button>
        </div>
        <EventForm day={day} onClose={onClose} />
      </div>
    </div>
  );
};
export default AddEventModal;
