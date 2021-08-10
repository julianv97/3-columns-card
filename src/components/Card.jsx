import React from "react";


const Card = ({ title, Icon, classes, paragraph }) => {
  return (
    <div
      className={`h-2xl ${classes[0]} p-8 text-white flex flex-col overflow-hidden lg:h-96`}
    >
      <Icon />
      <h1 className="font-bold text-4xl font-bigShoulder mt-10">{title}</h1>
      <p className="text-base my-6">{paragraph}</p>
      <button
        className={`capitalize w-36 ${classes[1]} bg-white rounded-3xl px-6 py-2`}
      >
        learn more
      </button>
    </div>
  );
};

export default Card;
