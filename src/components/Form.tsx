import { PlusCircle } from "phosphor-react";
import { Dispatch, FormEvent, SetStateAction } from "react";
import styles from "./Form.module.css";

interface FormProps {
  onCreate: () => void;
  setText: Dispatch<SetStateAction<string>>;
  text: string;
}

export function Form({ onCreate, setText, text }: FormProps) {
  function onChange(content: string) {
    setText(content);
  }

  function handleSubmit() {
    event?.preventDefault();
    onCreate();
  }
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">
        Criar <PlusCircle size={18} />
      </button>
    </form>
  );
}
