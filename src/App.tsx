import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";

import styles from "./App.module.css";
import "./global.css";

export interface TaskProps {
  id: string;
  text: string;
  isCompleted: boolean;
}

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function handleCreateNewTask() {
    const newTask = {
      id: uuidv4(),
      text,
      isCompleted: true,
    };
    setTasks((prevState) => [...prevState, newTask]);
    setText("");
  }

  function handleDeleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Form setText={setText} text={text} onCreate={handleCreateNewTask} />
        <List tasks={tasks} onDeleteTask={handleDeleteTask} />
      </main>
    </div>
  );
}

export default App;
