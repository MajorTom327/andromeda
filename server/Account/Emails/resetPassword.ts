import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { pathOr } from 'ramda';

const sitename = pathOr('Andromeda', ['sitename'], Meteor.settings);

Accounts.emailTemplates.resetPassword = {
  subject(user) {
    return `[${sitename}] Réinitialisation de votre mot de passe`;
  },
  text(user, url) {
    return `Bonjour,

Vous avez demandé la réinitialisation de votre mot de passe.

Pour réinitialiser votre mot de passe, cliquez sur le lien suivant:

${url}

Si vous n'avez pas demandé la réinitialisation de votre mot de passe, veuillez ignorer ce message.

L'équipe ${sitename}`;
  },
  html(user, url) {
    return `<p>Bonjour,</p>

<p>Vous avez demandé la réinitialisation de votre mot de passe.</p>

<p>Pour réinitialiser votre mot de passe, cliquez sur le lien suivant:</p>

<p><a href="${url}">${url}</a></p>

<p>Si vous n'avez pas demandé la réinitialisation de votre mot de passe, veuillez ignorer ce message.</p>

<p>L'équipe ${sitename}</p>`;
  }
}

