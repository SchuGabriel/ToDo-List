import { useState } from "react";
import styles from "./NewTask.module.css";

import { MdAddCircleOutline } from "react-icons/md";

interface NewTaskProps {
  onAddTask: (input: string) => void;
}

export function NewTask({ onAddTask }: NewTaskProps) {
  const [Input, setInput] = useState<string>("");

  function onHandleInput(){
    onAddTask(Input);
    setInput('');
  }

  return (
    <div className={styles.FormNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.inputNewTask}
        name="newtask"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onHandleInput();
        }}
        value={Input}
        required
      />
      <button
        type="button"
        onClick={onHandleInput}
        className={styles.btnSubmitNewTask}
      >
        <p>Criar</p>
        <MdAddCircleOutline />
      </button>
    </div>
  );
}
