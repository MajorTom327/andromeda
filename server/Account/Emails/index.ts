import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { pathOr } from 'ramda';

import './resetPassword';
import './verifyEmail';
import './enrollAccount';

const sitename = pathOr('Andromeda', ['sitename'], Meteor.settings);
const from = pathOr("andromeda <noreply@example.com>", ["account", "from"], Meteor.settings)

Accounts.emailTemplates.siteName = sitename;
Accounts.emailTemplates.from = from;
