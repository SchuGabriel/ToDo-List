import { FormEvent, useEffect, useState } from "react";

import "./list.css";

import logo from "./img/rocket.svg";

import { MdAddCircleOutline } from "react-icons/md";
import { Empty } from "./Empty";
import { Task } from "./Taks";

export interface TaskType {
  id: number;
  text: string;
  isChecked: boolean;
}

export function List() {
  const [Tasks, setTasks] = useState<TaskType[]>([]);
  const [Input, setInput] = useState<string>("");

  function handleAddTask() {
    const newTask = {
      id: new Date().getTime(),
      text: Input,
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

  useEffect(() => {
    setInput("");
  }, [Tasks]);

  return (
    <>
      <div>
        <div className="header">
          <div className="brand">
            <img src={logo} alt="brand" />
            <p className="brandName">
              to<span>do</span>
            </p>
          </div>
        </div>
        <div className="main">
          <div className="FormNewTask">
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              className="inputNewTask"
              name="newtask"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddTask();
              }}
              value={Input}
              required
            />
            <button
              type="button"
              onClick={handleAddTask}
              className="btnSubmitNewTask"
            >
              <p>Criar</p>
              <MdAddCircleOutline />
            </button>
          </div>
          <div className="list">
            <div className="listHeader">
              <p className="firstLabelListHeader">
                Tarefas criadas <span>{Tasks.length}</span>
              </p>
              <p className="secondLabelListHeader">
                Concluídas
                <span>
                  {Tasks.reduce((contador, task) => {
                    return task.isChecked ? contador + 1 : contador;
                  }, 0)}
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
      </div>
    </>
  );
}
