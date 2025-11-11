import { FiFilter } from "react-icons/fi";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaArrowsRotate } from "react-icons/fa6";
import useToggle from "../../hooks/useToggle";
import { useEffect } from "react";
import useEventStore from "../../store/useEventStore";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { format } from "date-fns";

const CalendarControls = ({
  setSelectedColor,
  goToNextMonth,
  goToPrevMonth,
  currentDate,
}) => {
  const events = useEventStore((state) => state.events);
  const toggleTheme = useEventStore((state) => state.toggleTheme);
  const isDark = useEventStore((state) => state.isDark);

  const colors = [...new Set(events.map(({ color }) => color))];

  const [isFilterOpen, toggleFilter] = useToggle();

  const COLOR_NAMES = {
    "#F87171": "Rot",
    "#4ADE80": "Grün",
    "#60A5FA": "Blau",
    "#A78BFA": "Lila",
    "#FB923C": "Orange",
  };

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <button className="btn" onClick={goToPrevMonth}>
          <FaLongArrowAltLeft />
        </button>
        <p className="w-32 text-center font-medium">
          {format(currentDate, "MMMM yyyy")}
        </p>
        <button className="btn" onClick={goToNextMonth}>
          <FaLongArrowAltRight />
        </button>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="btn" onClick={toggleFilter}>
          <FiFilter />
        </button>
        {isFilterOpen && (
          <ul className="absolute top-12 right-12 border border-transparent bg-white dark:bg-black dark:border-white  shadow-2xl z-10 rounded-lg p-2 flex flex-col items-start gap-1 w-28">
            {colors.map((color) => (
              <li
                key={color}
                className="flex items-center gap-1 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300"
                onClick={() => setSelectedColor(color)}
              >
                <div
                  style={{ backgroundColor: `${color}` }}
                  className="size-4 rounded-full "
                ></div>
                <div>{COLOR_NAMES[color]}</div>
              </li>
            ))}
            <li
              className="flex items-center gap-1 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setSelectedColor(null)}
            >
              <FaArrowsRotate /> Kein Filter
            </li>
          </ul>
        )}
        <button className="btn" onClick={() => toggleTheme()}>
          {isDark ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </div>
  );
};
export default CalendarControls;
