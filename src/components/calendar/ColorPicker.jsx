const ColorPicker = ({ color, setColor }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className={`color-picker-btn bg-red-400 ${
          color === "#F87171" ? "ring-2" : ""
        }`}
        type="button"
        onClick={() => setColor("#F87171")}
      ></button>
      <button
        className={`color-picker-btn bg-green-400 ${
          color === "#4ADE80" ? "ring-2" : ""
        }`}
        type="button"
        onClick={() => setColor("#4ADE80")}
      ></button>
      <button
        className={`color-picker-btn bg-blue-400 ${
          color === "#60A5FA" ? "ring-2" : ""
        }`}
        type="button"
        onClick={() => setColor("#60A5FA")}
      ></button>
      <button
        className={`color-picker-btn bg-violet-400 ${
          color === "#A78BFA" ? "ring-2" : ""
        }`}
        type="button"
        onClick={() => setColor("#A78BFA")}
      ></button>
      <button
        className={`color-picker-btn bg-orange-400 ${
          color === "#FB923C" ? "ring-2" : ""
        }`}
        type="button"
        onClick={() => setColor("#FB923C")}
      ></button>
    </div>
  );
};
export default ColorPicker;
