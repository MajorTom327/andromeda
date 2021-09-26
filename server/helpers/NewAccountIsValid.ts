import { Meteor } from 'meteor/meteor';
import { isEmpty, isNil, path, pathOr, propOr } from 'ramda';

type SettingsAccount = {
  users: string[];
  domains: string[];
}

export const NewAccountIsValid = (settings: SettingsAccount) => (account: Meteor.User): boolean => {

  const userEmail: string | undefined = path(['emails', 0, 'address'], account);
  const usersAllowed: string[] = propOr([], 'users', settings);
  const domainAllowed: string[] = propOr([], 'domains', settings);

  if (isNil(userEmail)) {
    return false;
  }

  if (!isEmpty(usersAllowed) && !usersAllowed.includes(userEmail)) {
    return false;
  }

  if (!isEmpty(domainAllowed)) {
    const domain: string = pathOr('', ['emails', 0, 'address'], account).split('@')[1];
    if (!domainAllowed.includes(domain)) {
      return false;
    }
  }

  return true;
}