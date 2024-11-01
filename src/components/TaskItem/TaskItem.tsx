import { Task } from '../../types';
import { updateTaskStatus, deleteTask } from '../../api/api';

interface TaskItemProps {
  task: Task;
  onReload: () => void;
}

function TaskItem({ task, onReload }: TaskItemProps) {
  const handleStatusChange = async () => {
    await updateTaskStatus(task._id!);
    onReload();
  };

  const handleDelete = async () => {
    await deleteTask(task._id!);
    onReload();
  };

  return (
    <div className={`task-item ${task.status.toLowerCase()}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleStatusChange} disabled={task.status === 'Completed'}>Progress</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskItem;

