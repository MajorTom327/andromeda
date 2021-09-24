import { Accounts } from 'meteor/accounts-base'

export const MethodAskResetPassword = ({ email }: { email: string }) => {
  const user = Accounts.findUserByEmail(email);

  if (user) {
    Accounts.sendResetPasswordEmail(user._id, email);
    return true;
  }
}