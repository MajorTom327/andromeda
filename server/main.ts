import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import { Accounts } from 'meteor/accounts-base';

import '/imports/api/collections';
import './methods';
import './publish';


Meteor.startup(() => {
  WebApp.addHtmlAttributeHook(() => ({ lang: 'fr' }));

  if (Meteor.users.find({}).count() === 0) {
    Accounts.createUser({
      username: 'majortom327',
      email: 'me@valentin-thomas.com',
      password: 'password'
    })
  }
});
