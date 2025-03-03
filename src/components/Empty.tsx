import styles from "./ListEmpty.module.css";
import Clipboard from "../img/Clipboard.svg";

export function Empty() {
  return (
    <div className={styles.listBodyEmpty}>
      <img src={Clipboard} className={styles.clipboard} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
