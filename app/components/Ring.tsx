import React from 'react';

export default function Ring() {
  return (
    <div>
      <div className=" w-[400px]   absolute left-20   ">
        <div className="w-[350px] h-[500px] absolute left-36  top-8  border-black rounded-[50%] -rotate-45 border-[1px]"></div>
        <div className="w-[350px] h-[500px] absolute left-28   top-16 border-black rounded-[50%] -rotate-45 border-[1px]"></div>
        <div className="w-[350px] h-[500px] absolute left-20   top-24 border-black rounded-[50%] -rotate-45 border-[1px]"></div>
      </div>
    </div>
  );
}
