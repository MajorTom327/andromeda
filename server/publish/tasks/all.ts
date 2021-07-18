import Tasks from '/imports/api/collections/Tasks'

export const PublishTasksAll = function (this: any) {
  return Tasks.find({ user: this.userId })
}

export default PublishTasksAll;