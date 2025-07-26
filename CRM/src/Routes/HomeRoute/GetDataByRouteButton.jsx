

import { useState } from "react";
import GetDataByRoute from "./GetDataByRoute";

let GetDataByRouteButton = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="relative">
      <button
        className="lg:hidden w-12 h-12 border-2 border-black p-1 rounded-full bg-blue-100 hover:bg-blue-500 text-black hover:text-white transition-all duration-300"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        task
      </button>

      {showCalendar && (
        <div className="absolute z-50 top-16 right-0 w-[320px] bg-white shadow-2xl border rounded-2xl p-4 animate-fade-in">
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setShowCalendar(false)}
              className="text-red-500 font-bold text-lg"
            >
              ✖
            </button>
          </div>
          <GetDataByRoute />
        </div>
      )}
    </div>
  );
};

export default GetDataByRouteButton;
