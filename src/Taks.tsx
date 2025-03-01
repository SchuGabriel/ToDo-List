import styles from "./task.module.css";
import stylesChecked from "./taskChecked.module.css";
import { TaskType } from "./List";

import trash from "./img/trash.svg";

interface TaskProps {
  task: TaskType;
  onDeleteTask: (id: number) => void;
  onToggleTask: (id: number) => void;
}

export function Task({ task, onDeleteTask, onToggleTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <div className={styles.taskIn}>
        <div className={styles.divCheckboxTask}>
          <input
            className={styles.checkboxTask}
            type="checkbox"
            checked={task.isChecked}
            onClick={() => onToggleTask(task.id)}
          />
        </div>
        <div className={styles.divTextTask}>
          <p 
            className={task.isChecked ? stylesChecked.textTask : styles.textTask}
            key={task.id}>
            {task.text}
          </p>
        </div>
        <button
          type="button"
          className={styles.trash}
          onClick={() => onDeleteTask(task.id)}
        >
          <img src={trash} alt="Deletar tarefa" />
        </button>
      </div>
    </div>
  );
}
