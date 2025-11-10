import { useState } from "react";

const useToggle = () => {
  const [value, setValue] = useState(false);

  const toggle = () => setValue((prev) => !prev);
  const isTrue = () => setValue(true);
  const isFalse = () => setValue(false);

  return [value, toggle, isTrue, isFalse];
};
export default useToggle;
