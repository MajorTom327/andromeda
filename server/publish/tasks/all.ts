import Tasks from '/imports/api/collections/Tasks'

export const PublishTasksAll = function () {
  return Tasks.find({})
}

export default PublishTasksAll;