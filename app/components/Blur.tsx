import React from 'react';

export default function Blur() {
  return (
    <div>
      <div className="w-[350px] h-[230px]  float-right mr-28 blur-xl  ">
        <div className="w-[300px] mix-blend-multiply h-[170px] absolute right-0    rounded-[50%]  bg-[--red]"></div>
        <div className="w-[300px] mix-blend-multiply h-[173px] absolute left-0 bottom-5    rounded-[60%]  bg-[--yellow]"></div>
      </div>
    </div>
  );
}
