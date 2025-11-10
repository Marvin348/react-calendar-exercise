import Calendar from "./calendar/Calendar";
import useEventStore from "../store/useEventStore";
import EventLayout from "./events/EventLayout";
const AppLayout = () => {
  const events = useEventStore((state) => state.events);

  return (
    <div className="container">
      <div
        className={`flex flex-col justify-between  lg:flex-row ${
          events.length < 1 ? "flex" : "flex-col gap-12"
        }`}
      >
        <Calendar />
        {events.length > 0 && <EventLayout />}
      </div>
    </div>
  );
};
export default AppLayout;
