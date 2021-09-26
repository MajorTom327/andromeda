import Tasks from '/imports/api/collections/Tasks'

export const MethodRemoveTask = function (this: any, id: string) {
  Tasks.remove({ _id: id, user: this.userId });
}

export default MethodRemoveTask;