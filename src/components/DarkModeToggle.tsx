import { FC } from "react";
import useDarkMode from "../hooks/useDarkMode";
import classNames from "classnames";

const DarkModeToggle: FC = () => {
  const { darkMode, toggle } = useDarkMode();

  return (
    <button
      onClick={toggle}
      className={classNames(
        "fixed top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer",
        darkMode ? "bg-gray-700" : "bg-gray-200"
      )}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/moon-symbol.png"
          alt="Moon"
          className="w-5 h-5"
        />
      ) : (
        <img
          src="https://img.icons8.com/ios-filled/50/FFD700/sun.png"
          alt="Sun"
          className="w-5 h-5"
        />
      )}
    </button>
  );
};

export default DarkModeToggle;
