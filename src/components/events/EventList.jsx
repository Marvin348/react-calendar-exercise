import useEventStore from "../../store/useEventStore";
import EventItem from "./EventItem";

const EventList = () => {
  const events = useEventStore((state) => state.events);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
      {events.map((item) => (
        <EventItem key={item.id} event={item} />
      ))}
    </div>
  );
};
export default EventList;
