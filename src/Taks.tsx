import "./task.css";
import { TaskType } from "./List";

import trash from "./img/trash.svg";

export function Task({ id, text, isChecked }: TaskType) {
  return (
    <div className="task">
      <div className="taskIn">
        <div className="divCheckboxTask">
          <input className="checkboxTask" type="checkbox" checked={isChecked} />
        </div>
        <div className="divTextTask">
          <p className="textTask" key={id}>
            {text}
          </p>
        </div>
        <button type="button" className="trash">
          <img src={trash} />
        </button>
        </div>
    </div>
  );
}
