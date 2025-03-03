import { FormEvent, useEffect, useState } from "react";

import "./list.css";

import { Empty } from "./Empty";
import { Task } from "./Taks";
import { NewTask } from "./NewTask";

export interface TaskType {
  id: number;
  text: string;
  isChecked: boolean;
}

export function List() {
  const [Tasks, setTasks] = useState<TaskType[]>([]);

  function handleAddTask(InputText: string) {
    if (InputText === "") return;

    const newTask = {
      id: new Date().getTime(),
      text: InputText,
      isChecked: false,
    };
    setTasks([...Tasks, newTask]);
  }

  function handleToggleTask(id: number) {
    setTasks((newTasks) =>
      newTasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  }

  function handleDeleteTask(id: number) {
    setTasks((newTasks) => newTasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <div className="main">
        <NewTask 
          onAddTask={handleAddTask}
        />
        <div className="list">
          <div className="listHeader">
            <p className="firstLabelListHeader">
              Tarefas criadas <span>{Tasks.length}</span>
            </p>
            <p className="secondLabelListHeader">
              Concluídas
              <span>
                {Tasks.length > 0
                  ? Tasks.reduce((contador, task) => {
                      return task.isChecked ? contador + 1 : contador;
                    }, 0) +
                    " de " +
                    Tasks.length
                  : 0}
              </span>
            </p>
          </div>
          <div className="listBody">
            {Tasks.length > 0 ? (
              Tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  onDeleteTask={handleDeleteTask}
                  onToggleTask={handleToggleTask}
                />
              ))
            ) : (
              <Empty />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
