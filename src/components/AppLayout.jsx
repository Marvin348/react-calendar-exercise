import Calendar from "./calendar/Calendar";
import useEventStore from "../store/useEventStore";
import EventLayout from "./events/EventLayout";
import CalendarControls from "./calendar/CalendarControls";
const AppLayout = () => {
  const events = useEventStore((state) => state.events);

  return (
    <div className="container">
      <main
        className={`flex justify-between lg:flex-row ${
          events.length < 1 ? "flex" : "flex-col gap-12"
        }`}
      >
        <Calendar />
        {events.length > 0 && <EventLayout />}
      </main>
    </div>
  );
};
export default AppLayout;
