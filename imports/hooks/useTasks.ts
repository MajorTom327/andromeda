import ITask from '../api/types/Task';
import { Meteor } from 'meteor/meteor';

const useTasks = () => {
  const handleAdd = (data: Partial<ITask>, cb = () => {}) => Meteor.call('tasks.create', data, cb);
  const handleRemove = (id: string) => Meteor.call('tasks.remove', id);

  return {
    handleRemoveTask: handleRemove,
    handleAddTask: handleAdd
  }
}

export default useTasks;