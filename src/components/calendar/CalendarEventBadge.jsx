const CalendarEventBadge = ({ events }) => {
  return (
    <div className="grid grid-rows-4 gap-1 text-sm dark:text-black">
      {events.slice(0, 4).map((item) => (
        <p
          key={item.id}
          style={{ backgroundColor: item.color }}
          className="px-1 rounded-md truncate"
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};
export default CalendarEventBadge;
