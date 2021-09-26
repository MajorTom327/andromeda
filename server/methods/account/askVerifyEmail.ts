import { Accounts } from 'meteor/accounts-base'

export const MethodAskVerifyEmail = function (this: any, email: string) {
  Accounts.sendVerificationEmail(this.userId, email);

}

export default MethodAskVerifyEmail;