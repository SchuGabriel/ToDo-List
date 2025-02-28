import { FormEvent, useEffect, useState } from "react";

import "./list.css";
import "./ListEmpty.css";

import logo from "./img/rocket.svg";
import Clipboard from "./img/Clipboard.svg";

import { MdAddCircleOutline } from "react-icons/md";

export interface TaskType {
  id: number;
  text: string;
  isChecked: boolean;
}

export function List() {
  const [Tasks, setTasks] = useState<TaskType[]>([]);
  const [Input, setInput] = useState<string>("");

  function handleAddTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTask = {
      id: new Date().getTime(),
      text: Input,
      isChecked: false,
    };
    setTasks([...Tasks, newTask]);
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
          <form onSubmit={handleAddTask} className="FormNewTask">
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              className="inputNewTask"
              name="newtask"
              onChange={(e) => setInput(e.target.value)}
              value={Input}
              required
            />
            <button type="submit" className="btnSubmitNewTask">
              <p>Criar</p>
              <MdAddCircleOutline />
            </button>
          </form>
          <div className="list">
            <div className="listHeader">
              <p className="firstLabelListHeader">
                Tarefas criadas <span>0</span>
              </p>
              <p className="secondLabelListHeader">
                Concluídas <span>0</span>
              </p>
            </div>
            <div className="listBody">
              {Tasks.length > 0 ? (
                Tasks.map((task) => <h4 key={task.id}>{task.text}</h4>)
              ) : (
                <>
                  <img src={Clipboard} className="clipboard" />
                  <p>Você ainda não tem tarefas cadastradas</p>
                  <span>Crie tarefas e organize seus itens a fazer</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
