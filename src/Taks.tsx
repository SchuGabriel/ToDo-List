import "./task.css";
import { TaskType } from "./List";
import { GoTrash } from "react-icons/go";

export function Task({ id, text, isChecked }: TaskType) {
  return (
    <div className="task">
      <div className="taskIn">
        <div>
          <input className="checkboxTask" type="checkbox" checked={isChecked} />
        </div>
        <p className="textTask" key={id}>
          {text}
        </p>
        <div>
          <GoTrash />
        </div>
      </div>
    </div>
  );
}