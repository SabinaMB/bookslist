//Component responsible for rendering the section with: total number of tasks, completed tasks, the list of individual tasks. 

import { useState, useEffect } from 'react';
import { Task } from '../Task';
import styles from './tasks.module.css';


export function Tasks({ tasks, onDelete, onComplete }) {
  const [deletedTasks, setDeletedTasks] = useState(() => {
    const savedDeletedTasks = localStorage.getItem('deletedTasks');
    return savedDeletedTasks ? parseInt(savedDeletedTasks, 10) : 0;
  });
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;
  
  useEffect(() => {
    localStorage.setItem('deletedTasks', deletedTasks.toString());
  }, [deletedTasks]);

  const handleResetCount = () => {
    setDeletedTasks(0);
  };
  
 return (
    <section className={styles.tasks}>
      <header className={styles.header}>
       
      <div>
          <p>Total no of books</p>
          <span>{tasksQuantity + deletedTasks}</span>
        </div>
       
        <div>
          <p>Books to read</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p>Finished</p>
          <span>{deletedTasks} of {tasksQuantity + deletedTasks}</span>
          <button className={styles.resetButton} onClick={handleResetCount}>Reset Count</button>
        </div>

     </header>

     <div className={styles.list}>
  {tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      onDelete={(taskId) => {
        onDelete(taskId);
        setDeletedTasks((prev) => prev + 1);
      }}
      onComplete={onComplete}
    />
  ))}
</div>
    </section>
  )
}