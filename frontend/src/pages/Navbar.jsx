import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-20 flex justify-between items-center px-6
                    bg-black backdrop-blur-md border-b border-white/20"
    >
      <div className="flex-1"></div>

      <div className="flex-1 flex justify-center text-white font-semibold text-xl">
        Your Gallery
      </div>

      <div className="flex-1 flex justify-end">
        <button
          className="text-white border border-white/40 px-4 py-2 rounded-lg
                           hover:bg-white/20 transition duration-300"
          onClick={() => navigate("/create-post")}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Navbar;
