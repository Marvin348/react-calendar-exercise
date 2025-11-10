import { format, isSameDay, startOfMonth } from "date-fns";
import CalendarEventBadge from "./CalendarEventBadge";

const CalendarItem = ({ day, onClick, eventsForDay }) => {
  const isFirstDay = isSameDay(day, startOfMonth(day));

  return (
    <div
      className="sm:border border-gray-300 p-2 sm:h-32 sm:rounded-2xl text-center sm:text-start overflow-hidden cursor-pointer hover:border-accent"
      onClick={onClick}
    >
      <span
        className={`flex items-center justify-center text-gray-500 rounded-full size-6 ${
          isFirstDay ? "font-extrabold text-xl" : ""
        }`}
      >
        {format(day, "d")}
      </span>
      {eventsForDay.length > 0 && (
        <div className="hidden sm:block">
          <CalendarEventBadge events={eventsForDay} />
        </div>
      )}
    </div>
  );
};
export default CalendarItem;
