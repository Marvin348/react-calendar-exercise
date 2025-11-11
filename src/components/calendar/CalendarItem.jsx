import { format, isSameDay, startOfMonth } from "date-fns";
import CalendarEventBadge from "./CalendarEventBadge";

const CalendarItem = ({ day, onClick, eventsForDay }) => {
  const isFirstDay = isSameDay(day, startOfMonth(day));


  return (
    <div
      className="sm:border border-gray-300 p-2 sm:h-32 sm:rounded-2xl text-center sm:text-start overflow-hidden cursor-pointer hover:border-accent dark:border-gray-400  dark:hover:border-gray-100"
      onClick={onClick}
    >
      <span
        className={`text-gray-500 rounded-full size-6 ${
          isFirstDay ? "font-extrabold text-xl" : ""
        }`}
      >
        {format(day, "d")}
      </span>
      {eventsForDay.length > 0 && (
        <>
          <div className="hidden sm:block">
            <CalendarEventBadge events={eventsForDay} />
          </div>

          <div className="sm:hidden flex items-center justify-center mt-1 space-x-1">
            {eventsForDay.slice(0, 2).map((item) => (
              <span
                key={item.id}
                style={{ backgroundColor: item.color }}
                className="size-1.5 rounded-full"
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default CalendarItem;
