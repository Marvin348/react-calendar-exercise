import { BsCalendar2Date } from "react-icons/bs";
import { format } from "date-fns";
import { useState } from "react";
import useEventStore from "../../store/useEventStore";
import ColorPicker from "../calendar/ColorPicker";

const EventForm = ({ day, onClose }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  const [titleError, setTitleError] = useState("");
  const [colorError, setColorError] = useState("");

  const addEvent = useEventStore((state) => state.addEvent);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setTitleError("Bitte einen Titel eingeben");
      return;
    }

    if (!color) {
      setColorError("Bitte eine Farbe auswählen");
      return;
    }

    addEvent({ title, location, description, day, color });
    setTitleError("");
    setColorError("");
    onClose();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col justify-between gap-6 md:flex-row mb-6">
        <div className="group">
          <label className="label">Titel</label>
          <input
            className="input text-black group-focus-within:border-b-accent"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {titleError && <p className="error-message">{titleError}</p>}
        </div>
        <div className="group">
          <label className="label">Standort</label>
          <input
            className="input text-black group-focus-within:border-b-accent"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
      <p className="flex items-center gap-2 text-gray-600 mb-6 text-xs">
        <BsCalendar2Date /> {day ? format(day, "dd.MM.yyyy") : ""}
      </p>
      <div className="mb-6 group">
        <label className="label">Beschreibung</label>
        <textarea
          className="border w-full text-black border-gray-300 rounded-md p-1 outline-none resize-none dark:text-white group-focus-within:border-accent"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-6">
        <ColorPicker color={color} setColor={setColor} />
        {colorError && <p className="error-message">{colorError}</p>}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="font-medium cursor-pointer hover:opacity-70  dark:hover:text-gray-300"
          type="button"
          onClick={onClose}
        >
          Abbrechen
        </button>
        <button
          className="text-accent font-medium cursor-pointer hover:opacity-85"
          type="submit"
        >
          Speichern
        </button>
      </div>
    </form>
  );
};
export default EventForm;
