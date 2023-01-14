import { TaskProps } from "../App";
import clipboardImg from "../assets/clipboard.svg";
import styles from "./List.module.css";
import { Task } from "./Task";

interface ListProps {
  tasks: TaskProps[];
  onDeleteTask: (id: string) => void;
}

export function List({ tasks, onDeleteTask }: ListProps) {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.taskCreate}>
          Tarefas criadas <span>{tasks.length}</span>
        </div>
        <div className={styles.taskCompleted}>
          Concluídas{" "}
          <span>{tasks.length > 0 ? `0 de ${tasks.length}` : 0}</span>
        </div>
      </header>
      <div className={styles.listContent}>
        {tasks.length > 0 ? (
          tasks.map(({ id, ...rest }) => (
            <Task key={id} onDeleteTask={onDeleteTask} id={id} {...rest} />
          ))
        ) : (
          <div className={styles.listWithoutItem}>
            <img src={clipboardImg} alt="Pasta de tarefas" />
            <div className={styles.infoWithoutItem}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
