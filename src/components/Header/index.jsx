
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';


//prop handleAddTask for handling the addition of new tasks
export function Header({ handleAddTask}) {
  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  function handleSubmit(event) {
    event.preventDefault();

         // Check if the title is not empty before adding the task
      if (title.trim() !== '') {
        handleAddTask(title);
        setTitle('');
        setErrorMessage('');
      } else {
        //provide feedback to the user about the empty submission
        setErrorMessage('Enter a book title before adding.');
      }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
    setErrorMessage('');
  }

  return (
    <header className={styles.header}>
     <h1>Books to read</h1>
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Add a new book" type="text" onChange={onChangeTitle} value={title} />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>} 
        <button>Add<AiOutlinePlusCircle size={20} /></button>
         
      </form>
    </header>
  )
}