import { Meteor } from "meteor/meteor";
import { MethodAccountUpdatePassword } from "./updatePassword";

Meteor.methods({
  'account.setpassword': MethodAccountUpdatePassword
})