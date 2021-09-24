import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { pathOr } from 'ramda';

const sitename = pathOr('Andromeda', ['sitename'], Meteor.settings);

Accounts.emailTemplates.enrollAccount = {
  subject(user) {
    return `Bienvenu sur ${sitename}!`;
  },
  text(user, url) {
    return `Bienvenue sur ${sitename}!\n\n` +
      `Pour activer votre compte, veuillez cliquer sur le lien suivant:\n\n` +
      `${url}\n\n` +
      `Cordialement,\n` +
      `L'équipe ${sitename}`;
  },
  html(user, url) {
    return `<p>Bienvenue sur ${sitename}!</p>\n\n` +
      `<p>Pour activer votre compte, veuillez cliquer sur le lien suivant:</p>\n\n` +
      `<p><a href="${url}">${url}</a></p>\n\n` +
      `<p>Cordialement,</p>\n` +
      `<p>L'équipe ${sitename}</p>`;
  }
}

