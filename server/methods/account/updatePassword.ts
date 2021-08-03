import { Accounts } from "meteor/accounts-base"

type Params = {
  password: string
}

export const MethodAccountUpdatePassword = function (this: any, { password }: Params) {
  Accounts.setPassword(this.userId, password);
}