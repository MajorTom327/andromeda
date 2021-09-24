import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import { Accounts } from 'meteor/accounts-base';

import './Account';
import '/imports/api/collections';
import './methods';
import './publish';


Meteor.startup(() => {
  WebApp.addHtmlAttributeHook(() => ({ lang: 'fr' }));

  if (Meteor.users.find({}).count() === 0) {
    const user: { username: string, email: string, password: string } = Meteor.settings.user;
    Accounts.createUser(user)
  }
});
