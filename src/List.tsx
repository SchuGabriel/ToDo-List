import "./list.css";
import "./ListEmpty.css";

import logo from "./img/rocket.svg";
import Clipboard from "./img/Clipboard.svg";

import { MdAddCircleOutline } from "react-icons/md";

export function List() {
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
          <form action="" className="FormNewTask">
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              className="inputNewTask"
              name="newTask"
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
              <img src={Clipboard} className="clipboard"/>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
