import "./task.css";
import { TaskType } from "./List";

import trash from "./img/trash.svg";

interface TaskProps {
  task: TaskType;
  onDeleteTask: (id: number) => void;
  onToggleTask: (id: number) => void;
}

export function Task({ task, onDeleteTask, onToggleTask }: TaskProps) {
  return (
    <div className="task">
      <div className="taskIn">
        <div className="divCheckboxTask">
          <input
            className="checkboxTask"
            type="checkbox"
            checked={task.isChecked}
            onClick={() => onToggleTask(task.id)}
          />
        </div>
        <div className="divTextTask">
          <p className="textTask" key={task.id}>
            {task.text}
          </p>
        </div>
        <button
          type="button"
          className="trash"
          onClick={() => onDeleteTask(task.id)}
        >
          <img src={trash} alt="Deletar tarefa" />
        </button>
      </div>
    </div>
  );
}
