import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";

Accounts.urls.resetPassword = (token: string) => Meteor.absoluteUrl(`reset-password/${token}`);
Accounts.urls.verifyEmail = (token: string) => Meteor.absoluteUrl(`verify/${token}`);
Accounts.urls.enrollAccount = (token: string) => Meteor.absoluteUrl(`enroll/${token}`);

Meteor.users.deny({ update: () => true });