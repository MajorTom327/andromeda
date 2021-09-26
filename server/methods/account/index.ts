import { Meteor } from "meteor/meteor";
import { MethodAskResetPassword } from './askResetPassword';
import MethodAskVerifyEmail from './askVerifyEmail';
import { MethodAccountUpdatePassword } from "./updatePassword";

Meteor.methods({
  'account.setpassword': MethodAccountUpdatePassword,
  'account.askResetPassword': MethodAskResetPassword,
  'account.askVerifyEmail': MethodAskVerifyEmail,
})