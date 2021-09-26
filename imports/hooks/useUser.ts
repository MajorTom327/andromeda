import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

export const useUser = () => useTracker(() => {
  const user = Meteor.user();

  return user;
})

export default useUser;