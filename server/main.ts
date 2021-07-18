import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '/imports/api/collections';
import './methods';
import './publish';


Meteor.startup(() => {
  WebApp.addHtmlAttributeHook(() => ({ lang: 'fr' }));
});
