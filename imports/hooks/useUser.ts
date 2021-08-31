import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

export const useUser = () => useTracker(() => {
  const userId = Meteor.userId()

  return userId;
})

export default useUser;