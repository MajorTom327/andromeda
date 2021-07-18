import Tasks from '/imports/api/collections/Tasks'

export const MethodRemoveTask = function (id: string) {
  Tasks.remove({ _id: id });
}

export default MethodRemoveTask;