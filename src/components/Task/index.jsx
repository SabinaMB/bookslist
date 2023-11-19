import { useState } from 'react';
import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { BsPencil, BsTrash } from 'react-icons/bs'; 

export function Task({ task, onDelete, onComplete }) {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    console.log('Edited Title:', editedTitle);
    setEditing(false);
  };

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      {editing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <p className={task.isCompleted ? styles.textCompleted : ""}>
          {task.title}
        </p>
      )}

      {editing ? (
        <button className={styles.editButton} onClick={handleSave}>
          Save
        </button>
      ) : (
        <button className={styles.editButton} onClick={handleEdit}>
          <BsPencil size={20} />
        </button>
      )}

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <BsTrash size={20} />
      </button>
    </div>
  );
}
