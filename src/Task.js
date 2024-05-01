import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const tarih = new Date(taskObj.deadline); //tarih objesi olusturduk. Bunu formatDistanceToNow'a gonderecegiz.
  const kalanGun = formatDistanceToNow(tarih, {
    addSuffix: true,
    locale: tr,
  });

  const accentClass =
    differenceInDays(tarih, new Date()) < 3 ? "bg-urgent" : "bg-normal";

  // console.log(taskObj.deadline, differenceInDays(tarih, new Date()));

  //1 rem = 16px

  return (
    <div className="task p-6 bg-white rounded-md leading-normal mt-4 shadow-[0_4px_5px_0_rgb(0 0 0 / 10%)] ">
      <h3 className="text-lg text-[#c8781a] ">{taskObj.title}</h3>
      <div className="deadline text-xs pt-1">
        son teslim:{" "}
        <span className={`${accentClass} py-1 px-2 rounded-sm inline-block`}>
          {kalanGun}
        </span>
      </div>
      <p className="pt-2 pb-3 px-0 text-sm text-[#444] ">
        {taskObj.description}
      </p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="pill inline-block py-1.5 px-3 text-base border-solid border-2 border-[#ccc] rounded-full mr-1 mb-1.5 "
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block py-2 px-3 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgb(0 0 0 / 5%)] rounded-sm border-0 cursor-pointer "
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
