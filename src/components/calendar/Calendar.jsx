import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isSameDay,
} from "date-fns";
import { useState } from "react";
import CalendarItem from "./CalendarItem";
import AddEventModal from "../events/AddEventModal";
import useEventStore from "../../store/useEventStore";
import CalendarControls from "./CalendarControls";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const handleOpen = (day) => setSelectedDay(day);
  const onCloseModal = () => setSelectedDay(null);

  const events = useEventStore((state) => state.events);
  const toggleTheme = useEventStore((state) => state.toggleTheme);
  const isDark = useEventStore((state) => state.isDark);

  console.log(events);

  const [selectedColor, setSelectedColor] = useState(null);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const start = startOfWeek(monthStart);
  const end = endOfWeek(monthEnd);
  const days = eachDayOfInterval({ start, end });

  const goToNextMonth = () => setCurrentDate((prev) => addMonths(prev, 1));
  const goToPrevMonth = () => setCurrentDate((prev) => subMonths(prev, 1));

  const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

  return (
    <div
      className={`w-full dark:text-white ${events.length > 0 ? "flex-1" : ""}`}
    >
      <div className="relative mb-6 dark:text-white">
        <CalendarControls
          setSelectedColor={setSelectedColor}
          goToNextMonth={goToNextMonth}
          goToPrevMonth={goToPrevMonth}
          currentDate={currentDate}
        />
      </div>
      <div className="grid grid-cols-7 mb-2">
        {WEEKDAYS.map((day) => (
          <div className="text-center" key={day}>
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {days.map((day) => {
          let eventsForDay = events.filter((item) =>
            isSameDay(new Date(item.day), day)
          );

          if (selectedColor != null) {
            eventsForDay = eventsForDay.filter(
              ({ color }) => color === selectedColor
            );
          }

          return (
            <CalendarItem
              key={day}
              day={day}
              onClick={() => handleOpen(day)}
              eventsForDay={eventsForDay}
            />
          );
        })}
      </div>
      {selectedDay && (
        <AddEventModal day={selectedDay} onClose={onCloseModal} />
      )}
    </div>
  );
};
export default Calendar;
