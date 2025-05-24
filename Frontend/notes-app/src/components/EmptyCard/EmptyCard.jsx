import React from "react";

const EmptyCard = ({ imgSrc, message }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 mt-20">
      <img src={imgSrc} alt="No notes" className="w-80 mb-6" />
      <p className="w-2/3 text-lg font-semibold text-slate-700 text-center leading-8">
        {message}
      </p>
    </div>
  );
};

export default EmptyCard;
