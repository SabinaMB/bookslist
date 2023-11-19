
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';


//prop handleAddTask for handling the addition of new tasks
export function Header({ handleAddTask}) {
  const [title, setTitle] = useState('');


  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
     <h1>Books to read</h1>
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Add a new book" type="text" onChange={onChangeTitle} value={title} />
        <button>Add<AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  )
}