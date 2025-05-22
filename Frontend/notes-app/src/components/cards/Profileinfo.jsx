import React from "react";
import { getInitials } from "../../utils/helper";

function Profileinfo({ onLogout }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 bg-slate-100">
        {getInitials("Jhon Williams")}
      </div>
      <div>
        <p className="text-sm font-medium">Jhon William</p>
        <button className="" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profileinfo;
