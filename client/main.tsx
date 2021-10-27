import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App'
import '/imports/startup/client/serviceWorker'
import luxon from 'luxon';

Meteor.startup(() => {
  luxon.Settings.defaultLocale = 'fr';
  render(<App />, document.getElementById('react-target'));
  //document.querySelector('html')?.setAttribute('data-theme', 'dark');
});
