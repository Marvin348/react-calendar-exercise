import { format } from "date-fns";
import DeleteBtn from "./DeleteBtn";
import useEventStore from "../../store/useEventStore";

const EventItem = ({ event }) => {
  const deleteEvent = useEventStore((state) => state.deleteEvent);

  const { id, title, location, description, day, color } = event;

  // border: `2px solid ${color}`
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="flex rounded-md p-2"
    >
      <div className="flex-1 min-w-0">
        <span className="text-gray-900 text-sm underline">
          {day ? format(day, "dd.MM.yyyy") : ""}
        </span>
        <h4 className="font-semibold">{title}</h4>
        <p className="font-medium">{location}</p>
        <p>{description}</p>
      </div>
      <div>
        <DeleteBtn onClick={() => deleteEvent(id)} />
      </div>
    </div>
  );
};
export default EventItem;
