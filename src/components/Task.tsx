import { useState } from "react";
import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
  onDeleteTask: (id: string) => void;
}

export function Task({ isCompleted, text, onDeleteTask, id }: Task) {
  const [isChecked, setIsChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(id);
  }
  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={isCompleted && isChecked}
        onChange={() => setIsChecked((prevState) => !prevState)}
      />
      <div className={isChecked ? styles.infoTextHasChecked : styles.infoText}>
        {text}
      </div>
      <button onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash size={18} />
      </button>
    </div>
  );
}
