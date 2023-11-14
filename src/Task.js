import React from "react";
import { differenceInDays, formatDistance, formatDistanceToNow } from "date-fns";
import {ta, tr} from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {

  const tarih = new Date(taskObj.deadline); //tarih objesi olusturduk. Bunu formatDistanceToNow'a gonderecegiz.
  const kalanGun = formatDistanceToNow(tarih, {
    addSuffix: true,
    locale: tr
  });

  const accentClass = differenceInDays(tarih, new Date()) <= 3 ? "normal" : "urgent";

  console.log(taskObj.deadline, differenceInDays(tarih, new Date()));

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: <span className={accentClass} >{kalanGun}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
